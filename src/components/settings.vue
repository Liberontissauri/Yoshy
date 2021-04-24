<template>
  <div class="settings-div">
      <h1 class="settings-h1">Settings</h1>
      <h2 class="settings-h2">Images</h2>
      <w-input class="settings-input-1" v-model="inputed" placeholder="Type URL ..." outline=true></w-input>

      <w-list :items="list_links" v-model="selection" color="menu-color-1" hover></w-list>
      <buttonYoshi class="settings-button-1" text="add image" @click="addImage"></buttonYoshi>
      <buttonYoshi class="settings-button-2" text="Remove Selected" @click="removeImage"></buttonYoshi>

  </div>
</template>

<script>
import buttonYoshi from './buttonYoshi';

export default {
    data: function() {
        return {
            inputed: "",
            selection: null
        }
    },
    methods: {
        addImage: function(){
            this.$store.commit("addLink", this.inputed);
        },
        removeImage: function(){
            this.$store.dispatch("removeLink", this.selection);
            this.selection = null;
        },
    },
    computed: {
        list_links:  function() {
            let links = this.$store.getters.getImgLinks;
            let final_links_list = [];
            for (let index = 0; index < links.length; index++) {
                const element = links[index];
                final_links_list.push({
                    label: element,
                    value: index
                })
                
            }
            return final_links_list;
        },
    },
    components: {
        buttonYoshi,
    }
}
</script>

<style>
    .settings-div {
        height: 87%;
        width: 96%;
        padding: 4%;
        overflow: scroll;
        overflow-x: hidden;
    }
    .settings-h1 {
        color: #291c05;
        font-size: 25pt;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 30px;
    }
    .settings-h2 {
        color: #291c05;
        font-size: 18pt;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 15px;
    }
    .settings-input-1 {
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 10px;
    }
    .settings-button-1 {
        margin-top: 20px;
        height: 30px;
        font-size: 12pt;
    }
    .settings-button-2 {
        margin-top: 20px;
        margin-left: 20px;
        height: 30px;
        font-size: 12pt;
    }
    .menu-color-1 {color: #607e47;}
</style>