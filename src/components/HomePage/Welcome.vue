<template>
<div class="welcome">
    <div class="headline"><h1>Willkommen bei trvl card, deinem individuellen Postkarten-Designer!</h1></div>
    <div class="headline"><p>
    Bei trvl card kannst du aus etlichen verschiedenen Vorlagen auswählen oder einfach ohne Vorlage starten. 
    Alle Optionen findest du in unserem Postkarten-Editor. Klicke auf "Jetzt gestalten" und lege direkt los! </p>
    <img id="welcome-flieger" src="./../../assets/trvl_card_flieger_3.png"/>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'Welcome',
})
</script>

<style scoped>
#welcome-flieger {
    width: 100%;
    margin-top: 30px;
    /* margin-left: 7%; */
}
</style>>
