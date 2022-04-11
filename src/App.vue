<template>
  <div>
    <h1>trvl card</h1>
    <Editor> </Editor>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Editor from './components/Editor.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Editor,
  },
  data: () => ({
    //
  }),
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
