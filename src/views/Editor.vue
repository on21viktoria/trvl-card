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
import Toolbar from './../components/Toolbar.vue';
import Sidebar from './../components/Sidebar.vue';

export default Vue.extend({
  name: "Editor",
  components: {
    Toolbar,
    Sidebar,
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

