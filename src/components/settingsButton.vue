<template>
  <div class="settings-btn-div">
      <img class="settings-btn-img" :src="settings_button" alt="">
  </div>
</template>

<script>
import settings_button from "../assets/settings.svg"
export default {
    data: function() {
        return {
            settings_button: settings_button,
        }
    }
}
</script>

<style>
    .settings-btn-div {
        position: absolute;
        top: 20px;
        left: 40px;
    }
    .settings-btn-img {
        width: 80px;
        height: 80px;
        transition: opacity 0.3s ease-out;
    }
    .settings-btn-img:hover {
        cursor: pointer;
        opacity: 0.6;;
    }
</style>