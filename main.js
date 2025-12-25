// import { playback } from "../core/playbackCore.js";
// import { EffectsChain } from "../core/effects.js";
// import { presets } from "../core/presets.js";
// import { eventBus } from "../core/events.js";
// import { drawWaveform } from "../core/analyzer.js";
import { loadAndPlay } from "../core/playbackCore.js";

document.getElementById("loadFile").onclick = async () => {
  const file = await window.grin.loadFile();
  window.currentFile = file;
};

document.getElementById("play").onclick = () => {
  loadAndPlay(window.currentFile);
};



// const effects = new EffectsChain(playback);

// // UI → Commands ONLY
// document.getElementById("play").onclick = async () => {
//   await playback.play();
// };

// document.getElementById("pause").onclick = () => playback.pause();
// document.getElementById("slowed").onclick = () => presets.slowed(playback, effects);
// document.getElementById("normal").onclick = () => presets.normal(playback, effects);

// // Load audio (file MUST exist)
// playback.load("sample.mp3");

// // Connect effects ONLY when audio node exists
// eventBus.subscribe("audio-ready", () => {
//   effects.connect();
//   drawWaveform(effects.getAnalyser(), document.getElementById("wave"));
// });

// // Reflect state
// eventBus.subscribe("state", state => {
//   document.getElementById("status").textContent =
//     `${state.playing ? "Playing" : "Paused"} – ${state.progress.toFixed(1)}s`;
// });
