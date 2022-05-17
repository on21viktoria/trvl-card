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
        <div class="buttons-editor-header">
        <router-link
        class="editor-header-router-link"
      to="/checkout"
      event
      @click.native.capture="handleClick()"
      ><button class="button button-signup hovereffect checkout" type="button" @click="onClick();makeToast(message = 'Bitte gib eine Empfängeraddresse an, damit deine Postkarte auch ankommt.', options = {
          title: 'Du hast keine Empfängeradresse eingegeben!',
          autoHideDelay: 5000, appendToast: append})">Speichern & Zum Warenkorb</button></router-link
    >
        <div>
          <v-icon class="account hovereffect" @click="makeToast(message = 'Hier wirst du bald die Möglichkeit haben, in deinen Account zu gelangen. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append})" >mdi-account-circle</v-icon>
          <v-icon class="carticon hovereffect" @click="makeToast(message = 'Hier geht es bald zum Warenkorb. Bitte hab noch ein bisschen Geduld.', options = {
          title: 'Hier entsteht ein neues Feature!',
          autoHideDelay: 5000, appendToast: append})" >mdi-cart</v-icon>
          <a class="helpanchor hovereffect" href="https://docs.google.com/document/d/1wn9SLNurX8Eh4nTQ9y6VwFonR0hPe_QoJ0DXVWa6SGs/edit"><v-icon>mdi-help-circle-outline</v-icon></a> 
        </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script lang="ts">
/* eslint-disable */
import { EventBus } from '@/main';
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'EditorHeader',
  data() {
    return {
      message: '',
      options: {}
    }
  },
  methods: {
    handleClick(event: Event) {
      console.log("In this method")
      console.log(this.$store.getters.getCurrentRecipient)
      if (this.$store.getters.getCurrentRecipient === undefined) {
        event.stopPropagation()
        } else { console.log("Somethings in the recipient") };
    },
      makeToast() {
        this.$bvToast.toast(this.message, this.options)
      },
      onClick() {
        EventBus.$emit('changeRecipient');
      },
    },
    created() {
      EventBus.$on('changeRecipient', async () => {await this.handleClick})
    },
    computed: {...mapState(["currentRecipient"]), ...mapGetters(['getCurrentRecipient'])
    }
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

</style>