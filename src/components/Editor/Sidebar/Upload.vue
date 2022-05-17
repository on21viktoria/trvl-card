<template>
  <div>
    <b-form-file @change="onFileSelected" accept="image/jpeg, image/png" v-model="file1" class="mt-3" plain></b-form-file>
    <div class="mt-3">Deine ausgewählte Datei: {{ file1 ? file1.name : '' }}</div>
    <button @click="onUpload">Upload</button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        file1: null,
        selectedFile: null,
      }
    },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name)
      axios.post("https://us-central1-kundenuploads.cloudfunctions.net/uploadFile", fd)
      .then(res => {
        console.log(res)
      })

    }
  }


  }
</script>