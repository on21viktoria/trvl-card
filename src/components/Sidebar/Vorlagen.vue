<template>
    <div>
    <p class="tool-title">Suche</p>
    <v-text-field label="Suche" solo prepend-inner-icon="mdi-magnify"></v-text-field>
    <p class="tool-title">Vorlagenauswahl</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Vorlagen",
  components: {},
  props: {
  },
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
</style>
