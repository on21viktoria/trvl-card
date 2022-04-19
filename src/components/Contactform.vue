<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-col cols="12" md="4">
          <v-text-field
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
            <Dropdown
    :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
    v-on:selected="validateSelection"
    v-on:filter="getDropdownValues"
    :disabled="false"
    name="zipcode"
    :maxItem="10"
    placeholder="Please select an option">
</Dropdown>
          <!-- <v-text-field
            v-model="address"
            :rules="addressRules"
            label="Land"
            required
          ></v-text-field> -->
        </v-col>

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="address"
                :rules="addressRules"
                label="Postleitzahl"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="address"
                :rules="addressRules"
                label="Stadt"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="Straße"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="Hausnummer"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-simple-search-dropdown/dist/vue-simple-search-dropdown.min.js"></script>

<script lang="ts">
import Vue from "vue";
import Dropdown from "vue-simple-search-dropdown";

Vue.use(Dropdown);

export default Vue.extend({
  name: "Contactform",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    firstNameRules: [
      (v: string) => !!v || "Bitte gib deinen Vornamen ein.",
    ],
    lastNameRules: [
      (v: string) => !!v || "Bitte gib deinen Nachnamen ein.",
    ],
    email: "",
    emailRules: [
      (v: string) => !!v || "Bitte gib eine E-Mail-Adresse ein.",
      (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
});
</script>
