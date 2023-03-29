<script setup lang="ts">
import { onMounted, ref } from 'vue';
import VueJsonView from "@matpool/vue-json-view";
import useMainStore from './store';
import Dependencies from './components/Dependencies.vue';
import Versions from './components/Versions.vue';

const nodeVersion = ref("");
const users = ref("");
const drawer = ref(false);
const store = useMainStore();
const dbFilePath = ref("");

onMounted(async () => {
  // nodeVersion.value = await window.api.versions.getNodeVersion();
  users.value = await window.api.users.get();
  dbFilePath.value = await window.api.appConfig.getDbFilePath();
})
</script>

<template>
  <v-app :theme="store.theme">
    <v-app-bar color="info" density="comfortable">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>App Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="store.toggleTheme">
        <v-icon v-if="store.theme == 'light'">mdi-weather-sunny</v-icon>
        <v-icon v-else>mdi-weather-night</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div
        style="display: flex; gap: 10px; justify-content: center; flex-direction: column; align-items: center; padding-bottom: 100px;">
        <div class="text-center mt-3 font-weight-bold" style="font-size: 28px;">
          Electron Fullstack Quick Start Vuetify
        </div>
        <div style="font-size: 14px;">
          Note*: Path to database file is in the <v-chip label size="small" color="success"
            style="font-family: monospace; font-size: 12px;">{{
              dbFilePath
            }}</v-chip>
        </div>
        <div>
          <v-chip label size="small" color="info">OPEN DOCS</v-chip>
        </div>
        <div class="view-docs" style="display: flex; gap: 20px; justify-content: center; margin: 10px 0 20px 0;">
          <a href="https://www.electronjs.org/docs/latest/" class="open-docs"
            style="background-image: url('electron.svg');"></a>
          <a href="https://vitejs.dev/guide/" class="open-docs" style="background-image: url('vite.svg');"></a>
          <a href="https://vuejs.org/guide/introduction.html" class="open-docs"
            style="background-image: url('vue.svg');"></a>
          <a href="https://day.js.org/en/" class="open-docs" style="background-image: url('dayjs-logo.png');"></a>
          <a href="https://knexjs.org/guide/" class="open-docs" style="background-image: url('knex-logo.png');"></a>
          <a href="https://vuetifyjs.com/en/components/all/" class="open-docs"
            style="background-image: url('vuetify-logo.svg');"></a>
        </div>
        <div style="display: flex; justify-content: center;" class="mb-4">
          <vue-json-view :src="users" style="max-width: 700px; font-size: 12px; padding: 15px; border-radius: 10px;"
            :collapsed="true" name="Users" :theme="store.theme === 'dark' ? 'summerfruit' : 'summerfruit:inverted'"
            :enable-clipboard="false" />
        </div>
        <versions />
        <dependencies />
      </div>
    </v-main>
  </v-app>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.open-docs {
  width: 50px;
  height: 50px;
  background-size: cover;
}
</style>