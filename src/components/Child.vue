<template>
  <button type="button" @click='passEvent'> Update me</button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend ({
 name:'Child',
  methods:{
    passEvent()
    {
      this.$emit('changeTitle','Awesome ')
    }
  }
})
</script>