<template>
<div id="fontsize">
<b-form-select v-model="selected" :options="options" @change="changeFont">
</b-form-select>
</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FontSize",
  data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Bitte wähle eine Schriftgröße.' },
          { value: 'a', text: '8pt.' },
          { value: 'b', text: '10pt.' },
          { value: 'c', text: '12pt.' },
          { value: 'd', text: '14pt.' },
          { value: 'e', text: '16pt.' },
          { value: 'f', text: '18pt.' },
        ]
      }
    }
});
</script>
