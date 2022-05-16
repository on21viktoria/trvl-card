<template>
  <div>
    <Welcome></Welcome>
    <div class="designchoice">
      <div v-for="postcard in postcards" :key="postcard.id">
        <DesignChoice :id="postcard.id" :title="postcard.title" :text="postcard.text" :image="require(`./../assets/images-trvl-card/${postcard.image}`)"></DesignChoice>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DesignChoice from "../components/HomePage/DesignChoice.vue";
import Welcome from "../components/HomePage/Welcome.vue";
import Footer from "../components/Footer.vue"

export default Vue.extend({
  name: "Home",
  components: { DesignChoice, Welcome, Footer },
  data: () => ({
    postcards: [
      {
        id: "blanko",
        title: "Blanko-Postkarte",
        text: "Starte ohne Vorlage mit einer Blanko-Postkarte.",
        image: "BlankoPostkarte.jpg"
    },
    {
        id: "large-letter",
        title: "Large-Letter-Design",
        text: "Starte mit dem Large-Letter-Design.",
        image: "LargeLetterDesign_Berlin.jpg"
    }
    ]
  })
});
</script>