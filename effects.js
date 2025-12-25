import { Howler } from "howler";

export class EffectsChain {
  constructor(core) {
    this.core = core;
    this.ctx = Howler.ctx;
    this.analyser = this.ctx.createAnalyser();
    this.gain = this.ctx.createGain();
  }

  connect() {
    const node = this.core.sound?._sounds[0]?._node;
    if (!node) return;

    try {
      node.disconnect();
    } catch {}

    node.connect(this.gain);
    this.gain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
  }

  setGain(val) {
    this.gain.gain.value = val;
  }

  getAnalyser() {
    return this.analyser;
  }
}
