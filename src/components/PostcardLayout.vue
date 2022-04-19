<template>
    <div>
    <div>
      <div class="postcard">
        <h3>Ich bin die Vorderseite der Postkarte.</h3>
      </div>
      <div class="postcard">
        <h3>Ich bin die Rückseite der Postkarte.</h3>
        <v-container fluid>
          <v-textarea 
          solo
          counter
          name="Nachrichten-Textfeld"
          label="Schreibe deinen Liebsten eine persönliche Nachricht..."
          :rules = "rules"
          :value = "values">
          </v-textarea>
        </v-container>  
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'PostcardLayout',
  components: {
  },
  data: () => ({
    rules: [(v: string|any[]) => v.length <= 500 || 'Maximal 500 characters'],
    value: 'Hello!',
  }),
})

</script>

<style>

.postcard {
  position: relative;
  background-color: white;
  width: 650px;
  height: 430px;
  margin: 40px;
}

.container {
  padding: 0 !important;
}

.v-textarea textarea {
  height: 430px !important;
}

</style>