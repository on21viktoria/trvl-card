<template>
  <div class="card">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
      <router-link :to="`/editor/${id}`" class="button button-signup"
        >Jetzt gestalten</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DesignChoice",
  props: {
    title: String,
    text: String,
    image: String,
    id: String,
  }
});
</script>

<style scoped>

.card {
  width: 25rem;
  height: auto;
}

</style>
