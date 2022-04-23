<template>
  <div class="editor-page">
    <v-main>
      <v-container fluid id="editor-container">
        <div v-if="!sidebar" class="editor-grid sidebar-hidden">
          <div id="toolbar">
            <Toolbar @showSideBar="showSideBar" class="toolbar"> </Toolbar>
          </div>
          <div id="postcard"></div>
        </div>
        <div v-if="sidebar" class="editor-grid sidebar-shown">
          <div id="toolbar">
            <Toolbar @showSideBar="showSideBar" class="toolbar"> </Toolbar>
          </div>
          <div>
            <Sidebar
              class="sidebar"
              :idSidebar="sidebarContent"
              @hideSideBar="hideSideBar()"
            ></Sidebar>
          </div>
          <div id="postcard">
            <PostcardLayout></PostcardLayout>
            </div>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventBus } from '../main';
import Toolbar from './../components/Editor/Toolbar.vue';
import Sidebar from './../components/Editor/Sidebar.vue';
import PostcardLayout from '../components/Editor/PostcardLayout.vue';

export default Vue.extend({
  name: "Editor",
  components: {
    Toolbar,
    Sidebar,
    PostcardLayout,
  },
  data: () => ({
    sidebar: false,
    sidebarContent: '',
    resetSelectedTool: false,
  }),
  methods: {
    showSideBar(idSidebar: string) {
      this.sidebar = true;
      this.sidebarContent = idSidebar;
    },
    hideSideBar() {
      this.sidebar = !this.sidebar;
      this.resetSelectedTool = true;
      EventBus.$emit('closeSideBar', this.resetSelectedTool);
    },
  },
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
  grid-template-columns: 13% 87%;
  /*grid-gap: 10px;*/
}

.editor-grid.sidebar-shown {
  display: grid;
  grid-template-columns: 13% 25% 62%;
  /* grid-gap: 10px; */
}

#toolbar {
  border: solid #707070 1px;
  /* background-color: aquamarine; */
  height: 100%;
}

.sidebar {
  padding: 0px 10px;
  /* border: solid #707070 1px; */
  /* background-color: mediumpurple; */
  height: 100%;
  width: 100%;
  font-size: 14px !important;
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
</style>
