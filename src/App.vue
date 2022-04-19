<template>
  <v-app>
    <Contactform></Contactform>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Contactform from './components/Contactform.vue';
import Editor from './components/Editor.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Editor,
    Contactform,
  },
  data: () => ({
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
