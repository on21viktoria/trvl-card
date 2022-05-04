<template>
  <!-- <div>
    <p class="tool-title">Text</p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros.
    </p>
    <b-img
      src="https://picsum.photos/500/500/?image=54"
      fluid
      thumbnail
    ></b-img> -->
    <!-- <p class="tool-title subtitle">Schriftart</p>
    <v-select :items="items" filled label="Schrift wählen"></v-select>
    <p class="tool-title subtitle">Schriftgröße</p>
    <v-card flat color="transparent">
      <v-card-text>
        <v-row>
          <v-col class="pr-4">
            <v-slider
              v-model="slider"
              class="align-center"
              :max="18"
              :min="0"
              hide-details
            >
              <template v-slot:append>
                <v-text-field
                  v-model="slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    </div> -->
    <FontSize></FontSize>
</template>

<script lang="ts">
import Vue from "vue";
import FontSize from "./FontSize.vue";

export default Vue.extend({
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  name: "Text",
  components: {FontSize},
  props: {},
  methods: {},
});
</script>

<style scoped>
.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 8px;
  text-align: center;
}
.tool-title.subtitle {
  font-size: 16px;
}
</style>
