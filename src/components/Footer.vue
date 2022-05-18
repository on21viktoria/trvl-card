<template>
  <div class="container-fluid">
    <footer class="py-2">
      <div class="row">
        <div class="col-3">
          <h5>Über uns</h5>
          <p>Wir von trvl card haben die Vision, dass wieder mehr liebevoll 
            gestaltete Postkarten postalisch versendet werden.</p>
          <h5>Folge uns!</h5>
          <v-icon class="socialmedia">mdi-facebook</v-icon>
          <v-icon class="socialmedia">mdi-instagram</v-icon>
          <v-icon class="socialmedia">mdi-twitter</v-icon>
        </div>
        <div class="col-2">
          <h5>Das Team</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <p class="nav-link p-0 text-muted">Marie Bauer - Product Ownerin</p>
            </li>
            <li class="nav-item mb-2">
              <p class="nav-link p-0 text-muted">Isabel Köcher - Scrum Masterin</p>
            </li>
            <li class="nav-item mb-2">
              <p class="nav-link p-0 text-muted">Viktoria Seubert - Developerin</p>
            </li>
            <li class="nav-item mb-2">
              <p class="nav-link p-0 text-muted">Robin Kauffeld - Developer</p>
            </li>
            <li class="nav-item mb-2">
              <p class="nav-link p-0 text-muted">Katharina Boni - Developerin</p>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <img src="../assets/Postkarte.jpg" width=70%/>
        </div>
        <div class="col-4 offset-1">
          <form>
            <h5>Verpasse keine Neuigkeiten!</h5>
            <p>
              Melde dich zum Newsletter an und erhalte 10% auf deine erste
              Bestellung.
            </p>
            <div class="d-flex w-100 gap-2">
              <input
                id="newsletter1"
                type="text"
                class="form-control"
                placeholder="E-Mail-Adresse"
              />
              <button class="button button-signup hovereffect" @click="makeToast(message = 'Hier wirst du bald die Möglichkeit haben, dich für den Newsletter anzumelden. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append, toaster:'b-toaster-bottom-right'})" type="button">Abonnieren</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex justify-content-between py-2 my-2 border-top">
        <p>&copy; 2021 trvl card, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-dark" href="#"
              ><svg class="bi" width="24" height="24">
                <use xlink:href="#twitter" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"
              ><svg class="bi" width="24" height="24">
                <use xlink:href="#instagram" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-dark" href="#"
              ><svg class="bi" width="24" height="24">
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
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

export default Vue.extend({
  name: "Footer",
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

<style scoped>
.container-fluid {
  margin-bottom: -310px;
  padding: 20px 40px 0 40px;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  border-top: 1px solid #dee2e6 !important;
    border-top-width: 1px !important;
    border-top-style: solid !important;
    border-top-color: rgb(222, 226, 230) !important;
}

.btn-primary {
  background-color: #ff4e00;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #ff4e00;
  color: black;
}

.col-2 {
  text-align: left;
}


.nav-link {
  margin: 0;
}

.roles {
  margin-top: 32px;
  color: #707070;
}

#newsletter1 {
  margin-right: 10px;
}

.flex-column {
  padding: 0! important;
}

#newsletter1:focus {   
  border-color: rgba(255,78,0, 0.8);
  box-shadow: 0 1px 1px rgba(255,78,0, 0.075) inset, 0 0 8px rgba(255,78,0, 0.6);
  outline: 0 none;
} 


</style>