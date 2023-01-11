<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <Editor
      api-key="hlx66xn9xoh8dkd398faj549n63pm0to6xeqzwt6j8vmpx1r"
      :init="{
       plugins: 'lists link image table code help wordcount'
      }"
      model-events="change keydown blur focus paste"
      v-model="content"
      @change="seeContent"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Editor from '@tinymce/tinymce-vue'
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    Editor,
  },
  data(){
    return {
      content:"",
    }
  },
  methods:{
    seeContent(){
      console.log(this.content);
      
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
