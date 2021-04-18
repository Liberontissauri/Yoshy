<template>
  <div class="mainDiv">
    <clock v-bind:time="current_time"/>
    <div>
      <number-input v-bind:hasButton="true" v-bind:buttonText="'Set Time'"/>
    </div>
    <button-yoshi v-bind:text="counting_text" @click="clickTimerButton"/>
  </div>
  
</template>

<script>
import clock from './components/clock';
import buttonYoshi from './components/buttonYoshi'
import numberInput from './components/numberInput';

export default {
  name: 'App',
  components: {
    clock,
    buttonYoshi,
    numberInput
  },
  methods: {
    clickTimerButton() {
      this.$store.dispatch('toggleRunning');

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
    }
  },
  mounted() {
    setInterval(() => this.$store.dispatch("onSecond"), 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Montserrat:wght@500&display=swap');

html, body, #app, .mainDiv {
  height: 95%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mainDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}
</style>
