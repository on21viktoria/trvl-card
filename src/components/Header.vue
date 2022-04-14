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

        <ul
          class="nav"
        >
          <li><a href="#" class="item">HOME</a></li>
          <li><a href="#" class="item">SHOP</a></li>
          <li><a href="#" class="item">KONTAKT</a></li>
        </ul>

        <div class="buttons">
          <form class="searchbar">
          <input
            type="search"
            class="inputfield"
            placeholder="Suche..."
            aria-label="Suche"
          />
        </form>
          <button type="button" class="btn-login hovereffect" style='color: #707070'>
            Login</button>
          <button type="button" class="btn-signup hovereffect" style='color: #fff'>Registrieren</button>
          <v-icon class="carticon hovereffect">mdi-cart</v-icon>
          <Help></Help>     
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';
import Help from './Help.vue';

export default Vue.extend({
  name: 'Header',
  components: { Help }
});
</script>
