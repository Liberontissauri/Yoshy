import { createStore } from 'vuex'

export default createStore({
  state: {
    timer_time: 0, // In seconds
    input_time: 0,      // In minutes
    running: true,
    img_dialog_open: false,
    settings_dialog_open: false,
    selected_link: 0,
    link_list: [
      "https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png",
      "https://image.winudf.com/v2/image/Y29tLkhEV2FsbHBhcGVyLmN1dGVjYXRjX3NjcmVlbl80XzE1MjQzNzk3MDJfMDQw/screen-4.jpg?fakeurl=1&type=.jpg",
      "https://cdn.pixabay.com/photo/2019/05/13/22/19/cat-baby-4201051_960_720.jpg",
    ]
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
    getImgLinks (state) {
      return state.link_list;
    },
    getSelectedLink(state) {
      if(state.link_list.length > 0) {
        return state.link_list[state.selected_link];
      } else {
        return "https://i.stack.imgur.com/y9DpT.jpg"
      }
    },
    getImgDialogOpen(state) {
      return state.img_dialog_open;
    },
    getSettingsDialogOpen(state) {
      return state.settings_dialog_open;
    },
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
    setSettingsDialogOpen(state, value) {
      state.settings_dialog_open = value;
    },
    setSelectedLink(state, index) {
      state.selected_link = index;
    },
    addLink(state, link) {
      state.link_list.push(link);
    },
    decreaseTime(state) {
      state.timer_time -= 1;
    },
  },
  actions: {
    removeLink(context, index) {
      context.state.link_list.splice(index, 1);
      
    },
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
    randomizeLink(context) {
      let link_list_length = context.getters.getImgLinks.length;
      let randomIndex = Math.floor(Math.random() * link_list_length);

      context.commit("setSelectedLink", randomIndex)
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
