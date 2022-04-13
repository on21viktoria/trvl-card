<template>
    <div class="postcard">
        <h3>Ich bin eine Postkarte</h3>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'PostcardLayout',
  components: {
  },

  data: () => ({
  }),
});
</script>

<style>

.postcard {
  position: relative;
  background-color: white;
  width: 650px;
  height: 430px;
}

</style>