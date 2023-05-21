<script setup lang="ts">
import { TodoItem } from '@/types';
import { getDateLocalFormatString } from '../../date_utils'
const props = defineProps<{
  toDos: TodoItem,
}>()
const emits = defineEmits<{
  (e:'changeState', state: string, id: number):void,
}>()

</script>

<template>
  <div class="todo-item">
    <div class="flex flex-row align-items-center justify-content-between todo-item__field">
      <label class="field-name">
        Наименование
      </label>
      <label>
        {{ props.toDos.name }}
      </label>
    </div>
    <div class="flex flex-column todo-item__field">
      <label class="field-name">
        Описание
      </label>
      <Textarea v-model="props.toDos.description" disabled class="w-full max-h-5rem overflow-auto mt-2"
        :autoResize="true" />
    </div>
    <div class="todo-item__field flex flex-row align-items-center justify-content-between">
      <label class="field-name">
        Дата создания
      </label>
      <label>
        {{ getDateLocalFormatString(props.toDos.creationDate) }}
      </label>
    </div>
    <div class="flex align-items-center w-full justify-content-center">
      <Button v-if="props.toDos.state === 'CREATED'" @click="emits('changeState', 'IN_WORK', props.toDos.id)">
        Взять в работу
      </Button>
      <Button v-if="props.toDos.state === 'IN_WORK'" @click="emits('changeState', 'FINISHED', props.toDos.id)">
        Выполнить
      </Button>
    </div>
  </div>
</template>


<style scoped lang="scss">
.todo-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #C7C6C1;
  border-radius: 10px;
  padding: .5rem;
  margin: .5rem 0;

  .todo-item__field {
    padding: .3rem;
    display: flex;
  }
}

.field-name {
  font-weight: 600;
}</style>