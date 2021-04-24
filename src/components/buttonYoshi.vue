<template>
  <button class="yoshi-button">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: String,
    }
}
</script>

<style>
    .yoshi-button {
      height: 50px;
      width: 200px;

      background-color: #8fc066;

      color: white;
      font-size: 20pt;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      
      border: 0;
      border-radius: 15px;
    }
    .yoshi-button:hover {
      cursor: pointer;
    }
</style>