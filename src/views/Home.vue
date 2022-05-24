<template>
  <div>
    <Header></Header>
    <div class="home">
    <Welcome></Welcome>
    <div class="designchoice">
      <div v-for="postcard in postcards" :key="postcard.id">
        <!-- Bootstrap card -->
        <DesignChoice :id="postcard.id" :title="postcard.title" :text="postcard.text" :image="require(`./../assets/images-trvl-card/${postcard.image}`)"></DesignChoice>
      </div>
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
import Header from '../components/Header.vue'

export default Vue.extend({
  name: "Home",
  components: { DesignChoice, Welcome, Header, Footer },
  data: () => ({
    /* Bootstrap card Eigenschaften */
    postcards: [
    {
        id: "large-letter",
        title: "Zum Postkarten-Editor",
        text: "Starte jetzt mit der Gestaltung deiner individuellen Postkarte.",
        image: "LargeLetterDesign_Berlin.jpg"
    }
    ]
  })
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-left: 90px;
  margin-right: 120px;
  margin-bottom: 50px;
}

</style>