<template>
  <div>
    <div class="designchoice">
      <div>
        <div class="card" style="width: 18rem">
          <img
            src="./src/assets/images-trvl-card/Ampel_Philippe-Oursel.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <!-- <b-card
    title="Large-Letter-Design"
    src="src/assets/images-trvl-card/Ampel_Philippe-Oursel.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 40rem;"
    class="mb-2"
  >
    <b-card-text>
      Gestalte deine Postkarte auf Grundlage von einem Blanko-Design. 
    </b-card-text>

    <button href="#" class="btn-signup" @click="onClick('blankoDesign')">Jetzt gestalten</button>
  </b-card>
    </div>
    <div>
      <b-card
    title="Blanko-Postkarte"
    img-src="src/assets/images-trvl-card/Berliner-Mauer_Mateo-Krossler.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 40rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <button href="#" class="btn-signup" @click="onClick('largeLetterDesign')">Jetzt gestalten</button>
  </b-card> -->
      </div>
    </div>
    <div class="outputfield">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

/* eslint-disable */

export default Vue.extend({
  name: "DesignChoice",
  data: () => ({ text: "" }),
  methods: {
    onClick(design: string) {
      if (design === "blankoDesign") {
        this.text = "Du hast das Blanko-Design ausgewählt.";
      } else {
        this.text = "Du hast das Large-Letter-Design ausgewählt.";
      }
    },
  },
});
</script>
