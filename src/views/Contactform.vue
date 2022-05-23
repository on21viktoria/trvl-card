<template>
<div>
  <Header></Header>
    <h1>CHECKOUT</h1>
  <div class="checkout-body">
    <div class="address">
    <h2>Absenderadresse</h2>
    <v-form v-model="valid">
      <v-container class="formcontainer">
        <div class="form-width">

          //Input Types Added
      <v-col class="columns" cols="12" md="6"> 
          <v-select
          v-model="formOfAddress"
          :items="formsOfAddress"
          :menu-props="{ maxHeight: '400' }"
          label="Anrede"
          single
        :rules="addressRules"
        required
          ></v-select>
        </v-col>    
        <v-col class="columns" cols="12" md="6">
          <v-text-field 
            class="textfield"
            v-model="firstname"
            :rules="firstNameRules"
            label="Vorname"
            required
          ></v-text-field>
        </v-col>

        <v-col class="columns" cols="12" md="6">
          <v-text-field
            v-model="lastname"
            :rules="lastNameRules"
            label="Nachname"
            required
          ></v-text-field>
        </v-col>

        <v-col class="columns" cols="12" md="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-Mail"
            required
          ></v-text-field>
        </v-col>
<v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="street"
              :rules="streetRules"
              label="Straße"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2" id="housenumber">
            <v-text-field
              v-model="housenumber"
              :rules="housenumberRules"
              label="Hausnummer"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="2" id="postalcode">
              <v-text-field
                v-model="postalcode"
                :rules="postalcodeRules"
                label="Postleitzahl"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="9" md="4">
              <v-text-field
                v-model="city"
                :rules="cityRules"
                label="Stadt"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        
        <v-col class="columns" cols="12" md="6"> 
          <v-select
          v-model="country"
          :items="states"
          :menu-props="{ maxHeight: '400' }"
          label="Land"
          single
        :rules="countryRules"
        required
          ></v-select>
        </v-col>
         </div>
      </v-container>
    </v-form>

    //Addresse speichern
    <div class="saveaddress">
    <input class="form-check-input" type="checkbox" value="Addresse speichern" id="flexCheckDefault">
   <label class="form-check-label" for="flexCheckDefault">
  </label>
    </div>
    <div class="checkoutbuttons">
        <button type="button" class="hovereffect" id="save">SICHERN & ZURÜCK</button>
          <button type="button" class="hovereffect" v-b-modal.modal-center id="finish" ok-only>BESTELLUNG ABSENDEN</button>

          // final checkout, order confimation pop-up modal
          <b-modal id="modal-center" centered title="Vielen Dank für deine Bestellung!">
          <p class="my-4">Dein Auftrag ist bei uns eingegangen und wird umgehend bearbeitet. Der Versand dauert aktuell im Durchschnitt 2-3 Werktage.</p>
                <template #modal-footer>
                  <div class="w-100">
                  <b-button id="saveAndBack"
                    size="sm"
                    href="/"
                  > Schließen & zur Startseite
                  </b-button>
                  <router-link id="showPostCard"
                    size="sm"
                    to="/postcard"
                  > Postkarte anzeigen</router-link>
                  </div>
      </template>
          </b-modal>
    </div>
    </div>

    //Sidebard with Order-Details
    <div class="order">
        <h2>Deine Bestellung</h2>
        <div class="orderwrapper">
        <div class="imgcontainer">
        <img src="./../assets/images-trvl-card/LargeLetterDesign_Berlin.jpg" width=150px/>
        </div>
        <ul class="ordersumup">
        <li class="ordertext">Deine personalisierte Postkarte</li>
        <li class="price">3,50€</li>
        </ul>
        </div>
        <div class="costwrapper">
        <ul class="costs" id="costtext">
            <li>Kosten</li>
            <li>Porto</li> 
            <li id="sum">Gesamt</li>       
        </ul>
        <ul class="costs">
            <li>3,50€</li>
            <li>0,80€</li>
            <li id="totalprice">4,30€</li>
        </ul>
        </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Footer from "../components/Footer.vue"
