<template>
  <div class="photo-div">
    <p class="tool-title">Fotos</p>
    <p class="tool-title subtitle">Bildauswahl</p>

  <img id="emptyImage" src="./../../../assets/platzhalter/leer_mit_strich.png" width="30%"
      @click="changeBackgroundPicture('platzhalter/leer.png')"
    />

    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-berlin variant="info" 
            >Berlin</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-berlin" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-berlin_72dpi/Ampel_Philippe-Oursel_72dpi.jpg" width="100%"
              @click="changeBackgroundPicture('images-berlin_72dpi/Ampel_Philippe-Oursel_72dpi.jpg')"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Berliner-Mauer_Mateo-Krossler_72dpi.jpg" width="100%"
              @click="changeBackgroundPicture('images-berlin_72dpi/Berliner-Mauer_Mateo-Krossler_72dpi.jpg')"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Brandenburger-Tor_Hakon-Sataoen_72dpi.jpg"
              @click="changeBackgroundPicture('images-berlin_72dpi/Brandenburger-Tor_Hakon-Sataoen_72dpi.jpg')" width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Checkpoint-Charlie_Santiago-flores_72dpi.jpg"
              @click="changeBackgroundPicture('images-berlin_72dpi/Checkpoint-Charlie_Santiago-flores_72dpi.jpg')" width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Fernsehturm_Camilla-Bundgaard_72dpi.jpg"
              @click="changeBackgroundPicture('images-berlin_72dpi/Fernsehturm_Camilla-Bundgaard_72dpi.jpg')" width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Museumsinsel_Christian-Ladewig_72dpi.jpg"
              @click="changeBackgroundPicture('images-berlin_72dpi/Museumsinsel_Christian-Ladewig_72dpi.jpg')" width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Olympiastadion_Samuel-Svec_72dpi.jpg"
              @click="
          changeBackgroundPicture('images-berlin_72dpi/Olympiastadion_Samuel-Svec_72dpi.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Reichstag_Fionn-Grosseh_72dpi.jpg"
              @click="
          changeBackgroundPicture('images-berlin_72dpi/Reichstag_Fionn-Grosseh_72dpi.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Stadtansicht2_Stefan-Widua_72dpi.jpg"
              @click="
          changeBackgroundPicture('images-berlin_72dpi/Stadtansicht2_Stefan-Widua_72dpi.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/Stadtansicht_Florian-Wehde_72dpi.jpg"
              @click="
          changeBackgroundPicture('images-berlin_72dpi/Stadtansicht_Florian-Wehde_72dpi.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-berlin_72dpi/U-Bahn_Soroush-Karimi_72dpi.jpg"
              @click="
          changeBackgroundPicture('images-berlin_72dpi/U-Bahn_Soroush-Karimi_72dpi.jpg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-hamburg variant="info"
            >Hamburg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-hamburg" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-hamburg_72dpi/Hamburg_43625091.jpeg"
              @click="
          changeBackgroundPicture('images-hamburg_72dpi/Hamburg_43625091.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-hamburg_72dpi/Hamburg_57038016.jpeg"
              @click="
          changeBackgroundPicture('images-hamburg_72dpi/Hamburg_57038016.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-hamburg_72dpi/Hamburg_128585799.jpeg"
              @click="
          changeBackgroundPicture('images-hamburg_72dpi/Hamburg_128585799.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-hamburg_72dpi/Hamburg_139948950.jpeg"
              @click="
          changeBackgroundPicture('images-hamburg_72dpi/Hamburg_139948950.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-hamburg_72dpi/Hamburg_152735034.jpeg"
              @click="
          changeBackgroundPicture('images-hamburg_72dpi/Hamburg_152735034.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-hamburg_72dpi/Hamburg_316956027.jpeg"
              @click="
          changeBackgroundPicture('images-hamburg_72dpi/Hamburg_316956027.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-heidelberg variant="info" id="buttonChange"
            >Heidelberg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-heidelberg" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-heidelberg_72dpi/Heidelberg_172216125.jpeg"
              @click="
          changeBackgroundPicture('images-heidelberg_72dpi/Heidelberg_172216125.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-heidelberg_72dpi/Heidelberg_282847215.jpeg"
              @click="
          changeBackgroundPicture('images-heidelberg_72dpi/Heidelberg_282847215.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-heidelberg_72dpi/Heidelberg_287960169.jpeg"
              @click="
          changeBackgroundPicture('images-heidelberg_72dpi/Heidelberg_287960169.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-heidelberg_72dpi/Heidelberg_314522208.jpeg"
              @click="
          changeBackgroundPicture('images-heidelberg_72dpi/Heidelberg_314522208.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-karlsruhe variant="info"
            >Karlsruhe</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-karlsruhe" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-karlsruhe_72dpi/Karlsruhe_97134923.jpeg"
              @click="
          changeBackgroundPicture('images-karlsruhe_72dpi/Karlsruhe_97134923.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-karlsruhe_72dpi/Karlsruhe_107847681.jpeg"
              @click="
          changeBackgroundPicture('images-karlsruhe_72dpi/Karlsruhe_107847681.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-karlsruhe_72dpi/Karlsruhe_201271229.jpeg"
              @click="
          changeBackgroundPicture('images-karlsruhe_72dpi/Karlsruhe_201271229.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-karlsruhe_72dpi/Karlsruhe_395590535.jpeg"
              @click="
          changeBackgroundPicture('images-karlsruhe_72dpi/Karlsruhe_395590535.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-karlsruhe_72dpi/Karlsruhe_489449318.jpeg"
              @click="
          changeBackgroundPicture('images-karlsruhe_72dpi/Karlsruhe_489449318.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-koeln variant="info" id="buttonChange"
            >Köln</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-koeln" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-koeln_72dpi/Koeln_30192046.jpeg"
              @click="
          changeBackgroundPicture('images-koeln_72dpi/Koeln_30192046.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-koeln_72dpi/Koeln_120809336.jpeg"
              @click="
          changeBackgroundPicture('images-koeln_72dpi/Koeln_120809336.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-koeln_72dpi/Koeln_142173094.jpeg"
              @click="
          changeBackgroundPicture('images-koeln_72dpi/Koeln_142173094.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-koeln_72dpi/Koeln_170192054.jpeg"
              @click="
          changeBackgroundPicture('images-koeln_72dpi/Koeln_170192054.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-koeln_72dpi/Koeln_251826193.jpeg"
              @click="
          changeBackgroundPicture('images-koeln_72dpi/Koeln_251826193.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-mannheim variant="info"
            >Mannheim</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-mannheim" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-mannheim_72dpi/Mannheim_38408106.jpeg"
              @click="
          changeBackgroundPicture('images-mannheim_72dpi/Mannheim_38408106.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-mannheim_72dpi/Mannheim_116624575.jpeg"
              @click="
          changeBackgroundPicture('images-mannheim_72dpi/Mannheim_116624575.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-mannheim_72dpi/Mannheim_280067788.jpeg"
              @click="
          changeBackgroundPicture('images-mannheim_72dpi/Mannheim_280067788.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-mannheim_72dpi/Mannheim_307933513.jpeg"
              @click="
          changeBackgroundPicture('images-mannheim_72dpi/Mannheim_307933513.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-mosbach variant="info"
            >Mosbach</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-mosbach" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-mosbach_72dpi/Mosbach_206700603.jpeg"
              @click="
          changeBackgroundPicture('images-mosbach_72dpi/Mosbach_206700603.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-mosbach_72dpi/Mosbach_315686175.jpeg"
              @click="
          changeBackgroundPicture('images-mosbach_72dpi/Mosbach_315686175.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-mosbach_72dpi/Mosbach_463480456.jpeg"
              @click="
          changeBackgroundPicture('images-mosbach_72dpi/Mosbach_463480456.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-muenchen variant="info"
            >München</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-muenchen" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-muenchen_72dpi/Muenchen_49661244.jpeg"
              @click="
          changeBackgroundPicture('images-muenchen_72dpi/Muenchen_49661244.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-muenchen_72dpi/Muenchen_70535031.jpeg"
              @click="
          changeBackgroundPicture('images-muenchen_72dpi/Muenchen_70535031.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-muenchen_72dpi/Muenchen_187067448.jpeg"
              @click="
          changeBackgroundPicture('images-muenchen_72dpi/Muenchen_187067448.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-muenchen_72dpi/Muenchen_206386682.jpeg"
              @click="
          changeBackgroundPicture('images-muenchen_72dpi/Muenchen_206386682.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-muenchen_72dpi/Muenchen_215825149.jpeg"
              @click="
          changeBackgroundPicture('images-muenchen_72dpi/Muenchen_215825149.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-muenchen_72dpi/Muenchen_246832069.jpeg"
              @click="
          changeBackgroundPicture('images-muenchen_72dpi/Muenchen_246832069.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stuttgart variant="info"
            >Stuttgart</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-stuttgart" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-stuttgart_72dpi/Stuttgart_39472750.jpeg"
              @click="
          changeBackgroundPicture('images-stuttgart_72dpi/Stuttgart_39472750.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-stuttgart_72dpi/Stuttgart_246456316.jpeg"
              @click="
          changeBackgroundPicture('images-stuttgart_72dpi/Stuttgart_246456316.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-stuttgart_72dpi/Stuttgart_296612504.jpeg"
              @click="
          changeBackgroundPicture('images-stuttgart_72dpi/Stuttgart_296612504.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-stuttgart_72dpi/Stuttgart_304557577.jpeg"
              @click="
          changeBackgroundPicture('images-stuttgart_72dpi/Stuttgart_304557577.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-stuttgart_72dpi/Stuttgart_329362632.jpeg"
              @click="
          changeBackgroundPicture('images-stuttgart_72dpi/Stuttgart_329362632.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-wuerzburg variant="info"
            >Würzburg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-wuerzburg" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/images-wuerzburg_72dpi/Wuerzburg_71827480.jpeg"
              @click="
          changeBackgroundPicture('images-wuerzburg_72dpi/Wuerzburg_71827480.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-wuerzburg_72dpi/Wuerzburg_170627925.jpeg"
              @click="
          changeBackgroundPicture('images-wuerzburg_72dpi/Wuerzburg_170627925.jpeg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/images-wuerzburg_72dpi/Wuerzburg_276622665.jpeg"
              @click="
          changeBackgroundPicture('images-wuerzburg_72dpi/Wuerzburg_276622665.jpeg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Photos",
  methods: {
    changeBackgroundPicture(picture: string) {
      this.$store.dispatch("setPicture", picture);
    },
  },
});
</script>

<style scoped>
.photo-div {
  width: 100%;
  max-height: 800px;
  overflow: auto;
  margin-bottom: 20px;
}
.card-body {
  display: grid !important;
  grid-template-columns: 50% 50% !important;
  grid-template-rows: auto !important;
  column-gap: 10px !important;
  row-gap: 10px !important;
  padding: 25px 15px 25px 5px;
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

.btn {
  background-color: lightGrey;
  color: black;
  font-weight: 600;
  border: none;
  width: 100%;
}

.btn:hover {
  background-color: #ff4e00;
}

.btn:focus {
  box-shadow: none;
}

.card {
  border: none;
  padding: 0;
  margin: 0;
}

#emptyImage {
  padding: 20px 0;
  display: flex;
  margin: auto;
}

</style>
