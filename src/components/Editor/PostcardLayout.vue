<template>
  <div class="postcard-layout">
    <div class="postcard-side" id="front">
      <img
        src="./../../assets/images-trvl-card/Ampel_Philippe-Oursel.jpg"
        class="image-front"
      />
    </div>
    <div class="postcard-side" id="back">
      <v-container fluid id="container-rückseite-links">
        <v-textarea
          solo
          counter
          name="Nachrichten-Textfeld"
          label="Deine persönliche Nachricht..."
          :rules="rules"
          :value="values"
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
    <button
      type="button"
      class="button button-signup hovereffect checkout"
      style="color: #fff"
    >
      Speichern & Zum Warenkorb
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PostcardLayout",
  components: {},
  data: () => ({
    rules: [(v: string | any[]) => v.length <= 500 || "Maximal 500 characters"],
    value: "Hello!",
  }),
});
</script>

<style>
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
  align-content: center;
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

.checkout {
  align-self: flex-end;
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
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
