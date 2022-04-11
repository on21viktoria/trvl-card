<template>
  <div>
      <v-app>
        <v-app-bar app clipped-left id="app-bar">
          <div >
          <h1>trvl card</h1>
          </div>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini"
        permanent clipped expand-on-hover>
          <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-title>Werkzeuge</v-list-item-title>

              <v-btn icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ svgPath }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>

        <!-- Sizes your content based upon application components -->
        <v-main>

          <!-- Provides the application the proper gutter -->
          <v-container fluid>

          </v-container>
        </v-main>

        <v-footer app padless id="footer">
          <p>Hier muss der Footer eingefügt werden</p>
        </v-footer>
      </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    return: {
      drawer: true,
      items: [
        { title: 'Home' },
        /* { title: 'My Account', icon: 'mdiAccount' }, */
        /* { title: 'Users', icon: 'mdi-account-group-outline' }, */
      ],
      mini: true,
    },
    //
  }),
  name: 'Toolbar',
  components: {
  },

});
</script>

<style scoped>

#app-bar{
  background-color: rgba(0,0,0,0.3);

}

h1 {
  width: 100vw;
  text-align: center;
}

#footer> p {
  width: 100vw;
  text-align: center;
}

</style>
