<template>
  <div>
    <Welcome></Welcome>
    <div class="designchoice">
      <div v-for="postcard in postcards" :key="postcard.id">
        <DesignChoice :id="postcard.id" :title="postcard.title" :text="postcard.text" :image="require(`./../assets/images-trvl-card/${postcard.image}.jpg`)"></DesignChoice>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesignChoice from "../components/DesignChoice.vue";
import Welcome from "../components/Welcome.vue";

export default Vue.extend({
  name: "Home",
  components: { DesignChoice, Welcome },
  data: () => ({
    postcards: [
      {
        id: "blanko",
        title: "Blanko-Postkarte",
        text: "Starte ohne Vorlage mit einer Blanko-Postkarte.",
        image: "Fernsehturm_Camilla-Bundgaard"
    },
    {
        id: "large-letter",
        title: "Large-Letter-Design",
        text: "Starte mit dem Large-Letter-Design.",
        image: "Berliner-Mauer_Mateo-Krossler"
    }
    ]
  })
});
</script>