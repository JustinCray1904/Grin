import { Howl, Howler } from "howler";
import { eventBus } from "./events.js";

let sound = null;
let audioCtx = Howler.ctx;

export function loadAndPlay(filePath) {
  if (!filePath) return;

  // Resume AudioContext (CRITICAL)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  if (sound) {
    sound.unload();
  }

  sound = new Howl({
    src: [`file://${filePath}`],
    html5: true,
    volume: 1.0,
    onloaderror: (id, err) => console.error("Load error:", err),
    onplayerror: (id, err) => console.error("Play error:", err)
  });

  sound.play();
}

// class PlaybackCore {
//   constructor() {
//     this.sound = null;
//     this.state = {
//       playing: false,
//       progress: 0,
//       duration: 0,
//       rate: 1
//     };
//   }

//   load(src) {
//     if (this.sound) this.sound.unload();

//     this.sound = new Howl({
//       src: [src],
//       html5: false,

//       onload: () => {
//         this.state.duration = this.sound.duration();
//         eventBus.emit("state", this.state);
//       },

//       onplay: () => {
//         this.state.playing = true;
//         eventBus.emit("audio-ready"); // 🔑 IMPORTANT
//         this.tick();
//       },

//       onpause: () => {
//         this.state.playing = false;
//         eventBus.emit("state", this.state);
//       }
//     });
//   }

//   async play() {
//     await Howler.ctx.resume(); // 🔑 user gesture fix
//     this.sound?.play();
//   }

//   pause() {
//     this.sound?.pause();
//   }

//   rate(val) {
//     this.state.rate = val;
//     this.sound?.rate(val);
//     eventBus.emit("state", this.state);
//   }

//   tick() {
//     if (!this.sound || !this.state.playing) return;
//     this.state.progress = this.sound.seek() || 0;
//     eventBus.emit("state", this.state);
//     requestAnimationFrame(() => this.tick());
//   }
// }

// export const playback = new PlaybackCore();
