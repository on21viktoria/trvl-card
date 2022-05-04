<template>
  <div>
    <p class="tool-title">Text</p>
    <p class="subtitle">Rückseite der Postkarte</p>
    <v-divider id="divider-sidebar"></v-divider>
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
  margin-bottom: 15px;
  text-align: center;
}
.subtitle {
  font-size: 15px;
  text-align: center;
  margin-bottom: 0;
}

#divider-sidebar {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
