/**
 * Sound effects utility for FreeReels app interactions
 */
class SoundEffects {
  private coinAudio: HTMLAudioElement | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        this.coinAudio = new Audio('/assets/extracted/coin_sound_soft_effect.m4a');
        this.coinAudio.volume = 0.4;
      } catch {
        // audio not supported or blocked
      }
      const saved = localStorage.getItem('freereels_sound_enabled');
      if (saved !== null) {
        this.soundEnabled = saved === 'true';
      }
    }
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('freereels_sound_enabled', String(enabled));
    }
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  public playLikeSound() {
    if (!this.soundEnabled || !this.coinAudio) return;
    try {
      this.coinAudio.currentTime = 0;
      this.coinAudio.play().catch(() => {
        // autoplay restriction might prevent playback until user gesture
      });
    } catch {
      // ignore
    }
  }
}

export const soundManager = new SoundEffects();
