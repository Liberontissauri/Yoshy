<template>
    <transition name="fade">
    <div class="blur-background" v-if="active">
        <div class="dialog-box">
            <div class="dialog-top-bar">
                <img :src="close_btn" alt="" class="close-btn" @click="$emit('dialog_close', dialog_name)">
                <h2 class="dialog-text">{{ title }}</h2>
            </div>
            <div class="dialog-slot">
                <slot />
            </div>
            
        </div>
    </div>
    </transition>
  
</template>

<script>
import close_btn from '@/assets/close.svg'
export default {
    props: {
        dialog_name: String,
        title: String,
        active: Boolean,
    },
    data: function() {
        return {
            close_btn: close_btn
        }
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }

    .dialog-slot {
        display: flex;
        width: 100%;
        height: 440px;
        z-index: 800;
    }
    .dialog-text {
        font-size: 17pt;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
    }
    .close-btn {
        height:60%;
        transition: 0.1s ease-in opacity;
        transition: 0.1s ease-in height;
    }
    .close-btn:hover {
        cursor: pointer;
        opacity: 0.7;
        height: 62%;
    }
    .dialog-top-bar {
        z-index: 900;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        padding: 0 3%;
        width: 94%;
        height: 60px;

        
        box-shadow: 0px -5px 8px #7c7c7c9f;
        background-color: rgba(235, 235, 235, 0.363);
    }
    .blur-background {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: rgba(32, 32, 36, 0.205);
    }
    .dialog-box {
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 3;
        z-index: 900;
        max-width: 700px;
        height: 500px;

        background-color: rgb(240, 240, 240);
    }
</style>