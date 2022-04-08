<template>
<div class="container">
  <div id="postkartenContainer">
    <img alt="trvl Card Logo" src="./logo_trvl.png">
    <img alt="Logo" src="./logo.png">
  </div>
  <div id="toolbarContainer">
    <p> Hier steht hoffentlich ein Container! </p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SidebarPlugin } from 'bootstrap-vue';


export default defineComponent({
    name: 'ToolbarComponent',
    }) </script>



    <style>
      
    #postkartenContainer {
        background-color: black;
        width: 600px%;
      }

    #toolbarContainer {
        background-color: darkBlue;
        width: 200px%;
    }

    
    </style>