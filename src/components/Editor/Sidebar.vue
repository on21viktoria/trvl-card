<template>
  <div>
    <v-list-item style="justify-content: flex-end" class="px-2 py-1">
      <v-btn icon>
        <v-icon @click="onClick()">mdi-close</v-icon>
      </v-btn>
    </v-list-item>

    <div v-for="item in items" :key="item.toolChoice" link>
      <div v-if="item.toolChoice === idSidebar">
        <v-list-item-content v-for="tool in item.tools" :key="tool.title">
          <v-list-item-title class="tool-title">
            {{ tool.title }}
          </v-list-item-title>
          <p class="tool-text">{{ tool.text }}</p>
        </v-list-item-content>
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
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      items: [
        {
          toolChoice: 'Vorlagen',
          tools: [{ title: 'Vorlage', text: 'Wähle hier deine Vorlage.' }],
        },
        {
          toolChoice: 'Fotos',
          tools: [
            { title: 'Suche', text: 'Suche nach einem Ort.' },
            { title: 'Bildauswahl', text: 'Hier ensteht die Bildauswahl.' },
          ],
        },
        {
          toolChoice: 'Upload',
          tools: [
            {
              title: 'Upload',
              text: 'Hier kannst du deine eigenen Bilder hochladen.',
            },
          ],
        },
        {
          toolChoice: 'Text',
          tools: [
            {
              title: 'Schriftart',
              text: 'Hier kannst du eine Schriftart wählen.',
            },
            {
              title: 'Schriftgröße',
              text: 'Hier kannst du die Schriftgröße ändern.',
            },
            {
              title: 'Schriftfarbe',
              text: 'Hier kannst du die Schriftfarbe anpassen.',
            },
          ],
        },
        {
          toolChoice: 'Hintergrund',
          tools: [
            {
              title: 'Hintergrundfarbe',
              text: 'Hier kannst du die Hintergrundfarbe wählen.',
            },
          ],
        },
        {
          toolChoice: 'Sticker',
          tools: [
            {
              title: 'Sticker',
              text: 'Hier kannst du aus verschiedenen Stickern aussuchen.',
            },
          ],
        },
      ],
    };
  },
  name: 'Sidebar',
  components: {},
  props: {
    idSidebar: String,
  },
  methods: {
    onClick() {
      this.$emit('hideSideBar');
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
