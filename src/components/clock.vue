<template>
  <div class="timer-circle">
      <h2 class="timer-text">{{ fullTime }}</h2>
  </div>
</template>

<script>
export default {
    props: {
        time: Number,

    },
    computed: {
        fullTime() {
            let time = this.time;
            let final_time = "";

            let hours = Math.floor(time / 3600);
            let minutes = Math.floor(time/60) - hours * 60;
            let seconds = time - hours * 3600 - minutes * 60;

            if(hours / 10 < 1) hours = `0${hours}`;
            if(minutes / 10 < 1) minutes = `0${minutes}`;
            if(seconds / 10 < 1) seconds = `0${seconds}`;

            final_time = `${hours}:${minutes}:${seconds}`;
            
            return final_time;
        },
    }
}
</script>

<style>
    .timer-circle {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 400px;
        height: 400px;

        border: 6px solid #c3cf0a;
        border-radius: 50%;
    }
    .timer-text {
        color: #291c05;
        font-size: 35pt;
        font-family: 'Montserrat', sans-serif;
    }
</style>