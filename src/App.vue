<template>
<div>
  <Header></Header>
  <DesignChoice></DesignChoice>
  <Footer></Footer>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
import Header from './components/Header.vue';
import DesignChoice from './components/DesignChoice.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    DesignChoice,
    Footer,
  },

  data: () => ({
    //
  }),
});
</script>
