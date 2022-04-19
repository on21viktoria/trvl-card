<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-col cols="12" md="4">
          <v-text-field class="textfield"
            v-model="firstname"
            :rules="firstNameRules"
            label="Vorname"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="lastNameRules"
            label="Nachname"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-Mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4"> 
          <v-text-field
            v-model="country"
            :rules="countryRules"
            label="Land"
            required
          ></v-text-field>
        </v-col>

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="postalcode"
                :rules="postalcodeRules"
                label="Postleitzahl"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="city"
                :rules="cityRules"
                label="Stadt"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="street"
              :rules="streetRules"
              label="Straße"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="housenumber"
              :rules="housenumberRules"
              label="Hausnummer"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contactform",
  data: () => ({
    valid: false,
    firstname: "",
    firstNameRules: [
      (v: string) => !!v || "Bitte gib deinen Vornamen ein.",
    ],
    lastname: "",
    lastNameRules: [
      (v: string) => !!v || "Bitte gib deinen Nachnamen ein.",
    ],
    email: "",
    emailRules: [
      (v: string) => !!v || "Bitte gib eine E-Mail-Adresse ein.",
      (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    country: "",
    countryRules: [(v: string) => !!v || "Bitte gib ein Land ein.",
    ],
    postalcode: "",
    postalcodeRules: [
    (v: string) => !!v || "Bitte gib eine Postleitzahl ein.",
    ],
    city: "",
    cityRules: [(v: string) => !!v || "Bitte gib eine Stadt ein.",
    ],
    street: "",
    streetRules: [(v: string) => !!v || "Bitte gib eine Straße ein.",
    ],
    housenumber: "",
    housenumberRules: [
    (v: string) => !!v || "Bitte gib eine Hausnummer ein.",
    ]
  }),
});
</script>

<style scoped>
.textfield:focus {
    color: #ff4e00;
}
</style>