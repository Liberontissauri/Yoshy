import { createStore } from 'vuex'

export default createStore({
  state: {
    timer_time: 0, // In seconds
    input_time: 0,      // In minutes
    running: true,
  },
  getters: {
    getTime(state) {
      return state.timer_time;
    },
    getInput(state) {
      return state.input_time;
    },
    getRunning(state) {
      return state.running;
    }
  },
  mutations: {
    setTime(state, time) {
      state.timer_time = time;
    },
    setInputTime(state, time) {
      state.input_time = time;
    },
    setRunning(state, value) {
      state.running = value;
    },
    decreaseTime(state) {
      state.timer_time -= 1;
    },
  },
  actions: {
    updatefromInputTime(context) {
      context.commit("setRunning", false);
      context.commit("setTime", context.getters.getInput * 60); // convert to seconds and send
    },
    changeInputTime(context, time) {
      if(!isNaN(parseInt(time))) {
        context.commit("setInputTime", parseInt(time));
      }
    },
    toggleRunning(context) {
      context.commit("setRunning", !context.getters.getRunning);
    },
    onSecond(context) { //function ran in each second
      console.log("heyhey")
      if(context.getters.getTime > 0 && context.getters.getRunning) {
        context.commit("decreaseTime");
      }
    }
  },
  modules: {
  }
})
