<template>
  <div>
    <header class="header">
      <div class="firstcontainer sticky">
        <div class="wrapper">
          <a href="/" class="logocontainer hovereffect">
            <img
              alt="trvl card Logo"
              src="../../assets/logo_trvl.png"
              width="60"
              height="60"
            />
          </a>
          <div class="links"></div>
          <button class="button button-signup hovereffect" @click="showModal">
            Vorschau
          </button>
          <router-link
            to="/checkout"
            class="button button-signup hovereffect checkout"
            style="color: #fff"
            ><button type="button" @click="savePostcard">Speichern & Zum Warenkorb</button></router-link
          >
          <div>
            <v-icon
              class="account hovereffect"
              @click="
                makeToast(
                  (message =
                    'Hier wirst du bald die Möglichkeit haben, in deinen Account zu gelangen. Bitte hab noch ein bisschen Geduld.'),
                  (options = {
                    title: 'Hier entsteht ein neues Feature!',
                    autoHideDelay: 5000,
                    appendToast: append,
                  })
                )
              "
              >mdi-account-circle</v-icon
            >
            <v-icon
              class="carticon hovereffect"
              @click="
                makeToast(
                  (message =
                    'Hier geht es bald zum Warenkorb. Bitte hab noch ein bisschen Geduld.'),
                  (options = {
                    title: 'Hier entsteht ein neues Feature!',
                    autoHideDelay: 5000,
                    appendToast: append,
                  })
                )
              "
              >mdi-cart</v-icon
            >
            <a
              class="helpanchor hovereffect"
              href="https://docs.google.com/document/d/1wn9SLNurX8Eh4nTQ9y6VwFonR0hPe_QoJ0DXVWa6SGs/edit"
              ><v-icon>mdi-help-circle-outline</v-icon></a
            >
          </div>
        </div>
      </div>
    </header>
    <Preview v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from "vue";
import Preview from "./Preview.vue";
import { EventBus } from "@/main";

export default Vue.extend({
  name: "EditorHeader",
  components: { Preview },
  data() {
    return {
      message: "",
      options: {},
      isModalVisible: false,
    };
  },
  methods: {
    makeToast() {
      this.$bvToast.toast(this.message, this.options);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    savePostcard() {
      EventBus.$emit('savePostcard');
    }
  },
});
</script>

<style>
.links {
  float: right;
  position: relative;
  margin-right: 20px;
  margin-left: 0;
}
</style>