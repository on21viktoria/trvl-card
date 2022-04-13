<template>
  <header class="header">
    <div class="firstcontainer">
      <div class="wrapper">
        <a
          href="/"
          class="logocontainer"
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
          <li><a href="#" class="nav-link">HOME</a></li>
          <li><a href="#" class="nav-link">SHOP</a></li>
          <li><a href="#" class="nav-link">KONTAKT</a></li>
        </ul>

        <form class="searchbar">
          <input
            type="search"
            class="inputfield"
            placeholder="Suche..."
            aria-label="Suche"
          />
        </form>

        <div>
          <button type="button" class="btn-login">
            Login</button>
          <button type="button" class="btn-signup">Registrieren</button>
          <v-icon class="carticon">mdi-cart</v-icon>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>
