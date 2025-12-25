export const presets = {
  normal(core, effects) {
    core.rate(1);
    effects.setGain(1);
  },

  slowed(core, effects) {
    core.rate(0.85);
    effects.setGain(1.1);
  },

  speed(core, effects) {
    core.rate(1.25);
    effects.setGain(1);
  }
};
