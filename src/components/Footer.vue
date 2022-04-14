<template>
  <div class="container-fluid">
    <footer class="py-2">
      <div class="row">
        <div class="col-2">
          <h5>Über uns</h5>
          <p>Wir sind das Team der Kniffeligen Gruppe vom Studiengang ON21!</p>
          <h5>Folge uns!</h5>
        </div>

        <div class="col-2">
          <h5>Information</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Profile</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Über uns</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Kontakt</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Deine Adressen</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Umtausch</a>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <h5>Rückgabe</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">FAQs</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Größen</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Kontakt</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Karriere</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Impressum</a>
            </li>
          </ul>
        </div>

        <div class="col-4 offset-1">
          <form>
            <h5>Verpasse keine Neuigkeiten!</h5>
            <p>Melde dich zum Newsletter an und erhalte 10% auf deine erste Bestellung.</p>
            <div class="d-flex w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email-Adresse</label>
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="E-Mail-Adresse"
              />
              <button class="btn btn-primary" type="button">Abonnieren</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between py-2 my-2 border-top">
        <p>&copy; 2021 trvl card, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-dark" href="#"
              >Text<svg class="bi" width="24" height="24">
                <use xlink:href="#twitter" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"
              >Text<svg class="bi" width="24" height="24">
                <use xlink:href="#instagram" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"
              >Text<svg class="bi" width="24" height="24">
                <use xlink:href="#facebook" /></svg
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

export default Vue.extend({
  name: "Footer",
});
</script>

<style scoped>
    .container-fluid {
        position: absolute;
        padding: 20px 40px 0 40px;
        bottom: 0;
        width: 100%;
    }

    .btn-primary {
        background-color: #ff4e00;
        color: #fff;
        border: none;
    }
‚
    .btn-primary:hover {
        background-color:#ff4e00;
        color: black;
    }

    .col-2 {
        text-align: left;
    }
</style>