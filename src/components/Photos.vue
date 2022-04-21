<template>
  <div>
    <h2>Vorauswahl</h2>
    <div class="Photogrid">
      <img src="../assets/Berlin/Ampel_Philippe-Oursel.jpg" width="100%" />
      <img
        src="../assets/Berlin/Berliner-Mauer_Mateo-Krossler.jpg"
        width="100%"
      />
      <img
        src="../assets/Berlin/Brandenburger-Tor_Hakon-Sataoen.jpg"
        width="100%"
      />
      <img
        src="../assets/Berlin/Checkpoint-Charlie_Santiago-flores.jpg"
        width="100%"
      />
      <img
        src="../assets/Berlin/Fernsehturm_Camilla-Bundgaard.jpg"
        width="100%"
      />
      <img
        src="../assets/Berlin/Museumsinsel_Christian-Ladewig.jpg"
        width="100%"
      />
      <img src="../assets/Berlin/Olympiastadion_Samuel-Svec.jpg" width="100%" />
      <img src="../assets/Berlin/Reichstag_Fionn-Grosseh.jpg" width="100%" />
      <img src="../assets/Berlin/Stadtansicht_Florian-Wehde.jpg" width="100%" />
      <img src="../assets/Berlin/Stadtansicht2_Stefan-Widua.jpg" width="100%" />
      <img src="../assets/Berlin/U-Bahn_Soroush-Karimi.jpg" width="100%" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Photos',
  components: {},
  methods: {},
});
</script>

<style scoped>
.Photogrid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
}

img:hover {
  opacity: 30%;
}
</style>
