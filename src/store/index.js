import { createStore } from 'vuex'

export default createStore({
  state: {
    timer_time: 0, // In seconds
    input_time: 0,      // In minutes
    running: true,
    img_dialog_open: true,
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
    },
    getImgDialogOpen(state) {
      return state.img_dialog_open;
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
    setImgDialogOpen(state, value) {
      state.img_dialog_open = value;
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
      if(context.getters.getTime > 0 && context.getters.getRunning) {
        context.commit("decreaseTime");
        if(context.getters.getTime == 0) {
          context.commit("setImgDialogOpen", true);
        }
      }
    }
  },
  modules: {
  }
})
