<template>
    <div>
        <h3>Hallo, ich bin eine Sidebar</h3>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "Sidebar",
  components: {},
});
</script>

<style scoped>
    div{
        width: 300px;
        background-color: red
    }
</style>