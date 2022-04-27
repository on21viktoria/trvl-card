<template>
  <div>
    <p class="tool-title">Fotos</p>
    <!-- <p class="tool-title subtitle">Suche</p>
    <v-text-field
      label="Suche"
      solo
      prepend-inner-icon="mdi-magnify"
    ></v-text-field> -->
    <p class="tool-title subtitle">Bildauswahl</p>
    <div class="Photogrid">
      <img src="./../../../assets/images-trvl-card-72dpi/Ampel_Philippe-Oursel_72dpi.jpg" width="100%" />
      <img
        src="./../../../assets/images-trvl-card-72dpi/Berliner-Mauer_Mateo-Krossler_72dpi.jpg"
        width="100%"
      />
      <img
        src="./../../../assets/images-trvl-card-72dpi/Brandenburger-Tor_Hakon-Sataoen_72dpi.jpg"
        width="100%"
      />
      <img
        src="./../../../assets/images-trvl-card-72dpi/Checkpoint-Charlie_Santiago-flores_72dpi.jpg"
        width="100%"
      />
      <img
        src="./../../../assets/images-trvl-card-72dpi/Fernsehturm_Camilla-Bundgaard_72dpi.jpg"
        width="100%"
      />
      <img
        src="./../../../assets/images-trvl-card-72dpi/Museumsinsel_Christian-Ladewig_72dpi.jpg"
        width="100%"
      />
      <img src="./../../../assets/images-trvl-card-72dpi/Olympiastadion_Samuel-Svec_72dpi.jpg" width="100%" />
      <img src="./../../../assets/images-trvl-card-72dpi/Reichstag_Fionn-Grosseh_72dpi.jpg" width="100%" />
      <img src="./../../../assets/images-trvl-card-72dpi/Stadtansicht2_Stefan-Widua_72dpi.jpg" width="100%" />
      <img src="./../../../assets/images-trvl-card-72dpi/Stadtansicht_Florian-Wehde_72dpi.jpg" width="100%" />
      <img src="./../../../assets/images-trvl-card-72dpi/U-Bahn_Soroush-Karimi_72dpi.jpg" width="100%" />
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
.tool-title.subtitle {
  font-size: 16px;
}
</style>
