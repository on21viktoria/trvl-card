<template>
  <div>
    <p class="tool-title">Sticker</p>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerBerlin variant="info">Berlin</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerBerlin" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Berlin_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Berlin_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Berlin_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Berlin_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerHamburg variant="info">Hamburg</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerHamburg" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Hamburg_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Hamburg_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Hamburg_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Hamburg_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerHeidelberg variant="info">Heidelberg</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerHeidelberg" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Heidelberg_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Heidelberg_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Heidelberg_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Heidelberg_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerKarlsruhe variant="info">Karlsruhe</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerKarlsruhe" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Karlsruhe_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Karlsruhe_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Karlsruhe_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Karlsruhe_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerKoeln variant="info">Köln</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerKoeln" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Koeln_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Koeln_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Koeln_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Koeln_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerMannheim variant="info">Mannheim</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerMannheim" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_02/Schriftzug_Mannheim_02.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Mannheim_01.svg')"/>
              <img src="./../../../assets/typo-city_01/Schriftzug_Mannheim_01.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Mannheim_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerMosbach variant="info">Mosbach</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerMosbach" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Mosbach_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Mosbach_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Mosbach_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Mosbach_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerMuenchen variant="info">München</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerMuenchen" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Muenchen_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Muenchen_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Muenchen_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Muenchen_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerStuttgart variant="info">Stuttgart</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerStuttgart" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Stuttgart_01.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Wuerzburg_02.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Stuttgart_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Wuerzburg_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-stickerWuerzburg variant="info">Würzburg</b-button>
        </b-card-header>
        <b-collapse id="accordion-stickerWuerzburg" role="tabpanel">
          <b-card-body>
              <img src="./../../../assets/typo-city_01/Schriftzug_Wuerzburg_01.svg" width="100%" @click="changeSticker('typo-city_01/Schriftzug_Wuerzburg_01.svg')"/>
              <img src="./../../../assets/typo-city_02/Schriftzug_Wuerzburg_02.svg" width="100%" @click="changeSticker('typo-city_02/Schriftzug_Wuerzburg_02.svg')"/>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sticker",
  methods: {
    changeSticker(sticker: string){
      this.$store.dispatch("setSticker", sticker)
    }
  },
});
</script>

<style scoped>
.card-body{
  display: grid !important;
  grid-template-columns: 50% 50% !important;
  grid-template-rows: auto !important;
  column-gap: 10px !important;
  row-gap: 10px !important;
  padding: 12px 15px 25px 5px;
}

img:hover {
  opacity: 30%;
}

img {
background-color: #e7e7e6;
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

.card{
  border: none;
  padding: 0;
  margin: 0;
}
</style>
