<template>
  <v-app>
    <v-icon>{{ svgPath }}</v-icon>
    <Editor> </Editor>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mdiAccount } from '@mdi/js';
import Editor from './components/Editor.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Editor,
  },
  data: () => ({
    svgPath: mdiAccount,
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
