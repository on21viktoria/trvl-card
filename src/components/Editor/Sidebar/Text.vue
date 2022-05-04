<template>
  <div>
    <p class="tool-title">Text</p>
    <fontcolor></fontcolor>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Fontcolor from "./Fontcolor.vue";

export default Vue.extend({
  data() {
    return {
    };
  },
  name: "Text",
  components: {
    Fontcolor,
  },
  props: {},
  methods: {
  },
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
