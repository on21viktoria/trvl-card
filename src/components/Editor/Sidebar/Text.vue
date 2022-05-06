<template>
    <FontSize></FontSize>
</template>

<script lang="ts">
import Vue from "vue";
import FontSize from "./FontSize.vue";

export default Vue.extend({
  data: () => ({
  }),
  name: "Text",
  components: {FontSize},
  props: {},
  methods: {},
});
</script>

<style scoped>
.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}
.tool-title.subtitle {
  font-size: 16px;
}
</style>
