<template>
  <div class="mainDiv">
    <settingsButton @click="openSettings"></settingsButton>
    <clock v-bind:time="current_time"/>
    <div>
      <number-input v-bind:hasButton="true" v-bind:buttonText="'Set Time'"/>
    </div>
    <button-yoshi v-bind:text="counting_text" @click="clickTimerButton"/>
  </div>
  <dialogYoshi :active="isOpen_img_dialog" :title="'Enjoy your Image!'"
  
  @dialog_close="closeImg"
  ><img :src="selected_url" alt="" class="dialog-img"></dialogYoshi>

  <dialogYoshi :active="isOpen_settings_dialog" :title="''" @dialog_close="closeSettings">
    <settings/>
  </dialogYoshi>
  
</template>

<script>
import clock from './components/clock';
import dialogYoshi from './components/dialogYoshi'
import buttonYoshi from './components/buttonYoshi'
import numberInput from './components/numberInput';
import settingsButton from './components/settingsButton'
import settings from './components/settings'


export default {
  name: 'App',
  components: {
    clock,
    buttonYoshi,
    numberInput,
    dialogYoshi,
    settings,
    settingsButton,
  },
  methods: {
    clickTimerButton() {
      this.$store.dispatch('toggleRunning');
      this.$store.dispatch('randomizeLink');
      },
    closeImg() {
      this.$store.commit('setImgDialogOpen', false);
    },
    openSettings() {
      this.$store.commit('setSettingsDialogOpen', true);
    },
    closeSettings() {
      this.$store.commit('setSettingsDialogOpen', false);
    }
  },
  computed: {
    current_time() {
      return this.$store.getters.getTime;
    },
    counting_text() {
      if (this.$store.getters.getRunning) {
        return "Stop";
      } else {
        return "Start";
      }
    },
    isOpen_img_dialog() {
      return this.$store.getters.getImgDialogOpen;
    },
    isOpen_settings_dialog() {
      return this.$store.getters.getSettingsDialogOpen;
    },
    selected_url() {
      return this.$store.getters.getSelectedLink;
    }
  },
  mounted() {
    setInterval(() => this.$store.dispatch("onSecond"), 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Montserrat:wght@500&family=Montserrat:wght@200&display=swap');

html, body, #app, .mainDiv {
  height: 100%;
  overflow-y: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mainDiv {
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}
.dialog-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

</style>
