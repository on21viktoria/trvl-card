<template>
  <div class="postcard-layout">
    <div
      class="postcard-side"
      id="front"
      :style="`background-color:` + currentBackgroundColor"
    >
      <div class="image-wrap">
        <img
          :src="require(`./../../assets/${currentPicture}`)"
          class="image-front"
        />
        <img
          v-if="currentSticker !== ''"
          :src="require(`./../../assets/${currentSticker}`)"
          class="svg-image"
        />
      </div>
      <div v-if="applyEffect === false" class="custom-input-wrap">
        <svg width="100%" height="100%">
          <text id="text-no-effect" x="20" y="100" textLength="520" lengthAdjust="spacingAndGlyphs">
            {{ this.customLargeLetter }}
          </text>
        </svg>
      </div>
      <div v-if="applyEffect === true" class="custom-input-wrap">
        <svg width="100%" height="100%">
          <text id="text-shadow" x="20" y="100" textLength="520" lengthAdjust="spacingAndGlyphs">
            {{ this.customLargeLetter }}
          </text>
          <text id="text-top" x="20" y="100" textLength="520" lengthAdjust="spacingAndGlyphs">
            {{ this.customLargeLetter }}
          </text>
        </svg>
      </div>
    </div>

    <div class="postcard-side" id="back">
      <v-container fluid id="container-rückseite-links">
        <v-textarea
          id="changed-text"
          solo
          counter
          name="Nachrichten-Textfeld"
          label="Deine persönliche Nachricht..."
          :rules="rules"
        >
        </v-textarea>
      </v-container>
      <v-container fluid id="container-rückseite-rechts">
        <div class="frankierzone">
          <img
            class="briefmarke"
            src="./../../assets/Briefmarke.png"
            alt="trvl-card Briefmarke"
          />
        </div>
        <div class="address-field">
          <hr class="address-separator" />
          <hr class="address-separator" />
          <hr class="address-separator" />
          <hr class="address-separator" />
        </div>
      </v-container>
      <div class="codierzone">
        <p>Dieser Platz muss frei bleiben.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { EventBus } from "@/main";
import Vue from "vue";
import { mapGetters, mapState } from "vuex";

export default Vue.extend({
  name: "PostcardLayout",
  components: {},
  data: () => ({
    rules: [
      (v: string | any[]) => {
        if (v) {
          return v.length <= 500 || "Maximal 500 characters";
        } else {
          console.log("error");
        }
      },
    ],
    customLargeLetter: "Hannover",
    applyEffect: false,
  }),
  created() {
    EventBus.$on("changeFontColor", (colorId: string) => {
      const textarea = document.querySelector("#changed-text") as HTMLElement;
      textarea.style.color = `${colorId}`;
      console.log("In PostcardLayout", colorId);
    });
    EventBus.$on("changeFontSize", (sizeId: string) => {
      const textarea = document.querySelector("#changed-text") as HTMLElement;
      textarea.style.fontSize = `${sizeId}`;
    }),
    EventBus.$on("changeFont", (fontId: string) => {
        const textarea = document.querySelector("#changed-text") as HTMLElement;
        textarea.style.fontFamily = `${fontId}`;
      }),
    EventBus.$on("displayCustomLargeLetter", (customInput: string) => {
        this.customLargeLetter = customInput;
      });
    EventBus.$on("applyThreeDEffect", () => {
      this.applyEffect = true;
    })
    EventBus.$on("clearThreeDEffect", () => {
      this.applyEffect = false;
    })
  },
  props: {
    ImageId: String,
  },
  computed: {
    ...mapState([
      "currentPicture",
      "currentBackgroundColor",
      "currentSticker",
      "currentTemplate",
    ]),
  },
});
</script>

<style>
.image-wrap {
  position: relative;
}

.svg-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
}

.custom-input-wrap {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px 10px;
  padding: 150px 20px 150px 20px;
  width: 600px;
  height: 420px;
  display: block;
  background-color: transparent;
  z-index: 100; ;
}

svg > text {
  position: relative;
  width: 100%;
  height: 100%;
  text-anchor: start;
  font-size: 100px;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 3px;
}

#text-shadow {
  text-shadow: 0px 0px 0 rgb(-45, -45, 0), 1px 1px 0 rgb(-45, -45, 0),
    2px 2px 0 rgb(-45, -45, 0), 3px 3px 0 rgb(-45, -45, 0),
    4px 4px 0 rgb(-45, -45, 0), 5px 5px 0 rgb(-45, -45, 0),
    6px 6px 0 rgb(-45, -45, 0), 7px 7px 0 rgb(-45, -45, 0),
    8px 8px 0 rgb(-45, -45, 0), 9px 9px 0 rgb(-45, -45, 0),
    10px 10px 9px rgba(255, 255, 255, 0), 10px 10px 1px rgba(255, 255, 255, 0.5),
    0px 0px 9px rgba(255, 255, 255, 0.2);
}

#text-top {
  stroke: black;
  stroke-width: 1px;
  fill: white;
  fill-opacity: 1;
}

#text-no-effect {
  stroke: black;
  stroke-width: 3px;
  fill: white;
  fill-opacity: 0.8;
}

.postcard-side {
  position: relative;
  background-color: rgb(255, 255, 255);
  border: solid rgba(112, 112, 112, 0.5) 1px;
  width: 622px;
  height: 442px;
  margin: 40px auto;
}

.image-front {
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: 1;
  width: 600px;
  height: 420px;
  border: solid 1px rgb(112, 112, 112);
  display: block;
  margin: 10px 10px;
}

.v-input__slot {
  width: 100% !important;
  margin-bottom: 1px !important;
  padding: 0 0 0 12px !important;
}

.v-textarea textarea {
  max-width: 100% !important;
  height: 366px !important;
  border-right: solid rgb(112, 112, 112) 3px;
  font-size: 14px;
  line-height: 1.25 !important;
}

.v-text-field__details {
  max-width: 100% !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}

.theme--light.v-messages {
  color: rgb(255, 0, 0) !important;
}

.codierzone {
  width: 100%;
  background-color: rgba(112, 112, 112, 0.1);
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(112, 112, 112, 0.1) 4px,
    rgba(112, 112, 112, 0.1) 5px
  );
}

.codierzone > p {
  margin: 10px 0 5px;
  text-align: center;
}

.frankierzone {
  height: 166px;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
}

.briefmarke {
  width: 65px;
  right: 0;
  top: 0;
  float: right;
}
.address-field {
  height: 210px;
  width: 100%;
  padding-top: 25px;
}

.address-separator {
  max-width: 100%;
  text-align: center;
  height: 1px;
  border: solid rgb(112, 112, 112) 1px;
  margin: 30px 15px;
}

#container-rückseite-links {
  padding: 0 !important;
  max-width: 53% !important;
  margin-right: 0;
  margin-left: 0;
}

#container-rückseite-rechts {
  padding: 0 !important;
  max-width: 47% !important;
  margin-right: 0;
  margin-left: 0;
}

#back {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
