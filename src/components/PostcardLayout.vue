<template>
    <div>
    <div v-for="item in items" :key="item.text">
      <div class="postcard">
        <h3>Ich bin die {{ item.text }} der Postkarte.</h3>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'PostcardLayout',
  components: {
  },

  data() {
    return {
      items: [
        { text: "Vorderseite" },
        { text: "Rückseite" },
      ] }
  },
})
</script>

<style>

.postcard {
  position: relative;
  background-color: white;
  width: 650px;
  height: 430px;
  margin: 40px;
}

</style>