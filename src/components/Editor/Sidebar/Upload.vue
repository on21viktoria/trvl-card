<template>
  <div>
    <input
      type="file"
      id="image"
      accept="image/*"
      @input="handleChange()"
      ref="input"
    />
    <button @click="handleUpload()">Upload to Firebase</button>
    <button @click="showImages()">Show Images</button>
  </div>
</template>


<script>
import storage from "./../../../main"
import { ref, uploadBytesResumable, listAll, getDownloadURL } from "firebase/storage"

export default {
  name: "Upload",
  data() {
    return {
      file: "",
      images: []
    }
  },
  methods: {
    handleChange(event) {
      this.file = this.$refs.input.files[0];

    },
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

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
          });
        }
      );
      uploadTask.then()
      listAll(storageRef)
        .then((res) => {
          console.log("Res: ", res)
          res.items.forEach((imageRef) => {
            console.log("ImgRef: ", imageRef)
            this.displayImage(imageRef);
          });
        }).catch((error) => {
          console.log(error)
        });
    },

    displayImage(imageRef) {
      console.log("jeööp")
      imageRef.getDownloadURL().then((url) => {
        console.log("Hello: ", url);
        this.images.push(url);
        console.log(url)
      })
    }
  }
}
</script>

<style>
.image-div {
  display: flex;
  margin: 25px;
}
.image {
  max-width: 250px;
  margin: 15px;
}
</style>