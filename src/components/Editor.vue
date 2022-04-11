<template>
    <Toolbar></Toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './Toolbar.vue';

export default Vue.extend({
  name: 'Editor',
  components: {
    Toolbar,
  },
  data: () => ({
    //
  }),
});
</script>
