<template>
    <div>
        <Contactform></Contactform>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Contactform from "./Contactform.vue";

export default Vue.extend({
    name: 'Test', 
    components: {
        Contactform,
    },
});

</script>