<script setup lang="ts">
import { TodoItem } from '@/types';
import { onMounted, ref } from 'vue';
import { getCreatedList, createNewTaks, getInActiveList, getDoneList, updateTaskState } from '../http';
import TaskComponent from './Task/TaskComponent.vue';
const createdList = ref<TodoItem[]>()
const activeList = ref<TodoItem[]>()
const finishedList = ref<TodoItem[]>()

onMounted(async() => {
  const promise = Promise.all([
    await getNewTasks(),
    await getActiveTasks(),
    await getFinishedTasks()
  ])
})
async function handleAddButton() {
  await createNewTaks()
  await getNewTasks()
}
async function getNewTasks() {
  createdList.value = await getCreatedList()
}
async function getActiveTasks() {
  activeList.value = await getInActiveList()
}
async function getFinishedTasks() {
  finishedList.value = await getDoneList()
}
async function changeTaskState(state: string, id: number) {
  console.log('statee')
  try{
    const resp = await updateTaskState(id,state )
    if (state === 'IN_WORK') {
      await getActiveTasks()
      await getNewTasks()
    }
    else if (state === 'FINISHED') {
      await getFinishedTasks()
      await getActiveTasks()
    }
  }catch(err) {
    console.log(err)
  }
    
}
</script>

<template>
  <div class="flex flex-row h-full">
    <div class="flex flex-column p-2 w-4 overflow-auto">
      <div class="flex flex-row justify-content-between align-items-center">
        <label class="title">Созданные задачи</label>
        <Button @click="handleAddButton">Добавить</Button>
      </div>
      <div v-if="createdList" v-for="elem in createdList" :key="elem.id">
        <TaskComponent :toDos="elem" @changeState="changeTaskState"/>
      </div>
    </div>
    <div class="flex flex-column p-1 w-4">
      <label class="title">Активные задачи</label>
      <div v-if="activeList" v-for="elem in activeList" :key="elem.id">
        <TaskComponent :toDos="elem" @changeState="changeTaskState"/>
      </div>
    </div>
    <div class="flex flex-column p-1 w-4">
      <label class="title">Завершенные задачи</label>
      <div v-if="finishedList" v-for="elem in finishedList" :key="elem.id">
        <TaskComponent :toDos="elem"/>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.title {
  font-size: 20px;
  font-weight: 600;
  color: #05386b;
}
</style>