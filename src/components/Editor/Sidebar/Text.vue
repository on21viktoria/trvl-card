<template>
<div>
    <FontSize></FontSize>
<FontChoice></FontChoice>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import FontSize from "./FontSize.vue";
import FontChoice from "./FontChoice.vue";

export default Vue.extend({
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  name: "Text",
  components: {
    FontSize, 
    FontChoice},
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
