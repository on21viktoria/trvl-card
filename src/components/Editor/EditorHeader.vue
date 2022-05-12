<template>
  <header class="header">
    <div class="firstcontainer sticky">
      <div class="wrapper">
        <a
          href="/"
          class="logocontainer hovereffect"
        >
          <img
            alt="trvl card Logo"
            src="../../assets/logo_trvl.png"
            width="60"
            height="60"
          /> 
        </a>
        <router-link
      to="/checkout"
      class="button button-signup hovereffect checkout"
      style="color: #fff"
      >Speichern & Zum Warenkorb</router-link
    >
        <div class="buttons">
          <button @click="makeToast(message = 'Hier wirst du bald die Möglichkeit haben, dich zu registrieren. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append})" type="button" class="button-register button-signup hovereffect" style='color: #fff'>Registrieren</button>
          <v-icon class="carticon hovereffect" @click="makeToast(message = 'Hier geht es bald zum Warenkorb. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append})" >mdi-cart</v-icon>
          <a class="helpanchor hovereffect" href="https://docs.google.com/document/d/1wn9SLNurX8Eh4nTQ9y6VwFonR0hPe_QoJ0DXVWa6SGs/edit"><v-icon>mdi-help-circle-outline</v-icon></a> 
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';

export default Vue.extend({
  name: 'EditorHeader',
  data() {
    return {
      message: '',
      options: {}
    }
  },
  methods: {
      makeToast() {
        this.$bvToast.toast(this.message, this.options)
      }
    }
});
</script>

<style>
.checkout {
 float: right;
 position: relative;
 margin-right: 20px;
 margin-left: auto;
}

.button-register {
    background-color: gray;
    height: 39px;
  padding: 10px;
}
</style>