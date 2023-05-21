import axios from "axios";
import { TodoItem } from '@/types';
const env = 'http://localhost:3001'
export async function getList() {
  try {
    const res = await axios.get(`${env}/todos`)
    return res.data
  }catch(e) {
    console.log(e)
  }
}
export async function getCreatedList() {
  try {
    const res = await axios.get(`${env}/todos`)
    if (res.data) {
      return res.data.filter((el: { state: string; })  => el.state === "CREATED")
    }
  }catch(e) {
    console.log(e)
  }
}
export async function getInActiveList() {
  try {
    const res = await axios.get(`${env}/todos`)
    if (res.data) {
      return res.data.filter((el: { state: string; }) => el.state === "IN_WORK")
    }
  }catch(e) {
    console.log(e)
  }
}
export async function getDoneList() {
  try {
    const res = await axios.get(`${env}/todos`)
    if (res.data) {
      return res.data.filter((el: { state: string; }) => el.state === "FINISHED")
    }
  }catch(e) {
    console.log(e)
  }
}

export async function createNewTaks() {
  try {
    const newRandom = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    const res = await axios.post(`${env}/todos`, {
      name:`Новое задание - ${newRandom}`,
      state: 'CREATED',
      description:`Новое описание ${newRandom}`,
      creationDate: new Date()
    })
    return res
  }catch(error) {
    console.log(e)
  }
}
export async function updateTaskState(taskId: number, newState: string) {
  try{
    const res = await axios.patch(`${env}/todos/${taskId}`, {
      state: newState
    })
    return res
  }catch(err) {
    console.log(err)
  }
}