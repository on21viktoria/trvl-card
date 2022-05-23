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
          <div class="buttons-editor-header">
            <button class="button button-signup hovereffect preview-button" @click="showModal">
              Vorschau
            </button>
            <button
              type="button"
              class="button button-login hovereffect address"
              @click="onClick()"
            >
              Empfängeradresse speichern
            </button>
            <router-link
              class="editor-header-router-link"
              to="/checkout"
              v-bind:class="{ disabled: isActive }"
            >
              <button
                class="button button-signup hovereffect checkout"
                type="button"
              >
                Zum Warenkorb
              </button></router-link
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
      isActive: true,
      message: "",
      options: {},
      isModalVisible: false,
    };
  },
  methods: {
    // Ruft die aktuell auf der Postkarte eingegebene Empfänger-Adresse aus dem store ab.
    // Prüft die Addresse auf Vollständigkeit.
    // Ist eines des Felder, außer dem Feld "Zusatz", leer, bleibt der Button "Zum Warenkorb" deaktiviert und der Nutzer erhält eine Benachrichtigung.
    // Ist die Addresse vollständig, wird der Button "Zum Warenkorb" aktiviert, sodass der Nutzer zum Checkout fortschreiten kann.
    async handleClick() {
      let currentRecipient = this.$store.getters.getCurrentRecipient;
      if (
        currentRecipient.name === "" ||
        currentRecipient.streetAndNumber === "" ||
        currentRecipient.postalcodeAndCity === "" ||
        currentRecipient.country === ""
      ) {
        this.isActive = true;
        this.$bvToast.toast(
          (this.message =
            "Oder deine Empfängeradresse ist nicht vollständig. Bitte gib eine Empfängeraddresse an, damit deine Postkarte auch ankommt."),
          (this.options = {
            title: "Du hast keine Empfängeradresse eingegeben!",
            autoHideDelay: 5000,
          })
        );
      } else {
        this.isActive = false;
      }
    },
    // Generiert eine kurze Benachrichtigung mit personalisierter Nachricht und personalisierter Formatierung. 
    makeToast() {
      this.$bvToast.toast(this.message, this.options);
    },
    // Wirft das Event changeRecipient aus, auf das die Komponente PostcardLayout hört.
    // Ruft die Methode handleClick auf, die die Empfängeradresse prüft. 
    onClick() {
      EventBus.$emit("changeRecipient");
      this.handleClick();
    },
    // Macht das im Template eingebundene, unsichtbare Modal sichtbar, in dem eine Vorschau der aktuellen Postkarte generiert wird. 
    showModal() {
      this.isModalVisible = true;
    },
    // Schließt das Modal mit der Vorschau der aktuellen Postkarte wieder. 
    closeModal() {
      this.isModalVisible = false;
    },
  },
});
</script>

<style scoped>
.buttons-editor-header {
  display: flex !important;
  justify-content: flex-end !important;
}
.checkout {
  position: relative;
  margin-right: 20px;
  margin-left: auto;
}

a.editor-header-router-link {
  padding: 0px;
  margin-top: 12px;
  height: fit-content;
  width: auto;
}

.address {
  margin-top: 12px !important;
}

.disabled {
  pointer-events: none;
  opacity: 0.6;
}

.preview-button {
  margin-top: 12px !important;
}
.header {
  z-index: 900;
}
</style>