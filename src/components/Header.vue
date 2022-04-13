<template>
  <header class="header">
    <div class="firstcontainer">
      <div class="wrapper">
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-2 mb-lg-0
            text-white text-decoration-none
          "
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
            class="inputfieldsearch"
            placeholder="Suche..."
            aria-label="Suche"
          />
        </form>

        <div class="text-end">
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

<style scoped>

* {
  font-family: Montserrat, Verdana, Geneva 
}

.form-control-white {
  color: #707070;
  background-color: #fff;
  border-color: #707070;
}

.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.btn-signup {
    background: #ff4e00;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    font-weight: 500;

    transition: transform 0.8s;
    -moz-transition: transform 0.8s;
    -webkit-transition: transform 0.8s;
    -o-transition: transform 0.8s;
    -ms-transition: transform 0.8s;
}

.btn-signup:hover {
 cursor: pointer;
 transform: scale(1.1, 1.1);
 -moz-transform: scale(1.1, 1.1);
 -webkit-transform: scale(1.1, 1.1);
 -o-transform: scale(1.1, 1.1);
 -ms-transform: scale(1.1, 1.1);
}

.btn-login {
    border: none;
    background-color: transparent;
    color: #707070;
    padding: 10px 10px 10px 10px;
    margin-right: 15px;

    transition: transform 0.8s;
    -moz-transition: transform 0.8s;
    -webkit-transition: transform 0.8s;
    -o-transition: transform 0.8s;
    -ms-transition: transform 0.8s;
}

.btn-login:hover {
  cursor: pointer;
  border: 0.5px solid #ff4e00;
  border-radius: 4px;
  transform: scale(1.1, 1.1);
 -moz-transform: scale(1.1, 1.1);
 -webkit-transform: scale(1.1, 1.1);
 -o-transform: scale(1.1, 1.1);
 -ms-transform: scale(1.1, 1.1);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}

.firstcontainer {
    width: 100%;
    padding: 20px 40px;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: space-around;
  align-self: flex-start;

}

.nav {
  columns: 12;
  margin-bottom: .5rem;
  justify-content: center;
  list-style: none;
}

.nav-link {
    background-color: #fff;
    color: #707070;
    font-weight: 600;   
    padding: .5rem;
}

.carticon {
  padding: 20px;
  transition: transform 0.8s;
    -moz-transition: transform 0.8s;
    -webkit-transition: transform 0.8s;
    -o-transition: transform 0.8s;
    -ms-transition: transform 0.8s;
}

.carticon:hover {
  cursor: pointer;
  transform: scale(1.1, 1.1);
 -moz-transform: scale(1.1, 1.1);
 -webkit-transform: scale(1.1, 1.1);
 -o-transform: scale(1.1, 1.1);
 -ms-transform: scale(1.1, 1.1);
}

.searchbar {
  border: 0.1px solid #707070;
}


</style>

