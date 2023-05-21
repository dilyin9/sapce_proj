<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { TodoItem } from '@/types';
import { getList } from '../../http';
import Element from './Element.vue';
const stateOptions = [
  {
    name: 'CREATED',
    value: 'Создано'
  },
  {
    name: 'IN_WORK',
    value: 'В работе'
  },
  {
    name: 'FINISHED',
    value: 'Завершено'
  }
]
const filterName = ref<string>('')
const activeState = ref<{ name: string, value: string }>()
const currentList = ref<TodoItem[]>([])
const filteredList = computed(() => {
  const filtered = [...currentList.value]
  if (activeState.value && !filterName.value) {
    return filtered.filter(el =>
      el.state === activeState.value?.name
    )
  }
  else if (!activeState.value && filterName.value) {
    return filtered.filter(el =>
      el.name.toLowerCase().includes(filterName.value.toLowerCase())
    )
  }
  else if (activeState.value && filterName.value) {
    return filtered.filter(el =>
      el.name.toLowerCase().includes(filterName.value.toLowerCase()) && el.state === activeState.value?.name
    )
  }
  return filtered
})

onMounted(async () => {
  currentList.value = await getList()
})
</script>

<template>
  <div class="flex flex-column">
    <div class="flex flex-row  p-2">
      <div class="flex flex-row align-items-center">
        <label class="mr-3">Фильтр по статусу</label>
        <Dropdown v-model="activeState" :options="stateOptions" optionLabel="value" placeholder="Выберите статус" showClear />
      </div>
      <div class="flex flex-row align-items-center ml-3">
        <label class="mr-3">Фильтр по Наименованию</label>
        <InputText v-model="filterName" type="text" placeholder="Введите наименование"/>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 ml-3">
      <div class="flex flex-wrap" v-for="elem in filteredList" :key="elem.id">
        <Element :toDos="elem" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>