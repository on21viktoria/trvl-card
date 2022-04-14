<template>
  <div>
    <Header></Header>
    <Help></Help>
    <div class="help">
    <p id="instanthelp">{{ helpText }}</p>
    </div>
    <DesignChoice></DesignChoice>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Header from './components/Header.vue';
import DesignChoice from './components/DesignChoice.vue';
import Footer from './components/Footer.vue';
import Help from './components/Help.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Header,
    DesignChoice,
    Help,
    Footer,
  },
  data: () => ({ helpText: ''
  }),
  methods: {
    offerInstantHelp() {
      this.helpText = 'Brauchst du Hilfe?'
    }
    },
    beforeMount() {
  this.offerInstantHelp() 
  } 
  } 
  );
</script>
