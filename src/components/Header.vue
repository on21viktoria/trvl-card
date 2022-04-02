<template>
  <header class="header">
    <div class="container-fluid">
      <div
        class="
          d-flex
          flex-wrap
          align-items-center
          justify-content-center justify-content-lg-start
        "
      >
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
          class="
            nav
            col-12 col-lg-auto
            ms-lg-auto
            mb-2
            justify-content-center
            mb-md-0
          "
        >
          <li><a href="#" class="nav-link px-2 headertext">HOME</a></li>
          <li><a href="#" class="nav-link px-2 headertext">SHOP</a></li>
          <li><a href="#" class="nav-link px-2 headertext">KONTAKT</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control form-control-white"
            placeholder="Suche..."
            aria-label="Suche"
          />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-login">
            Login
          </button>
          <button type="button" class="btn btn-signup">Registrieren</button>
          <i class="bi bi-cart-fill"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>

.headertext {
    background-color: #fff;
    color: #707070;
    font-weight: 600;
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
}

.login {
    border: none;
    background-color: transparent;
    color: #707070;
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

.container-fluid {
    padding: 20px 40px;
}

</style>

