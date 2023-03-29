<script setup lang="ts">
const counter = ref(0);
const chromiumVersion = ref("");
const electronVersion = ref("");
const nodeVersion = ref("");

async function getVersions() {
  counter.value++;
  chromiumVersion.value = await window.api.versions.getChromiumVersion();
  electronVersion.value = await window.api.versions.getElectronVersion();
  nodeVersion.value = await window.api.versions.getNodeVersion();
}
</script>
<template>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
    <v-btn color="info" size="small" @click="getVersions">Get Versions (Clicked {{ counter }} times)</v-btn>
    <div id="versions-container">
      <div class="version-container">
        <img class="logo" src="../assets/chromium-logo.png" />
        <div>Chromium version: {{ chromiumVersion }}</div>
      </div>
      <div class="version-container">
        <img class="logo" src="/electron.svg" />
        <div>Electron version: {{ electronVersion }}</div>
      </div>
      <div class="version-container">
        <img class="logo" src="../assets/nodejs-logo.png" />
        <div>Node JS version: {{ nodeVersion }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  width: 200px;
  height: auto;
}

.logo+div {
  font-size: 14px;
  font-weight: 500;
}

#versions-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 0 10px 0;
}

.version-container {
  max-height: 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
</style>