import Header from '../components/Header.vue'

export default Vue.extend({
  name: 'Contactform',
  components: {Header, Footer},

  //Set Rules for Input fields
  data: () => ({
    valid: false,
    formOfAddress: [],
    addressRules: [(v: string) => !!v || 'Bitte gib eine Anrede an.',
    ],
    formsOfAddress: ['Frau', 'Herr', 'keine Angabe'],
    firstname: '',
    firstNameRules: [
      (v: string) => !!v || 'Bitte gib deinen Vornamen ein.',
    ],
    lastname: '',
    lastNameRules: [
      (v: string) => !!v || 'Bitte gib deinen Nachnamen ein.',
    ],
    email: '',
    emailRules: [
      (v: string) => !!v || 'Bitte gib eine E-Mail-Adresse ein.',
      (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    country: [],
    countryRules: [(v: string) => !!v || 'Bitte gib ein Land ein.',
    ],
    states: ['Deutschland'],
    postalcode: '',
    postalcodeRules: [
    (v: string) => !!v || 'Bitte gib eine Postleitzahl ein.',
    ],
    city: '',
    cityRules: [(v: string) => !!v || 'Bitte gib eine Stadt ein.',
    ],
    street: '',
    streetRules: [(v: string) => !!v || 'Bitte gib eine Straße ein.',
    ],
    housenumber: '',
    housenumberRules: [
    (v: string) => !!v || 'Bitte gib eine Hausnummer ein.', 
    ]
  }),
});
</script>

<style scoped>
* {
    font-family: Montserrat, sans-serif !important;
}

.checkout-body {
    display: flex;
    margin: 20px;
}

.address {
    width: 70%;
    border-right: 0.5px solid #f1f1f1;
}

.order {
    width: 30%;
}

h1 {
    text-align: left;
    margin: 50px 0px 10px 40px;
}

h2 {
    text-align: left;
    margin: 10px 10px 10px 15px;
    padding: 20px;
    font-size: 25px;
    background-color: #f1f1f1;
}

.columns {
    margin: 0 !important;
    padding: 0 !important;
}

.formcontainer {
    padding: 20px;
}

.orderwrapper {
    display: flex;
    align-content: left;
    width: 100%;
    height: 30%;
    margin-top: 30px;
    border-bottom: 0.5px solid #f1f1f1;
}

.imgcontainer {
    display: flex;
    width: 181.9px;
    height: 131.1px; 
    background-color: #f1f1f1;
    padding: 20px;
    margin: 15px; 
}

.ordersumup {
    list-style: none;
    text-align: left; 
    margin-top: 25px; 
}

.ordersumup > li {
    margin: 10px; 
}

.price {
    color: #ff4e00;
    font-weight: 500;
}

.costs {
    text-align: left;
    list-style: none;
    margin-top: 60px;
}

#costtext {
    margin-right: auto;
}

.costwrapper {
    display: flex;
}

#sum {
    font-weight: 700;
    margin-top: 20px;
}

#totalprice {
    font-weight: 700;
    color: #ff4e00;
    margin-top: 20px; 
}

.saveaddress, .checkoutbuttons {
    display: flex;
    align-content: left;
    margin: 20px;
    }

.saveaddress {
  padding-left: 25px;
}

.checkoutbuttons > button {
    margin: 20px 80px 0 0;
    padding: 15px 30px 15px 30px;
    font-weight: 700;
    border-radius: 4px;
}    

#save {
   border: 1px solid black; 
}

#finish {
  background-color: black;
  color: white;
}

#pay {
    background-color: black;
    color: #fff;
}

#saveAndBack {
  background-color: #ff4e00!important;
  border-color: #ff4e00;
}

#postalcode {
  margin-right: 10px !important;
}

#housenumber {
  margin-left: 10px !important;
}

.container.formcontainer {
  margin-left: 0px !important;
}

#showPostCard {
  margin-left: 80px;
  color: #1da2a9;
}
</style>