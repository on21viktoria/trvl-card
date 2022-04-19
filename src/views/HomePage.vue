<template>
  <h1>trvl-card</h1>
</template>

<script lang="ts">
import Vue from "vue";
import DesignChoice from "./../components/DesignChoice.vue";
import Welcome from "./../components/Welcome.vue";

export default Vue.extend({
  name: "HomePage",
  components: { DesignChoice, Welcome },
});
</script>