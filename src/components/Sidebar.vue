<template>
  <div>
    <v-list-item style="justify-content: flex-end" class="px-2 py-2" >
      <v-btn  icon @click.stop="mini = !mini">
        <v-icon @click="onClick">mdi-close</v-icon>
      </v-btn>
    </v-list-item>
    
    <v-divider></v-divider>
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
  name: "Sidebar",
  components: {},
  methods: {
    onClick(){
     this.$emit('hideSideBar');
     
    }
  }
});
</script>

<style scoped>
div {
  width: 300px;
  background-color: red;
}
</style>
