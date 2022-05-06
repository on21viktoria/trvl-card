<template>
  <div>
    <p class="tool-title">Hintergrund</p>
    <p>
      Ihr könnt hier entweder zwischen einem Hintergrundbild oder einer Farbe
      wählen.
    </p>
    <p class="tool-title subtitle">Hintergrundfarbe</p>
    <input
      type="color"
      id="selection-color"
      name="color-selection"
      value="#ff0000"
      @input="changeColor()"
    />
    <!-- <p class="tool-title">Suche</p>
    <v-text-field label="Suche" solo prepend-inner-icon="mdi-magnify"></v-text-field> -->
    <p class="tool-title subtitle">Bildauswahl</p>
    <div class="Photogrid">
      <img
        @click="changeBackgroundPicture('Ampel_Philippe-Oursel_72dpi.jpg')"
        src="./../../../assets/images-trvl-card-72dpi/Ampel_Philippe-Oursel_72dpi.jpg"
        width="100%"
      />
      <img
        @click="
          changeBackgroundPicture('Berliner-Mauer_Mateo-Krossler_72dpi.jpg')
        "
        src="./../../../assets/images-trvl-card-72dpi/Berliner-Mauer_Mateo-Krossler_72dpi.jpg"
        width="100%"
      />
      <img
        @click="
          changeBackgroundPicture('Brandenburger-Tor_Hakon-Sataoen_72dpi.jpg')
        "
        src="./../../../assets/images-trvl-card-72dpi/Brandenburger-Tor_Hakon-Sataoen_72dpi.jpg"
        width="100%"
      />
      <img
        @click="
          changeBackgroundPicture(
            'Checkpoint-Charlie_Santiago-flores_72dpi.jpg'
          )
        "
        src="./../../../assets/images-trvl-card-72dpi/Checkpoint-Charlie_Santiago-flores_72dpi.jpg"
        width="100%"
      />
      <img
        @click="
          changeBackgroundPicture('Fernsehturm_Camilla-Bundgaard_72dpi.jpg')
        "
        src="./../../../assets/images-trvl-card-72dpi/Fernsehturm_Camilla-Bundgaard_72dpi.jpg"
        width="100%"
      />
      <img
        @click="
          changeBackgroundPicture('Museumsinsel_Christian-Ladewig_72dpi.jpg')
        "
        src="./../../../assets/images-trvl-card-72dpi/Museumsinsel_Christian-Ladewig_72dpi.jpg"
        width="100%"
      />
      <img
        @click="changeBackgroundPicture('Olympiastadion_Samuel-Svec_72dpi.jpg')"
        src="./../../../assets/images-trvl-card-72dpi/Olympiastadion_Samuel-Svec_72dpi.jpg"
        width="100%"
      />
      <img
        @click="changeBackgroundPicture('Reichstag_Fionn-Grosseh_72dpi.jpg')"
        src="./../../../assets/images-trvl-card-72dpi/Reichstag_Fionn-Grosseh_72dpi.jpg"
        width="100%"
      />
      <img
        @click="changeBackgroundPicture('Stadtansicht2_Stefan-Widua_72dpi.jpg')"
        src="./../../../assets/images-trvl-card-72dpi/Stadtansicht2_Stefan-Widua_72dpi.jpg"
        width="100%"
      />
      <img
        @click="changeBackgroundPicture('Stadtansicht_Florian-Wehde_72dpi.jpg')"
        src="./../../../assets/images-trvl-card-72dpi/Stadtansicht_Florian-Wehde_72dpi.jpg"
        width="100%"
      />
      <img
        @click="changeBackgroundPicture('U-Bahn_Soroush-Karimi_72dpi.jpg')"
        src="./../../../assets/images-trvl-card-72dpi/U-Bahn_Soroush-Karimi_72dpi.jpg"
        width="100%"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Background",
  data: () => ({}),
  mounted() {
    let colorselector = document.getElementById(
      "color-selection"
    ) as HTMLInputElement;
  },
  methods: {
    changeBackgroundPicture(picture: string) {
      this.$store.dispatch("setPicture", picture);
    },
    changeColor() {
      let colorselector = document.getElementById(
        "selection-color"
      ) as HTMLInputElement;
      console.log(colorselector.value);
      this.$store.dispatch("setBackgroundColor", colorselector.value);
    },
  },
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
</style>