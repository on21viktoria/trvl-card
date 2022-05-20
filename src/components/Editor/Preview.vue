<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-header">
      <h5 class="modal-title">Vorschau</h5>
      <button
        type="button"
        class="btn-close"
        @click="close"
        aria-label="Close modal"
      >
        x
      </button>
    </div>
    <div class="modal-body">
      <div class="postcard-layout" id="postcard" @click="showBack()">
        <div
          class="front"
          :style="`background-color:` + currentBackgroundColor"
        >
          <img :src=currentPicture class="image-front-preview" />
          <img
            v-if="currentSticker !== ''"
            :src="require(`./../../assets/${currentSticker}`)"
            class="svg-image"
          />
          <div v-if="current3DEffect === false" class="custom-input-wrap">
            <p
              class="additional-text"
              id="ontopPreview"
              :style="`color:` + currentInputColor"
            >
              {{ currentCustomInputBefore }}
            </p>
            <svg width="100%" id="custom-input-svgPreview">
              <text
                id="text-no-effect-preview"
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
              class="additional-text"
              id="belowPreview"
              :style="`color:` + currentInputColor"
            >
              {{ currentCustomInputBelow }}
            </p>
          </div>
          <div v-if="current3DEffect === true" class="custom-input-wrap">
            <p
              class="additional-text"
              id="ontopPreview"
              :style="`color:` + currentInputColor"
            >
              {{ currentCustomInputBefore }}
            </p>
            <svg width="100%" id="custom-input-svgPreview">
              <text
                id="text-shadowPreview"
                x="20"
                y="100"
                textLength="520"
                lengthAdjust="spacingAndGlyphs"
                :style="`fill:` + currentInputColor"
              >
                {{ currentCustomInputCity }}
              </text>
              <text
                id="text-topPreview"
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
              class="additional-text"
              id="belowPreview"
              :style="`color:` + currentInputColor"
            >
              {{ currentCustomInputBelow }}
            </p>
          </div>
        </div>
        <div class="back">
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
                src="./../../assets/Briefmarke.png"
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
      <div class="modal-footer">
        <button
          type="button"
          class="button button-signup button-flip"
          @click="showBack()"
        >
          Karte umdrehen
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Preview",
  data() {
    return {
      front: true,
      recipient: {},
    };
  },
  methods: {
    close() {
      if (!this.front) {
        let postcard = document.getElementById("postcard");
        postcard?.classList.remove("switch");
        this.front = true;
      }
      this.$emit("close");
    },
    showBack() {
      let postcard = document.getElementById("postcard");
      if (this.front) {
        postcard?.classList.add("switch");
        this.front = false;
      } else {
        postcard?.classList.remove("switch");
        this.front = true;
      }
    },
  },
  computed: {
    ...mapState([
      "currentPicture",
      "currentBackgroundColor",
      "currentSticker",
      "currentTemplate",
      "currentText",
      "currentRecipient",
      "textFont",
      "textColor",
      "textSize",
      "currentInputColor",
      "currentCustomInputCity",
      "currentCustomInputBefore",
      "currentCustomInputBelow",
      "current3DEffect",
    ]),
  },
});
</script>

<style scoped>
.modal {
  background: white;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-height: 90vh;
  top: calc(50% - 50vh);
  left: calc(50% - 40vw);
  opacity: 1 !important;
  border-radius: 5px;
  padding: 0;
  margin: 30px auto;
}

.modal-content {
  width: 100% !important;
  height: 100% !important;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
}

.modal-footer {
  width: calc(100% - 20px);
  display: flex;
  position: absolute;
  border-top: 1px solid #eeeeee;
  margin-top: 10px;
  bottom: 0;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.button-flip {
  margin: auto;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.svg-image {
  z-index: 20;
  width: 100%;
}
#postcard {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  width: 672px;
  height: 492px;
  border: solid 1px grey;
  margin: auto;
}

.front,
.back {
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  padding: 10px;
}

.back {
  transform: rotateY(180deg);
  background-color: white;
  display: flex;
}

.switch {
  transform: rotateY(180deg);
}

.image-front-preview {
  border: solid 1px rgb(112, 112, 112);
  display: block;
  width: 100%;
  height: 100%;
}

.codierzone {
  width: calc(100% - 20px);
  position: absolute;
  bottom: 10px;
  background-color: rgba(112, 112, 112, 0.1);
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(112, 112, 112, 0.1) 4px,
    rgba(112, 112, 112, 0.1) 5px
  );
  margin-top: 5px;
}

.codierzone > p {
  margin: 10px 0 5px;
  text-align: center;
}

.frankierzone {
  height: 220px;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
}

.briefmarke {
  width: 80px;
  right: 0;
  top: 0;
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

.postcard-left-back {
  padding: 0 !important;
  width: 53% !important;
  height: calc(492px - 20px - 40px - 5px);
  margin-right: 0;
  margin-left: 0;
}

.postcard-right-back {
  padding: 0 !important;
  width: 47% !important;
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

.address-field > p {
  margin: 0 30px 10px 0;
  border-bottom: solid 1px black;
  padding-left: 5px;
  min-height: 25px;
}
.text-wrapper > p {
  margin-top: 0;
  overflow-wrap: break-word;
}

.custom-input-wrap {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px 10px;
  /* padding: 100px 20px 100px 20px; */
  width: 670px;
  height: 490px;
  display: block;
  background-color: transparent;
  z-index: 25;
}

#custom-input-svgPreview {
  position: absolute;
  top: 170px;
  left: 40px;
}

#text-shadowPreview {
  text-shadow: 0px 0px 0 rgb(-45, -45, 0), 1px 1px 0 rgb(-45, -45, 0),
    2px 2px 0 rgb(-45, -45, 0), 3px 3px 0 rgb(-45, -45, 0),
    4px 4px 0 rgb(-45, -45, 0), 5px 5px 0 rgb(-45, -45, 0),
    6px 6px 0 rgb(-45, -45, 0), 7px 7px 0 rgb(-45, -45, 0),
    8px 8px 0 rgb(-45, -45, 0), 9px 9px 0 rgb(-45, -45, 0),
    10px 10px 9px rgba(255, 255, 255, 0), 10px 10px 1px rgba(255, 255, 255, 0.5),
    0px 0px 9px rgba(255, 255, 255, 0.2);
}

#text-topPreview {
  stroke: black;
  stroke-width: 1px;
  fill: white;
  fill-opacity: 1;
}

#text-no-effect-preview {
  stroke: black;
  stroke-width: 3px;
  fill: white;
  fill-opacity: 0.8;
}

.additional-text {
  margin: 0 !important;
  font-size: 25px;
  font-family: "Permanent Marker";
}

.additional-text#ontopPreview {
  content: "";
  position: absolute;
  top: 150px;
  left: 40px;
  margin-bottom: 20px;
}

.additional-text#belowPreview {
  content: "";
  position: absolute;
  top: 285px;
  right: 45px;
  margin-bottom: 20px;
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
</style>
