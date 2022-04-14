<template>
  <div>
    <v-list-item style="justify-content: flex-end" class="px-2 py-1">
      <v-btn icon @click.stop="mini = !mini">
        <v-icon @click="onClick">mdi-close</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="tool in tools" :key="tool.title" link>
        <v-list-item-content>
          <v-list-item-title class="tool-title">{{ tool.title }}</v-list-item-title>
          <p>
            Hier kann etwas getan werden.
          </p>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros.
    </p>
    <b-img
      src="https://picsum.photos/500/500/?image=54"
      fluid
      thumbnail
    ></b-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      tools: [
        { title: "Schriftart", icon: "mdi-view-dashboard-edit-outline" },
        { title: "Schriftgröße", icon: "mdi-image-edit" },
        { title: "Schriftfarbe", icon: "mdi-upload" },
      ],
    };
  },
  name: "Sidebar",
  components: {},
  methods: {
    onClick() {
      this.$emit("hideSideBar");
    },
  },
});
</script>

<style scoped>
div {
  width: 300px;
}

.tool-title {
  font-weight: bold;
  color: #ff4e00;
}
</style>
