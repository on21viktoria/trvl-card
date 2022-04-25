<template>
  <div>
    <p class="tool-title">Text</p>
    <p class="tool-title subtitle">Schriftart</p>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
  name: "Text",
  components: {},
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
