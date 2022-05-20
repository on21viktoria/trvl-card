<template>
  <div class="postcard-layout" id="postCard-print">
    <div
      class="postcard-side"
      id="front-Print"
      :style="`background-color:` + currentBackgroundColor"
    >
      <div class="image-wrap">
        <img
          :src="require(`./../assets/${currentPicture}`)"
          class="image-front"
        />
        <img
          v-if="currentSticker !== ''"
          :src="require(`./../assets/${currentSticker}`)"
          class="svg-image"
        />
      </div>
      <div v-if="current3DEffect === false" class="custom-input-wrap">
        <p
          class="additional-textPrint"
          id="ontopPrint"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBefore }}
        </p>
        <svg width="100%" id="custom-input-svg-print">
          <text
            id="text-no-effect-print"
            x="20"
            y="100"
            textLength="520"
            lengthAdjust="spacingAndGlyphs"
            :style="`fill:` + currentInputColor"
          >
            {{ currentCustomInputCity }}
          </text>
        </svg>
        <p
          class="additional-textPrint"
          id="belowPrint"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBelow }}
        </p>
      </div>
      <div v-if="current3DEffect === true" class="custom-input-wrap">
        <p
          class="additional-textPrint"
          id="ontopPrint"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBefore }}
        </p>
        <svg width="100%" id="custom-input-svg-print">
          <text
            id="text-shadow-print"
            x="20"
            y="100"
            textLength="520"
            lengthAdjust="spacingAndGlyphs"
            :style="`fill:` + currentInputColor"
          >
            {{ currentCustomInputCity }}
          </text>
          <text
            id="text-top-print"
            x="20"
            y="100"
            textLength="520"
            lengthAdjust="spacingAndGlyphs"
            :style="`fill:` + currentInputColor"
          >
            {{ currentCustomInputCity }}
          </text>
        </svg>
        <p
          class="additional-textPrint"
          id="belowPrint"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBelow }}
        </p>
      </div>
    </div>

    <div class="postcard-side" id="back-print">
      <div class="postcard-left-back">
        <div class="divider-back"></div>
        <div class="text-wrapper">
          <p
            class="postcard-left-back-text"
            :style="`color:${textColor} !important; font-family:${textFont} !important; font-size:${textSize} !important`"
          >
            {{ currentText }}
          </p>
        </div>
      </div>
      <div class="postcard-right-back">
        <div class="frankierzone">
          <img
            class="briefmarke"
            src="./../assets/Briefmarke.png"
            alt="trvl-card Briefmarke"
          />
        </div>
        <div class="address-field">
          <p>{{ currentRecipient.name }}</p>
          <p>{{ currentRecipient.addition }}</p>
          <p>{{ currentRecipient.streetAndNumber }}</p>
          <p>{{ currentRecipient.postalcodeAndCity }}</p>
          <p>{{ currentRecipient.country }}</p>
        </div>
      </div>
      <div class="codierzone">
        <p>Dieser Platz muss frei bleiben.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Postcard",
  props: {
    ImageId: String,
  },
  mounted() {
    window.print()
  },
  computed: {
    ...mapState([
      "currentPicture",
      "currentBackgroundColor",
      "currentSticker",
      "currentTemplate",
      "currentRecipient",
      "textColor",
      "textFont",
      "textSize",
      "currentInputColor",
      "currentCustomInputCity",
      "currentCustomInputBefore",
      "currentCustomInputBelow",
      "current3DEffect",
      "currentText",
    ]),
  },
});
</script>

<style scoped>
.postcard-side {
  position: relative;
  background-color: rgb(255, 255, 255);
  border: solid rgba(112, 112, 112, 0.5) 1px;
  width: 622px;
  height: 442px;
  margin: 40px auto;
}

.image-wrap {
  position: relative;
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

.svg-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}

.custom-input-wrap {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px 10px;
  /* padding: 100px 20px 100px 20px; */
  width: 600px;
  height: 420px;
  display: block;
  background-color: transparent;
  z-index: 25;
}

.additional-textPrint {
  margin: 0 !important;
  font-size: 25px;
  font-family: "Permanent Marker";
}

.additional-textPrint#ontopPrint {
  content: "";
  position: absolute;
  top: 135px;
  left: 20px;
  margin-bottom: 20px;
}

.additional-textPrint#belowPrint {
  content: "";
  position: absolute;
  top: 255px;
  right: 20px;
  margin-bottom: 20px;
}

#custom-input-svg-print {
  position: absolute;
  top: 150px;
  left: 20px;
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

#text-shadow-print {
  text-shadow: 0px 0px 0 rgb(-45, -45, 0), 1px 1px 0 rgb(-45, -45, 0),
    2px 2px 0 rgb(-45, -45, 0), 3px 3px 0 rgb(-45, -45, 0),
    4px 4px 0 rgb(-45, -45, 0), 5px 5px 0 rgb(-45, -45, 0),
    6px 6px 0 rgb(-45, -45, 0), 7px 7px 0 rgb(-45, -45, 0),
    8px 8px 0 rgb(-45, -45, 0), 9px 9px 0 rgb(-45, -45, 0),
    10px 10px 9px rgba(255, 255, 255, 0), 10px 10px 1px rgba(255, 255, 255, 0.5),
    0px 0px 9px rgba(255, 255, 255, 0.2);
}

#text-top-print {
  stroke: black;
  stroke-width: 1px;
  fill: white;
  fill-opacity: 1;
}

#text-no-effect-print {
  stroke: black;
  stroke-width: 3px;
  fill: white;
  fill-opacity: 0.8;
}

#back-print {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}

.postcard-left-back {
  padding: 0 !important;
  width: 53% !important;
  margin-right: 0;
  margin-left: 0;
}

.divider-back {
  position: absolute;
  width: 50%;
  height: 80%;
  border-right: solid rgb(112, 112, 112) 3px;
  margin-top: calc((100% - 80%) / 6);
}

.text-wrapper {
  max-width: 100% !important;
  padding: 5px 15px 5px 5px;
  height: calc(492px - 20px - 40px - 5px);
  z-index: 100;
  position: relative;
}

.text-wrapper > p {
  margin-top: 0;
  overflow-wrap: break-word;
}

.postcard-right-back {
  padding: 0 !important;
  width: 47% !important;
  margin-right: 0;
  margin-left: 0;
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

.address-field > p {
  margin: 0 30px 10px 0;
  border-bottom: solid 1px black;
  padding-left: 5px;
  min-height: 25px;
}

.codierzone {
  margin-top: -30px;
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
  margin: 5px 0 5px;
  text-align: center;
}
</style>
