<template>
  <div>
    <p class="tool-title">Upload</p>
    <p class="tool-title subtitle">Lade hier dein eigenes Bild hoch</p>
    <div class="wrapper">
      <img src="">
    </div>
    <input
      type="file"
      id="image"
      accept="image/*"
      @input="handleChange()"
      ref="input"
    />
    <button @click="handleUpload()" class="button button-signup button-choose">Bild auswählen</button>
  </div>
</template>


<script>
import storage from "./../../../main"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export default {
  name: "Upload",
  data() {
    return {
      file: "",
      url: ""
    }
  },
  methods: {
    handleChange(event) {
      this.file = this.$refs.input.files[0];

    },
    // Hinweis, falls keine Datei ausgewählt wurde
    handleUpload() {
      if (!this.file) {
        alert("Please choose a file first!")
      }

      const storageRef = ref(storage, `/files/${this.file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, this.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          // Download URL
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            this.url = url 
            this.displayImage();
          });
        }
      );
    },
    // Bild wird platziert
    displayImage(){
      this.$store.dispatch("setPicture", this.url)
    }
  }
}
</script>

<style scoped>
.image-div {
  display: flex;
  margin: 25px;
}
#image {
  margin: 15px;
}

.wrapper {
  margin-top: 20px;
}

input#file-upload-button{
  height: 39px !important;
  padding: 10px !important;
  background: #ff4e00 !important;
  color: #fff !important;
  border-radius: 4px !important;
  font-weight: 500 !important;
  text-decoration: none !important;
}

.button-choose {
  margin-top: 10px;
  margin-left: 15px;
}
.tool-title {
  font-weight: bold;
  font-size: 18px;
  color: #ff4e00;
  margin-bottom: 15px;
  text-align: center;
}
.subtitle {
  font-size: 15px;
  text-align: center;
  margin-bottom: 0;
}
</style>