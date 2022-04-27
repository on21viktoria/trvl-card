<template>
<div>
    <h1>CHECKOUT</h1>
  <div class="checkout-body">
    <div class="address">
    <h2>Empfängeradresse eingeben</h2>
    <v-form v-model="valid">
      <v-container class="formcontainer">

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
          <v-col cols="12" md="5">
            <v-text-field
              v-model="street"
              :rules="streetRules"
              label="Straße"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="housenumber"
              :rules="housenumberRules"
              label="Hausnummer"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="postalcode"
                :rules="postalcodeRules"
                label="Postleitzahl"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
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
      </v-container>
    </v-form>
    <div class="saveaddress">
    <input type="checkbox" name="Addresse speichern" value="saveaddress" class="checkbox">
    <label for="saveaddress">Addresse speichern</label>
    </div>
    <div class="checkoutbuttons">
        <button type="button" class="hovereffect" id="save">SICHERN & ZURÜCK</button>
        <button type="button" class="hovereffect" id="pay">ZUR ZAHLUNG</button>    
    </div>
    </div>
    <div class="order">
        <h2>Deine Bestellung</h2>
        <div class="orderwrapper">
        <div class="imgcontainer">
        <img src="./../assets/images-trvl-card/LargeLetterDesign_Berlin.jpg" width=150px/>
        </div>
        <ul class="ordersumup">
        <li class="ordertext">Postkarte Big Letter Design "California"</li>
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
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Contactform',
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
    states: ['Deutschland', 'Österreich', 'Schweiz'],
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
    font-family: Montserrat, sans-serif;
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

.checkoutbuttons > button {
    margin: 20px 80px 0 0;
    padding: 15px 30px 15px 30px;
    font-weight: 700;
    border-radius: 4px;
}    

#save {
   border: 1px solid black; 
}

#pay {
    background-color: black;
    color: #fff;
}

.checkbox {
    margin: 4px 10px 4px 0px;
}

</style>