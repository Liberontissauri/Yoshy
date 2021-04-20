<template>
  <img src="@/assets/catcat.jpg" alt="" class="dialog-img">
</template>

<script>

export default {
    props: {
        img_path: String,
    }
}
</script>

<style>
    .dialog-img {
        width: 100%;
        height: 100%;
    }
</style>