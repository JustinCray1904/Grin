import { eventBus } from "../core/events.js";

eventBus.subscribe("state", state => {
  console.log("MiniPlayer sync:", state.progress);
});
