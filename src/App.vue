<template>
  <div>
    <Header></Header>
    <div class="body">
    <Welcome></Welcome>
    <DesignChoice></DesignChoice>
    </div>
    <Footer></Footer>
  <h1>trvl card</h1>
  <router-view></router-view>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Header from './components/Header.vue';
import DesignChoice from './components/DesignChoice.vue';
import Footer from './components/Footer.vue';
import Help from './components/Help.vue';
import Welcome from './components/Welcome.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    DesignChoice,
    Help,
    Footer,
    Welcome,
  }});
</script>
