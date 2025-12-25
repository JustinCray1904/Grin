export const eventBus = {
  events: {},

  subscribe(event, fn) {
    (this.events[event] ||= []).push(fn);
  },

  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
};
