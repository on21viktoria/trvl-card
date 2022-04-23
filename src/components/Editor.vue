<template>
  <div>
    <v-app-bar app clipped-left id="app-bar">
      <div>
        <h1>trvl card</h1>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid id="editor-container">
        <div class="editor-grid sidebar-hidden">
          <div id="toolbar">
          </div>
          <div id="postcard">
            <PostcardLayout></PostcardLayout>
            </div>
        </div>
      </v-container>
    </v-main>

    <v-footer app padless id="footer">
      <p>Hier muss der Footer eingefügt werden</p>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Editor",
  data: () => ({
    //
  }),
});
</script>

<style scoped>
h1 {
  width: 100vw;
  text-align: center;
}

.editor-grid.sidebar-hidden {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-gap: 10px;
}

.editor-grid.sidebar-shown {
  display: grid;
  grid-template-columns: 15% 15% 70%;
  grid-gap: 10px;
} 

#toolbar {
  background-color: aquamarine;
  height: 100%
}
#sidebar {
  background-color: burlywood;
  height: 100%
  hidden;
}

#postcard {
  background-color: burlywood;
  height: 100%;
  padding: 5% 20%;
}

#app-bar {
  background-color: rgba(0, 0, 0, 0.3);
}

#editor-container {
  background-color: lightpink;
  height: 800px;
}

#footer > p {
  width: 100vw;
  text-align: center;
}
</style>
