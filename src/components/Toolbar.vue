<template>
  <div>
    <div id="headerContainer">
    </div>
    <div class="container">
      <div id="postkartenContainer">
        <img alt="trvl Card Logo" src="./assets/logo_trvl.png">
        <img alt="Logo" src="./assets/logo.png">
      </div>
      <div id="toolbarContainer">
        <h1> Toolbar </h1>
        <div class="toolComponent"> </div>
        <div class="toolComponent"> </div>
        <div class="toolComponent"> </div>
        <div class="toolComponent"> </div>
        <div class="toolComponent"> </div>
        <div class="toolComponent"> </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Toolbar',
  components: {
  },
  data: () => ({
    //
  }),
});
</script>

<style scoped>

#headerContainer{
  background-color: cadetblue;
  max-width: 100%;
  height: 100px;
}

.container {
    max-width: 100%;
    height: 100%;
  }

  #postkartenContainer {
      position: relative;
      background-color: black;
      width: 70%;
      height: 100%;
      float: right;
  }

  #toolbarContainer {
      position: relative;
      background-color: darkBlue;
      width: 15%;
      height: 100vh;
      float:left;
      margin: 0;
  }

  #toolbarContainer #toolComponent {
      background-color: aqua;
      width: 100%;
      height: (100vh/6);
      float: left;
  }

</style>
