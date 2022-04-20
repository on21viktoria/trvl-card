
<template>
  <div>
    <v-app-bar app clipped-left id="app-bar">
      <div>
        <h1>trvl-card</h1>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid id="editor-container">
        <div v-if="!sidebar" class="editor-grid sidebar-hidden">
          <div id="toolbar">
            <Toolbar @showSideBar="showSideBar" class="toolbar">
            </Toolbar>
          </div>
          <div id="postcard"></div>
        </div>
        <div v-if="sidebar" class="editor-grid sidebar-shown">
          <div id="toolbar">
            <Toolbar  @showSideBar="showSideBar" class="toolbar">
            </Toolbar>
          </div>
          <div>
            <Sidebar :idSidebar="sidebarContent" @hideSideBar="showSideBar"></Sidebar>
          </div>
          <div id="postcard">
          
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
import Toolbar from "./Toolbar.vue";
import Sidebar from './Sidebar.vue';

export default Vue.extend({
  name: "Editor", 
  components: {
    Toolbar,
    Sidebar,
  },
  data: () => ({
      sidebar: false,
      sidebarContent: '',
  }),
  methods: {
    showSideBar(idSidebar: string) {
      this.sidebar = !this.sidebar;
      this.sidebarContent = idSidebar;
    },
    hideSideBar() {
      this.sidebar = !this.sidebar;
    }
  }
});
</script>

<style scoped>
h1 {
  width: 100vw;
  text-align: center;
}

.toolbar {
  height: 100%;
}

.editor-grid.sidebar-hidden {
  display: grid;
  grid-template-columns: 15% 85%;
  /*grid-gap: 10px;*/
}

.editor-grid.sidebar-shown {
  display: grid;
  grid-template-columns: auto 25% 75%;
  /* grid-gap: 10px; */
} 

#toolbar {
  border: solid #707070 1px;
  /* background-color: aquamarine; */
  height: 100%;
}

#sidebar {
  border: solid #707070 1px;
  /* background-color: mediumpurple; */
  height: 100%;
  width: 100%;
}

#postcard {
  border: solid #707070 1px;
  background-color: rgba(112, 112, 112, 0.1);
  height: 100%;
  margin-left: 10px;
}

#app-bar {
  background-color: rgba(0, 0, 0, 0.3);
}

#editor-container {
  border: solid #707070 1px;
  background-color: white;
  height: 800px;
  max-width: 100%;
}

#footer > p {
  width: 100vw;
  text-align: center;
}
</style>
