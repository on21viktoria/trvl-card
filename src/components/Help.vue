<template>
  <div>
      <div class="help">
      <button type="button" class="helpbutton" @click="offerHelp()">
          <v-icon class="helpicon hovereffect">mdi-help-circle-outline</v-icon>
          </button>   
        <p class="textanimation">{{ helpText }}</p>
      </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue';

export default Vue.extend({
  name: 'Help',
  data: () => ( { helpText: ''} ),
  methods: {
      offerHelp(){
          this.helpText = "Brauchst du Hilfe?";
    }
  }
});


</script>