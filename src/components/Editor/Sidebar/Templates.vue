<template>
  <div class="template-div">
    <p class="tool-title">Vorlagen</p>
    <p class="tool-title subtitle">Vorlagenauswahl</p>

    <img id="emptyImage" src="./../../../assets/platzhalter/leer_mit_strich.png" width="30%"
      @click="changeTemplate('platzhalter/leer.png')"
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
              src="./../../../assets/templates/templates-berlin/Berlin_Template_01.jpg"
              width="100%"
              @click="
                changeTemplate(
                  'templates/templates-berlin/Berlin_Template_01.jpg'
                )
              "
            />
            <img
              src="./../../../assets/templates/templates-berlin/Berlin_Template_02.jpg"
              width="100%"
              @click="
                changeTemplate(
                  'templates/templates-berlin/Berlin_Template_02.jpg'
                )
              "
            />
            <img
              src="./../../../assets/templates/templates-berlin/Berlin_Template_03.jpg"
              @click="
          changeTemplate('templates/templates-berlin/Berlin_Template_03.jpg')
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
              src="./../../../assets/templates/templates-hamburg/Hamburg_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-hamburg/Hamburg_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-hamburg/Hamburg_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-hamburg/Hamburg_Template_02.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-hamburg/Hamburg_Template_03.jpg"
              @click="
          changeTemplate('templates/templates-hamburg/Hamburg_Template_03.jpg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-heidelberg variant="info"
            >Heidelberg</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-heidelberg" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/templates/templates-heidelberg/Heidelberg_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-heidelberg/Heidelberg_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-heidelberg/Heidelberg_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-heidelberg/Heidelberg_Template_02.jpg')
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
              src="./../../../assets/templates/templates-karlsruhe/Karlsruhe_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-karlsruhe/Karlsruhe_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-karlsruhe/Karlsruhe_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-karlsruhe/Karlsruhe_Template_02.jpg')
        "
              width="100%"
            />
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-koeln variant="info"
            >Köln</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-koeln" role="tabpanel">
          <b-card-body>
            <img
              src="./../../../assets/templates/templates-koeln/Koeln_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-koeln/Koeln_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-koeln/Koeln_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-koeln/Koeln_Template_02.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-koeln/Koeln_Template_03.jpg"
              @click="
          changeTemplate('templates/templates-koeln/Koeln_Template_03.jpg')
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
              src="./../../../assets/templates/templates-mannheim/Mannheim_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-mannheim/Mannheim_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-mannheim/Mannheim_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-mannheim/Mannheim_Template_02.jpg')
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
              src="./../../../assets/templates/templates-mosbach/Mosbach_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-mosbach/Mosbach_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-mosbach/Mosbach_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-mosbach/Mosbach_Template_02.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-mosbach/Mosbach_Template_03.jpg"
              @click="
          changeTemplate('templates/templates-mosbach/Mosbach_Template_03.jpg')
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
              src="./../../../assets/templates/templates-muenchen/Muenchen_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-muenchen/Muenchen_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-muenchen/Muenchen_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-muenchen/Muenchen_Template_02.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-muenchen/Muenchen_Template_03.jpg"
              @click="
          changeTemplate('templates/templates-muenchen/Muenchen_Template_03.jpg')
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
              src="./../../../assets/templates/templates-stuttgart/Stuttgart_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-stuttgart/Stuttgart_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-stuttgart/Stuttgart_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-stuttgart/Stuttgart_Template_02.jpg')
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
              src="./../../../assets/templates/templates-wuerzburg/Wuerzburg_Template_01.jpg"
              @click="
          changeTemplate('templates/templates-wuerzburg/Wuerzburg_Template_01.jpg')
        "
              width="100%"
            />
            <img
              src="./../../../assets/templates/templates-wuerzburg/Wuerzburg_Template_02.jpg"
              @click="
          changeTemplate('templates/templates-wuerzburg/Wuerzburg_Template_02.jpg')
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
  name: "Templates",
  methods: {
    changeTemplate(template: string) {
      this.$store.dispatch("setPicture", template);
    },
  },
});
</script>

<style scoped>
.template-div {
  width: 100%;
  max-height: 800px;
  overflow: auto;
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
