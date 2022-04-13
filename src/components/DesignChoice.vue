<template>
<div>
  <div class="designchoice">
    <div class="choice" id="blankowrapper">
      <button @click="onClick('blankoDesign')">
        Mit einer Blanko-Postkarte starten
      </button>
    </div>
    <div class="choice" id="largeletterwrapper">
      <button @click="onClick('largeLetterDesign')">
        Mit dem Large-Letter-Design starten
      </button>
    </div>
  </div>
  <div class="outputfield">
      <p>{{ text }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/* eslint-disable */

export default Vue.extend({
  name: 'DesignChoice',
  data: () => ({ text: '' }),
  methods: { 
      onClick(design: string) { 
          if (design === 'blankoDesign') { 
              this.text = 'Du hast das Blanko-Design ausgewählt.'; 
              }
        else { this.text = 'Du hast das Large-Letter-Design ausgewählt.'}  
            } 
        } 
    })
             

</script>
