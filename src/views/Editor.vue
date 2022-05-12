<template>
  <div class="editor-page">
    <EditorHeader></EditorHeader>
    <v-main>
      <v-container fluid id="editor-container">
        <div v-if="!sidebar" class="editor-grid sidebar-hidden">
          <div id="toolbar">
            <Toolbar @showSideBar="showSideBar" class="toolbar"> </Toolbar>
          </div>
          <div id="postcard">
            <PostcardLayout :ImageId="$route.params.id"></PostcardLayout>
          </div>
        </div>
        <div v-if="sidebar" class="editor-grid sidebar-shown">
          <div id="toolbar-with-sidebar">
            <Toolbar @showSideBar="showSideBar" class="toolbar"> </Toolbar>
          </div>
          <div id="sidebar-with-sidebar">
            <Sidebar
              class="sidebar"
              :idSidebar="sidebarContent"
              @hideSideBar="hideSideBar()"
            ></Sidebar>
          </div>
          <div id="postcard-with-sidebar">
            <PostcardLayout :ImageId="$route.params.id"></PostcardLayout>
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
import EditorHeader from '../components/Editor/EditorHeader.vue';

export default Vue.extend({
  name: "Editor",
  components: {
    Toolbar,
    Sidebar,
    PostcardLayout,
    EditorHeader,
  },
  props: {
    id: String
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
  grid-auto-columns: auto 1fr;
  justify-content: start;
}

#toolbar {
  max-width: 200px;
  height: 100%;
  grid-column: 1;
  box-shadow: 4px 3px 8px 1px rgba(112,112,112, 0.5);
}

#postcard {
  border: solid rgba(112, 112, 112, 0.5) 1px;
  background-color: rgba(112, 112, 112, 0.1);
  height: 100%;
  grid-column: 2;
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
}

.editor-grid.sidebar-shown {
  display: grid;
  grid-auto-columns: auto 1fr 60%;
  justify-content: start;
}

#toolbar-with-sidebar {
  max-width: 200px;
  height: 100%;
  grid-column: 1;
}

.sidebar {
  padding: 0px 10px;
  height: 100%;
  width: 100%;
  font-size: 14px !important;
  grid-column: 2;
  box-shadow: 4px 3px 8px 1px rgba(112,112,112, 0.5)
}

#postcard-with-sidebar {
  border: solid rgba(112, 112, 112, 0.5) 1px;
  background-color: rgba(112, 112, 112, 0.1);
  height: 100%;
  grid-column: 3;
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
}

#app-bar {
  background-color: rgba(0, 0, 0, 0.3);
}

#editor-container {
  background-color: white;
  align-self: stretch;
}
</style>
