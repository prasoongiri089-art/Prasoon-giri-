/**
 * Web Audio API synthesizer for authentic meditation chime / Tibetan singing bowl
 * No external audio files required, runs 100% reliably in any modern browser.
 */

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Generates a warm Tibetan Singing Bowl chime with rich harmonic overtones
   */
  public playSingingBowl(fundamental: number = 216, duration: number = 3.5) {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Harmonics characteristic of a singing bowl
      const harmonics = [
        { freq: fundamental, gain: 0.6, decay: duration },
        { freq: fundamental * 2.76, gain: 0.35, decay: duration * 0.8 },
        { freq: fundamental * 5.4, gain: 0.15, decay: duration * 0.6 },
        { freq: fundamental * 8.9, gain: 0.08, decay: duration * 0.4 },
      ];

      harmonics.forEach(h => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        // Add subtle vibrato
        osc.frequency.setValueAtTime(h.freq, now);

        // Attack & Exponential Decay
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(h.gain, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + h.decay);
      });
    } catch {
      // AudioContext unavailable or autoplay blocked
    }
  }

  /**
   * Gentle transition bell
   */
  public playBellChime() {
    this.playSingingBowl(432, 2.2);
  }

  /**
   * Subtle breath tick
   */
  public playBreathTick() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, now);
      osc.frequency.exponentialRampToValueAtTime(396, now + 0.12);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch {
      // Ignore
    }
  }

  /**
   * Speak instruction cleanly using SpeechSynthesis
   */
  public speakText(text: string) {
    if (this.isMuted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel(); // Stop prior speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Calm, meditative pace
      utterance.pitch = 1.0;
      utterance.volume = 0.85;

      // Select gentle voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
      if (preferred) {
        utterance.voice = preferred;
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis not allowed or supported
    }
  }
}

export const soundManager = new SoundSynthesizer();
