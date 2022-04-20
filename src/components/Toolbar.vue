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

        <v-list-item-title style= "font-size:16px">Werkzeuge</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link @click="onClick('Vorlagen'); setId()">
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>mdi-view-dashboard-edit-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="toolbar-title">Vorlagen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="onClick('Fotos')">
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>mdi-image-edit</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Fotos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="onClick('Upload')">
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>mdi-upload</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Upload</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="onClick('Text')">
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>mdi-format-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Text</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="onClick('Hintergrund')">
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>mdi-rectangle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Hintergrund</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="onClick('Sticker')">
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>mdi-sticker-emoji</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Sticker</v-list-item-title>
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
      // items: [
      //   { title: "Vorlagen", icon: "mdi-view-dashboard-edit-outline" },
      //   { title: "Fotos", icon: "mdi-image-edit" },
      //   { title: "Upload", icon: "mdi-upload" },
      //   { title: "Text", icon: "mdi-format-text" },
      //   { title: "Hintergrund", icon: "mdi-rectangle" },
      //   { title: "Sticker", icon: "mdi-sticker-emoji" },
      // ],
      mini: true,
      idSidebar: '',
      selected: false,
    };
    
    
  },
  name: "Toolbar",
  components: {},
  props: {
  },
  methods: {
    onClick(id: string, selected: boolean) {
     this.idSidebar = id;
     
     this.$emit('showSideBar', this.idSidebar, this.selected);
    },
    setId(selected: boolean) {
      this.selected = true;
      const currentTool = document.querySelector('.toolbar-title');
      currentTool?.classList.add('active');
    }

  }
});
</script>

<style scoped>
#navigation-drawer {
  border-right: solid rgba(112, 112, 112, 0.4) 1px;
}

.active {
  color: rgb(29, 162, 169);
  font-weight: bold;
}
</style>
