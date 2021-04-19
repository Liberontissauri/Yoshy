<template>
  <div class="numberInputDiv">
      <input type="text" placeholder="Insert Minutes..." @change="inputChange">
      <button v-if="hasButton" @click="updateTime">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
    props: {
        hasButton: Boolean,
        buttonText: String
    },
    methods: {
        inputChange(event) {
            this.$store.dispatch("changeInputTime", event.target.value)
            console.log(this.$store.getters.getInput)
        },
        updateTime() {
            this.$store.dispatch("updatefromInputTime")
        }
    }
}
</script>

<style>
    .numberInputDiv{
        display: flex;
        flex-direction: row;

        height: 60px;
    }
    .numberInputDiv input {
        height: 100%;

        text-align: center;

        padding: 0 20px;
        margin-right: 20px;

        color: white;
        font-size: 16pt;
        font-family: 'Montserrat', sans-serif;

        background-color: #dbdbdc;
        border: 0;
        border-radius: 20px;
    }
    .numberInputDiv button {
        height: 100%;

        color: white;
        font-size: 16pt;
        font-family: 'Montserrat', sans-serif;

        background-color: #8fc066;
        border: 0;
        border-radius: 20px;
    }
</style>