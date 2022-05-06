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
            src="./../assets/logo_trvl.png"
            width="60"
            height="60"
          />
        </a>
        <div class="buttons">
          <form class="searchbar">
          <input
            type="search"
            class="inputfield"
            placeholder="Suche..."
            aria-label="Suche"
          />
        </form>
          <button @click="makeToast(message = 'Hier wirst du bald die Möglichkeit haben, dich einzuloggen. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append})" type="button" class=" button button-login hovereffect" id="login" style='color: #707070'>
            Login</button>
          <button @click="makeToast(message = 'Hier wirst du bald die Möglichkeit haben, dich zu registrieren. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append})" type="button" class="button button-signup hovereffect" style='color: #fff'>{{ buttonText }}</button>
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
import { EventBus } from '@/main';
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      message: '',
      options: {},
      buttonText: 'Registrieren',
    }
  },
  created() {
    EventBus.$on('changeHeader', () => {
     this.buttonText = 'Vorschau anzeigen';
     const loginButton = document.getElementById('login') as HTMLElement;
     loginButton.style.display = 'none';
    })
  },
  methods: {
      makeToast() {
        this.$bvToast.toast(this.message, this.options)
      },

    }
});
</script>
