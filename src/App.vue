<template>
<div>
  <Header></Header>
  <DesignChoice></DesignChoice>
</div>
</template>

<script lang="ts">

import Vue from 'vue';
import Header from './components/Header.vue';
import DesignChoice from './components/DesignChoice.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    DesignChoice,
  },

  data: () => ({
    //
  }),
});
</script>
