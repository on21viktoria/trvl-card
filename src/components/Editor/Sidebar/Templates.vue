<template>
  <div class="template-div">
    <p class="tool-title">Vorlagen</p>
    <p class="tool-title subtitle">Vorlagenauswahl</p>

    <img id="emptyImage" src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2Fleer_mit_strich.png?alt=media&token=22e13ea0-be57-4572-ae3e-9e4be3a58d33" width="30%"
      @click="changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2Fleer.png?alt=media&token=22d8b56e-e1da-4bee-8a77-b2b4a52a7747')"
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerlin_Template_01.jpg?alt=media&token=f887b2a4-6c0b-4f81-8e9c-28b9cb324c2e"
              width="100%"
              @click="
                changeTemplate(
                  'https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerlin_Template_01.jpg?alt=media&token=f887b2a4-6c0b-4f81-8e9c-28b9cb324c2e'
                )
              "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerlin_Template_02.jpg?alt=media&token=b7930b6d-3bec-4e23-9cee-beaed789fbcb"
              width="100%"
              @click="
                changeTemplate(
                  'https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerlin_Template_02.jpg?alt=media&token=b7930b6d-3bec-4e23-9cee-beaed789fbcb'
                )
              "
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerlin_Template_03.jpg?alt=media&token=1e02c447-2a98-417d-81e6-55c937438650"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FBerlin_Template_03.jpg?alt=media&token=1e02c447-2a98-417d-81e6-55c937438650')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_Template_01.jpg?alt=media&token=ea047e9e-a468-4c95-94ff-fa86622a9947"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_Template_01.jpg?alt=media&token=ea047e9e-a468-4c95-94ff-fa86622a9947')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_Template_02.jpg?alt=media&token=92b4d7a4-e663-419d-8dd4-d161114849d6"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_Template_02.jpg?alt=media&token=92b4d7a4-e663-419d-8dd4-d161114849d6')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_Template_03.jpg?alt=media&token=b2b43031-6798-48a0-871d-af4104346497"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHamburg_Template_03.jpg?alt=media&token=b2b43031-6798-48a0-871d-af4104346497')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_Template_01.jpg?alt=media&token=aa553a5f-8545-4782-a3f9-6ec70585df3b"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_Template_01.jpg?alt=media&token=aa553a5f-8545-4782-a3f9-6ec70585df3b')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_Template_02.jpg?alt=media&token=d7106266-d1a2-4d2a-8272-f145d8a2a803"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FHeidelberg_Template_02.jpg?alt=media&token=d7106266-d1a2-4d2a-8272-f145d8a2a803')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_Template_01.jpg?alt=media&token=e3e9503e-0ba7-4769-9e72-c6156636d6d2"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_Template_01.jpg?alt=media&token=e3e9503e-0ba7-4769-9e72-c6156636d6d2')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_Template_02.jpg?alt=media&token=cfc00743-c03b-41a3-b00c-9e7d34977aa3"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKarlsruhe_Template_02.jpg?alt=media&token=cfc00743-c03b-41a3-b00c-9e7d34977aa3')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_Template_01.jpg?alt=media&token=2c4e7d56-0faf-47fd-8bcc-4aac17abdaec"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_Template_01.jpg?alt=media&token=2c4e7d56-0faf-47fd-8bcc-4aac17abdaec')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_Template_02.jpg?alt=media&token=8fb1fae6-2062-4f2b-8c82-3f49efc32c8d"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_Template_02.jpg?alt=media&token=8fb1fae6-2062-4f2b-8c82-3f49efc32c8d')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_Template_03.jpg?alt=media&token=b63d66fc-d5bf-4604-8aff-ba822a9ff057"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FKoeln_Template_03.jpg?alt=media&token=b63d66fc-d5bf-4604-8aff-ba822a9ff057')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_Template_01.jpg?alt=media&token=a6b7769c-d9cb-4469-acd2-d247c01be855"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_Template_01.jpg?alt=media&token=a6b7769c-d9cb-4469-acd2-d247c01be855')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_Template_02.jpg?alt=media&token=796929cf-ad4b-489a-8f40-2520a898bfb7"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMannheim_Template_02.jpg?alt=media&token=796929cf-ad4b-489a-8f40-2520a898bfb7')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_Template_01.jpg?alt=media&token=4d25a9ab-1bc6-4977-99dc-4955172771e6"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_Template_01.jpg?alt=media&token=4d25a9ab-1bc6-4977-99dc-4955172771e6')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_Template_02.jpg?alt=media&token=ff292aa3-0dfa-434e-a0af-d7539ebb9ba1"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_Template_02.jpg?alt=media&token=ff292aa3-0dfa-434e-a0af-d7539ebb9ba1')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_Template_03.jpg?alt=media&token=aaca0c85-d64a-4f75-a08a-5c90326fbdbd"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMosbach_Template_03.jpg?alt=media&token=aaca0c85-d64a-4f75-a08a-5c90326fbdbd')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_Template_01.jpg?alt=media&token=70cc7824-db12-4d15-aafc-e1009105add0"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_Template_01.jpg?alt=media&token=70cc7824-db12-4d15-aafc-e1009105add0')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_Template_02.jpg?alt=media&token=f3db963b-e2ac-4b4d-86ed-e5965ea4b472"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_Template_02.jpg?alt=media&token=f3db963b-e2ac-4b4d-86ed-e5965ea4b472')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_Template_03.jpg?alt=media&token=663ded3c-1bf5-472f-9338-d7f8464120f7"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FMuenchen_Template_03.jpg?alt=media&token=663ded3c-1bf5-472f-9338-d7f8464120f7')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_Template_01.jpg?alt=media&token=4c242218-e38b-4490-be76-ca7cc882b4ab"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_Template_01.jpg?alt=media&token=4c242218-e38b-4490-be76-ca7cc882b4ab')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_Template_02.jpg?alt=media&token=8081ff86-8f63-48e3-af79-9564340e6a00"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FStuttgart_Template_02.jpg?alt=media&token=8081ff86-8f63-48e3-af79-9564340e6a00')
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
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_Template_01.jpg?alt=media&token=243e260d-8794-408e-b87e-d89f2bde66f5"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_Template_01.jpg?alt=media&token=243e260d-8794-408e-b87e-d89f2bde66f5')
        "
              width="100%"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_Template_02.jpg?alt=media&token=4c22f646-c368-49b1-92c1-4cb85001819e"
              @click="
          changeTemplate('https://firebasestorage.googleapis.com/v0/b/trvl-card-4b9a2.appspot.com/o/files%2FWuerzburg_Template_02.jpg?alt=media&token=4c22f646-c368-49b1-92c1-4cb85001819e')
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
    // Platzierte Vorlage/Vorhandenes Foto wird ersetzt. Geklickter Vorlage wird in die Vorschau übergeben und angezeigt
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
