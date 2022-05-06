<template>
  <div class="card" style="width: 30rem">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
      <button class="hovereffect" @click="onClick"><router-link class="button button-signup hovereffect" :to="`/editor/${id}`" 
        >Jetzt gestalten</router-link></button>
    </div>
  </div>
</template>

<script lang="ts">
import { EventBus } from "@/main";
import Vue from "vue";

export default Vue.extend({
  name: "DesignChoice",
  props: {
    title: String,
    text: String,
    image: String,
    id: String,
  }, 
  methods: {
    onClick() {
      EventBus.$emit('changeHeader')
    }
  }
});
</script>
