<template>
  <v-card>
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      clipped
    >
      <v-list-item class="px-2 py-1">
        <v-list-item-avatar>
          <v-icon large>mdi-tooltip-edit-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-title style="font-size: 16px">Werkzeuge</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          class="tool-selected"
          link
          @click="
            onClick('Vorlagen');
            setId(true, 'Vorlagen');
          "
        >
          <v-list-item-icon large>
            <v-icon class="toolbar-icon Vorlagen" large
              >mdi-view-dashboard-edit-outline</v-icon
            >
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title Vorlagen"
              >Vorlagen</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="
            onClick('Fotos');
            setId(true, 'Fotos');
          "
        >
          <v-list-item-icon large>
            <v-icon class="toolbar-icon Fotos" large>mdi-image-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title Fotos"
              >Fotos</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="
            onClick('Upload');
            setId(true, 'Upload');
          "
        >
          <v-list-item-icon large>
            <v-icon class="toolbar-icon Upload" large>mdi-upload</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title Upload">Upload</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="
            onClick('Text');
            setId(true, 'Text');
          "
        >
          <v-list-item-icon large>
            <v-icon class="toolbar-icon Text" large>mdi-format-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title Text" >Text</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="
            onClick('Hintergrund');
            setId(true, 'Hintergrund');
          "
        >
          <v-list-item-icon large>
            <v-icon class="toolbar-icon Hintergrund" large>mdi-rectangle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title Hintergrund">Hintergrund</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          @click="
            onClick('Sticker');
            setId(true, 'Sticker');
          "
        >
          <v-list-item-icon large>
            <v-icon class="toolbar-icon Sticker" large>mdi-sticker-emoji</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title Sticker">Sticker</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      drawer: true,
      mini: true,
      idSidebar: "",
      selected: false,
      currentToolIcon: undefined as any,
      currentToolTitle: undefined as any,
    };
  },
  name: "Toolbar",
  components: {
  },
  props: {},
  methods: {
    onClick(id: string) {
      this.idSidebar = id;
      this.$emit("showSideBar", this.idSidebar, this.clearSelected);
    },
    setId(selected: boolean, id: string) {
      let selectedId = id;
      // this.clearSelected();
      if(this.currentToolIcon != undefined && this.currentToolTitle != undefined) {
        this.clearSelected();
        switch (selectedId) {
        case "Vorlagen":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Vorlagen');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Vorlagen');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Fotos":
          this.currentToolIcon = document.querySelector('.toolbar-icon' +'.Fotos');
          this.currentToolTitle = document.querySelector('.toolbar-title' +'.Fotos');
          this.currentToolIcon?.classList.add("active");
          this.currentToolTitle?.classList.add("active");
        break;
        case "Upload":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Upload');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Upload');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Text":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Text');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Text');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Hintergrund":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Hintergrund');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Hintergrund');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Sticker":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Sticker');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Sticker');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        }
      } else {
      switch (selectedId) {
        case "Vorlagen":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Vorlagen');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Vorlagen');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Fotos":
          this.currentToolIcon = document.querySelector('.toolbar-icon' +'.Fotos');
          this.currentToolTitle = document.querySelector('.toolbar-title' +'.Fotos');
          this.currentToolIcon?.classList.add("active");
          this.currentToolTitle?.classList.add("active");
        break;
        case "Upload":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Upload');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Upload');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Text":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Text');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Text');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Hintergrund":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Hintergrund');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Hintergrund');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
        case "Sticker":
          this.currentToolIcon = document.querySelector('.toolbar-icon' + '.Sticker');
          this.currentToolTitle = document.querySelector('.toolbar-title' + '.Sticker');
          this.currentToolIcon?.classList.add('active');
          this.currentToolTitle?.classList.add('active');
        break;
      }
      }
    },

    clearSelected() {
      this.currentToolIcon.classList.remove('active');
      this.currentToolIcon = undefined;
      this.currentToolTitle.classList.remove('active');
      this.currentToolTitle = undefined;
    }
  },
});
</script>

<style scoped>
#navigation-drawer {
  border-right: solid rgba(112, 112, 112, 0.4) 1px;
}

.active {
  /* color: rgb(29, 162, 169) !important; */
  color: rgb(255, 78, 0) !important;
  font-weight: bold !important;
}
</style>
