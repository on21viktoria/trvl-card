<template>
  <v-card>
    <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      clipped
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon large>mdi-tooltip-edit-outline</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>Werkzeuge</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon large>
            <v-icon class="toolbar-icon" large>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="font-size: 13px">{{ item.title }}</v-list-item-title>
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
      items: [
        { title: "Vorlagen", icon: "mdi-view-dashboard-edit-outline" },
        { title: "Fotos", icon: "mdi-image-edit" },
        { title: "Upload", icon: "mdi-upload" },
        { title: "Text", icon: "mdi-format-text" },
        { title: "Hintergrund", icon: "mdi-rectangle" },
        { title: "Sticker", icon: "mdi-sticker-emoji" },
      ],
      mini: true,
    };
  },
  name: "Toolbar",
  components: {},
  //
});
</script>

<style scoped>
</style>
