<template>
<div>
      <v-app-bar app clipped-left id="app-bar">
      <div>
        <h1>trvl card</h1>
      </div>
    </v-app-bar>

    <v-main>
      <Toolbar></Toolbar> 
      <v-container fluid></v-container>
    </v-main>

    <v-footer app padless id="footer">
          <p>Hier muss der Footer eingefügt werden</p>
        </v-footer>
    
</div>    
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './Toolbar.vue';

export default Vue.extend({
  name: 'Editor',
  components: {
    Toolbar,
  },
  data: () => ({
    //
  }),
});
</script>
