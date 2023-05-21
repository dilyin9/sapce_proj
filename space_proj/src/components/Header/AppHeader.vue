<script setup lang="ts">
import { ref } from 'vue';
// const mode = ref(true)

const props = defineProps<{
  modelValue: boolean,
}>()
const emits = defineEmits<{
  (e:'changeState', state: string, id: number):void,
  (e:'update:modelValue', payload: boolean): void
}>()
</script>

<template>
  <div class="app-header">
    <label class="app-header__label">
      Simple Task Manager
    </label>
    <ToggleButton v-model="props.modelValue" @change="emits('update:modelValue', !props.modelValue)" onLabel="Основной вид" offLabel="Вид с фильтрами"/>
  </div>
</template>

<style scoped lang="scss">
.app-header__label {
  color: #e27d60;
  font-weight: 600;
  font-size: 25px;
}
</style>