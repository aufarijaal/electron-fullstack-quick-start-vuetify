<script setup lang="ts">
import pkg from "../../package.json";

const deps = reactive<string[]>([]);
const devDeps = reactive<string[]>([]);

function showDeps() {
  deps.length = 0;
  devDeps.length = 0;

  for (const [key, value] of Object.entries(pkg.dependencies)) {
    deps.push(`${key}: ${value}`);
  }
  for (const [key, value] of Object.entries(pkg.devDependencies)) {
    devDeps.push(`${key}: ${value}`);
  }
}
</script>
<template>
  <div class="mt-4"
    style="display: flex; justify-content: center; flex-direction: column; align-items: center; gap: 10px;">
    <v-btn color="success" prepend-icon="mdi-graph" size="small" @click="showDeps">Show Dependencies</v-btn>

    <div style="display: flex; gap: 20px;">
      <v-card style="height: max-content;">
        <v-card-title>Dependencies</v-card-title>
        <v-card-text>
          <div v-for="dep in deps">{{ dep }}</div>
        </v-card-text>
      </v-card>
      <v-card style="height: max-content;">
        <v-card-title>Dev Dependencies</v-card-title>
        <v-card-text>
          <div v-for="devDep in devDeps">{{ devDep }}</div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
