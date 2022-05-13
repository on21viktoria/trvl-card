<template>
  <div>
    <!-- Styled -->
    <b-form-file accept="image/jpeg, image/png" v-model="file1" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file2.name : '' }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file1: null,
      }
    }
  }
</script>