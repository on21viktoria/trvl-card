<template>
  <div>
    <v-list-item style="justify-content: flex-end" class="px-2 py-1">
      <v-btn icon>
        <v-icon @click="onClick()">mdi-close</v-icon>
      </v-btn>
    </v-list-item>

    <div v-for="item in items" :key="item.toolChoice" link>
      <div v-if="item.toolChoice === idSidebar">
        <component :is="dynamicComponent"></component>
      </div>
    </div>
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
import Photos from "./../Sidebar/Photos.vue";
import Vorlagen from "./../Sidebar/Vorlagen.vue";

export default Vue.extend({
  data() {
    return {
      items: [
        {
          toolChoice: "Vorlagen",
        },
        {
          toolChoice: "Fotos",
        },
        {
          toolChoice: "Upload",
        },
        {
          toolChoice: "Text",
        },
        {
          toolChoice: "Hintergrund",
        },
        {
          toolChoice: "Sticker",
        },
      ],
    };
  },
  name: "Sidebar",
  components: {
    Vorlagen,
    Photos,
  },
  props: {
    idSidebar: String,
  },
  computed: {
  dynamicComponent() {
    switch(this.idSidebar) {
      case 'Vorlagen': {
        return Vorlagen;
        break;
      }
      case 'Fotos': {
        return Photos;
        break;
      }
    }
  }
  },
  methods: {
    onClick() {
      this.$emit("hideSideBar");
    },
  },
});
</script>

<style scoped>
div {
  width: 100%;
}

.tool-title {
  font-weight: bold;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}
</style>
