<template>
  <div>
    <div class="designchoice">
        <div class="card" style="width: 30rem">
          <img
            src="./../assets/images-trvl-card/Ampel_Philippe-Oursel.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button href="#" class="btn-signup" @click="onClick('blankoDesign')">Jetzt gestalten</button>
          </div>
        </div>
        <div class="card" style="width: 30rem">
          <img
            src="./../assets/images-trvl-card/Ampel_Philippe-Oursel.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
