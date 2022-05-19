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
  watch: {

  },
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
      "currentText",
      "textFont",
      "textColor",
      "textSize",
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
.postcard-side {
  position: relative;
  background-color: rgb(255, 255, 255);
  border: solid rgba(112, 112, 112, 0.5) 1px;
  width: 622px;
  height: 442px;
  margin: 40px auto;
}

.image-front {
  width: 600px;
  height: 420px;
  border: solid 1px rgb(112, 112, 112);
  display: block;
  margin: 10px auto;
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
  font-family: inherit !important
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
