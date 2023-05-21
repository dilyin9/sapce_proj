<script setup lang="ts">
import AppHeader from './components/Header/AppHeader.vue';
import Taskboard from './components/Taskboard.vue';
import FiltrationComponent from './components/FiltrationComponent/FiltrationComponent.vue';
import { ref } from 'vue';
const view = ref(true)
</script>

<template>
  <AppHeader v-model="view" />
  <div class="full-container w-full">
    <Taskboard v-if="view" />
    <FiltrationComponent v-else />
  </div>
</template>

<style scoped lang="scss">
@import './scss/variables.scss';
.full-container {
  height: $main-header;
}
.half-container {
  height: 50%;
}
</style>
