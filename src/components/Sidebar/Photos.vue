<template>
  <div>
    <p class="tool-title">Suche</p>
    <v-text-field
      label="Suche"
      solo
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <p class="tool-title">Bildauswahl</p>
    <div class="Photogrid">
      <img src="C:\Users\PC302114\Isabel Köcher\DHBW\1. Studienjahr\2. Semester\P1_Projektmanagement cont\Gruppe 5\trvl-card\src\assets\images-trvl-card\Ampel_Philippe-Oursel.jpg" width="100%" />
      <img
        src="C:\Users\PC302114\Isabel Köcher\DHBW\1. Studienjahr\2. Semester\P1_Projektmanagement cont\Gruppe 5\trvl-card\src\assets\images-trvl-card\Berliner-Mauer_Mateo-Krossler.jpg"
        width="100%"
      />
      <!-- <img
        src="./../../assets/images-trvl-card/Berlin/Brandenburger-Tor_Hakon-Sataoen.jpg"
        width="100%"
      />
      <img
        src="./../../assets/images-trvl-card/Berlin/Checkpoint-Charlie_Santiago-flores.jpg"
        width="100%"
      />
      <img
        src="./../../assets/images-trvl-card/Berlin/Fernsehturm_Camilla-Bundgaard.jpg"
        width="100%"
      />
      <img
        src="./../../assets/images-trvl-card/Berlin/Museumsinsel_Christian-Ladewig.jpg"
        width="100%"
      />
      <img src="./../../assets/images-trvl-card/Berlin/Olympiastadion_Samuel-Svec.jpg" width="100%" />
      <img src="./../../assets/images-trvl-card/Berlin/Reichstag_Fionn-Grosseh.jpg" width="100%" />
      <img src="./../../assets/images-trvl-card/Berlin/Stadtansicht_Florian-Wehde.jpg" width="100%" />
      <img src="./../../assets/images-trvl-card/Berlin/Stadtansicht2_Stefan-Widua.jpg" width="100%" />
      <img src="./../../assets/images-trvl-card/Berlin/U-Bahn_Soroush-Karimi.jpg" width="100%" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Photos",
  components: {},
  methods: {},
});
</script>

<style scoped>
.Photogrid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
}

img:hover {
  opacity: 30%;
}

.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}
</style>
