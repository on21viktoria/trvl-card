<template>
  <div>
    <div class="designchoice">
        <div class="card" style="width: 30rem">
          <img
            src="./../assets/images-trvl-card/Fernsehturm_Camilla-Bundgaard.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Blanko-Postkarte</h5>
            <p class="card-text">
              Starte ohne Vorlage mit einer Blanko-Postkarte.
            </p>
            <button href="#" class="btn-signup" @click="onClick('blankoDesign')">Jetzt gestalten</button>
          </div>
        </div>
        <div class="card" style="width: 30rem">
          <img
            src="./../assets/images-trvl-card/Berliner-Mauer_Mateo-Krossler.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Large-Letter-Design</h5>
            <p class="card-text">
              Starte mit dem Large-Letter-Design.
            </p>
            <button href="#" class="btn-signup" @click="onClick('largeLetter')">Jetzt gestalten</button>
          </div>
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
