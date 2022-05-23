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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Templates from "./Sidebar/Templates.vue";
import Photos from "./Sidebar/Photos.vue";
import Upload from "./Sidebar/Upload.vue";
import Text from "./Sidebar/Text.vue";
import Background from "./Sidebar/Background.vue";
import Sticker from "./Sidebar/Sticker.vue";

export default Vue.extend({
  // items dienen als key für die v-for-Schleife im Template
  // geben an, welche Bearbeitungskomponente geladen werden soll
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
  // Registrierung der möglichen Bearbeitungskomponenten, um Sidebar dynamisch zu befüllen
  components: {
    Templates,
    Photos,
    Upload,
    Text,
    Background,
    Sticker
  },
  // Property, die in der Editor-Komponente der Sidebar übergeben wird
  // gibt, an auf welches Bearbeitungstool der Nutzer/die Nutzerin in der Toolbar geklickt hat
  props: {
    idSidebar: String,
  },
  // Methode, um die Sidebar dynamisch zu befüllen
  // es wird mit einem Swith-Case-Statement geprüft, welche Komponente im Template geladen werden soll
  computed: {
  dynamicComponent() {
    switch(this.idSidebar) {
      case 'Vorlagen': {
        return Templates;
        break;
      }
      case 'Fotos': {
        return Photos;
        break;
      }
      case 'Upload': {
        return Upload;
        break;
      }
      case 'Text': {
        return Text;
        break;
      }
      case 'Hintergrund': {
        return Background;
        break;
      }
      case 'Sticker': {
        return Sticker;
        break;
      }
    }
  }
  },
  // onClick Methode, die das Klick-Event mithilfe eines Event-Emitters 
  // and die Parent-Komponente (Editor) weitergibt
  methods: {
    onClick() {
      this.$emit("hideSideBar");
    },
  },
});
</script>

<style scoped>
.tool-title {
  font-weight: bold;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}
</style>
