<template>
  
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  <EditorComponent></EditorComponent>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EditorComponent from './components/EditorComponent.vue';
import ToolbarComponent from './components/ToolbarComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    EditorComponent,

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
