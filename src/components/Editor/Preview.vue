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
            <img
              :src="require(`./../../assets/${currentPicture}`)"
              class="image-front-preview"
            />
            <img
              v-if="currentSticker !== ''"
              :src="require(`./../../assets/${currentSticker}`)"
              class="svg-image"
            />
        </div>
        <div class="back">
          <v-container fluid class="postcard-left-back">
            <div class="postcard-left-back">
              {{currentText}}
            </div>
          </v-container>
          <v-container fluid id="postcard-right-back">
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
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="showBack()">Karte umdrehen</button>
    </div>
  </div>
</template>

<script lang="ts">
import { EventBus } from "@/main";
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Preview",
  data() {
    return {
      front: true
    }
  },
  created() {
    let textarea = document.querySelector(".postcard-left-back") as HTMLDivElement;
    console.log("TextArea :" + textarea);
    EventBus.$on("changeFontColor", (colorId: string) => {
      textarea.style.color = `${colorId}`;
    });
    EventBus.$on("changeFontSize", (sizeId: string) => {
      textarea.style.fontSize = `${sizeId}`;
    }),
      EventBus.$on("changeFont", (fontId: string) => {
        textarea.style.fontFamily = `${fontId}`;
      });
  },
  methods: {
    close() {
       if(!this.front){
        let postcard = document.getElementById("postcard");
        postcard?.classList.remove("switch");
        this.front = false;
      }
      this.$emit("close");
    },
    showBack() {
      let postcard = document.getElementById("postcard");
      if(this.front){
        postcard?.classList.add("switch");
        this.front = false;
      }
      else{
        postcard?.classList.remove("switch");
        this.front = true;
      }
    }
  },
  computed: {
    ...mapState([
      "currentPicture",
      "currentBackgroundColor",
      "currentSticker",
      "currentTemplate",
      "currentText"
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
  margin: auto;
  width: 70vw;
  height: 80vh;
  top: calc(50% - 400px);
  left: calc(50% - 600px);
  opacity: 1 !important;
  border-radius: 5px;
  padding: 0;
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
  border-top: 1px solid #eeeeee;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-content {
  width: 100%;
  height: 100%;
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

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
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
  width: 800px;
  height: 567px;
  border: solid 1px grey;
  margin: auto;
}

.front, .back {
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    padding:10px
}

.back {
    transform: rotateY(180deg);
    background-color: white;
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

.postcard-left-back {
  padding: 0 !important;
  max-width: 53% !important;
  margin-right: 0;
  margin-left: 0;
}

.postcard-right-back {
  padding: 0 !important;
  max-width: 47% !important;
  margin-right: 0;
  margin-left: 0;
}
</style>