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
      <div v-if="current3DEffect === false" class="custom-input-wrap">
        <p
          class="additional-text"
          id="ontop"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBefore }}
        </p>
        <svg width="100%" id="custom-input-svg">
          <text
            id="text-no-effect"
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
          id="below"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBelow }}
        </p>
      </div>
      <div v-if="current3DEffect === true" class="custom-input-wrap">
        <p
          class="additional-text"
          id="ontop"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBefore }}
        </p>
        <svg width="100%" id="custom-input-svg">
          <text
            id="text-shadow"
            x="20"
            y="100"
            textLength="520"
            lengthAdjust="spacingAndGlyphs"
            :style="`fill:` + currentInputColor"
          >
            {{ currentCustomInputCity }}
          </text>
          <text
            id="text-top"
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
          id="below"
          :style="`color:` + currentInputColor"
        >
          {{ currentCustomInputBelow }}
        </p>
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
          :value="currentText"
          @input="checkText"
          :style="`color:${textColor} !important; font-family:${textFont} !important; font-size:${textSize} !important`"
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
          <input
            id="name"
            class="address-line"
            type="text"
            placeholder="Empfänger*in"
          />
          <input
            id="addition"
            class="address-line"
            type="text"
            placeholder="Zusatz"
          />
          <input
            id="street-and-number"
            class="address-line"
            type="text"
            placeholder="Straße und Hausnummer"
          />
          <input
            id="postalcode-and-city"
            class="address-line"
            type="text"
            placeholder="Postleitzahl und Stadt"
          />
          <v-select
            id="country"
            v-model="selected"
            :items="countries"
            :menu-props="{ maxHeight: '400' }"
            label="Land"
            single
            :rules="countryRules"
            required
          >
          </v-select>
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
import { mapState } from "vuex";
import { Recipient } from "src/interfaces/recipient";

export default Vue.extend({
  name: "PostcardLayout",
  components: {},
  data: () => ({
    valid: false,
    selected: "",
    countryRules: [(v: string) => !!v || "Bitte gib ein Land an."],
    countries: ["Deutschland"],
    rules: [
      (v: string | any[]) => {
        if (v) {
          return v.length <= 500 || "Maximal 500 characters";
        } else {
          console.log("error");
        }
      },
    ],
  }),
  mounted() {
    EventBus.$on("changeRecipient", () => {
      this.changeRecipient();
    });
  },
  methods: {
    checkText(e: any) {
      let textvalue = e;
      this.$store.dispatch("setText", textvalue);
    },

    changeRecipient() {
      const recipientName = document.getElementById("name") as HTMLInputElement;
      const recipientAddition = document.getElementById(
        "addition"
      ) as HTMLInputElement;
      const recipientStreetAndNumber = document.getElementById(
        "street-and-number"
      ) as HTMLInputElement;
      const recipientPostalcodeAndCity = document.getElementById(
        "postalcode-and-city"
      ) as HTMLInputElement;
      let recipient: Recipient;
      recipient = {
        name: recipientName.value,
        addition: recipientAddition.value,
        streetAndNumber: recipientStreetAndNumber.value,
        postalcodeAndCity: recipientPostalcodeAndCity.value,
        country: this.selected,
      };
      this.$store.dispatch("setRecipient", recipient);
    },
  },
  created() {
    /* EventBus.$on(
      "displayCustomLargeLetter",
      (customInputCity: string, applyEffect: boolean) => {
        this.applyEffect = applyEffect;
        this.customLargeLetter = customInputCity;
      }
    );
    EventBus.$on("displayCustomBefore", (customInputBefore: string) => {
      this.customTextBefore = customInputBefore;
    });
    EventBus.$on("displayCustomBelow", (customInputBelow: string) => {
      this.customTextBelow = customInputBelow;
    });
    EventBus.$on(
      "clearCustomText",
      (
        customInputCity: string,
        customInputBefore: string,
        customInputBelow: string
      ) => {
        this.customLargeLetter = customInputCity;
        this.customTextBefore = customInputBefore;
        this.customTextBelow = customInputBelow;
      }
    );
    EventBus.$on("applyThreeDEffect", () => {
      this.applyEffect = true;
    });
    EventBus.$on("clearThreeDEffect", () => {
      this.applyEffect = false;
    });
    EventBus.$on("changeInputColor", (inputColor: string) => {
      this.currentInputColor = inputColor;
    });
    EventBus.$on("preselectedInputColor", (inputColor: string) => {
      this.currentInputColor = inputColor;
    }); */
    EventBus.$on("changeRecipient", () => {
      this.changeRecipient();
    });
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
      "currentRecipient",
      "textColor",
      "textFont",
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

<style>
.image-wrap {
  position: relative;
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

#custom-input-svg {
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

.additional-text {
  margin: 0 !important;
  font-size: 25px;
  font-family: "Permanent Marker";
}

.additional-text#ontop {
  content: "";
  position: absolute;
  top: 135px;
  left: 20px;
  margin-bottom: 20px;
}

.additional-text#below {
  content: "";
  position: absolute;
  top: 255px;
  right: 20px;
  margin-bottom: 20px;
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
  font-family: inherit !important;
}

.v-text-field__slot {
  font-family: inherit !important;
}

.v-input__control {
  font-family: inherit !important;
}

.v-textarea textarea {
  max-width: 100% !important;
  height: 366px !important;
  border-right: solid rgb(112, 112, 112) 3px;
  line-height: 1.25 !important;
  color: inherit !important;
  font-family: inherit !important;
  font-size: inherit !important;
}

.v-text-field__details {
  max-width: 100% !important;
  font-family: inherit !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}

.theme--light.v-messages {
  color: rgb(255, 0, 0) !important;
}
.codierzone {
  margin-top: 5px;
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

/* .codierzone > p {
  margin: 10px 0 5px; */
.codierzone > p {
  margin: 5px 0 5px;
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
  padding-left: 25px;
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
<style scoped>
.address-line {
  height: 35px;
  width: 220px;
  border-bottom: 1px solid #000;
  font-size: 16px;
  color: #000;
}

.address-line::placeholder {
  color: #707070;
}

.address-line:focus {
  outline: 0 !important;
}

.v-select__selections {
  padding: 0 !important;
}

.v-select {
  margin: 0 !important;
  padding-top: 10 !important;
  padding-bottom: 10 !important;
  width: 220px;
}

.v-text-field {
  margin: 0 !important;
}

.v-input theme--light v-text-field v-text-field--is-booted v-select {
  padding: 0px !important;
  padding-top: 3px !important;
  margin: 10px 0px 0px 0px !important;
  height: 35px !important;
}
</style>
