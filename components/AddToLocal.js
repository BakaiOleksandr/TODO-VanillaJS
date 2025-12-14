import {C1} from './ConsoleLog.js';
export function AddToLocal(inputValue) {
  //create local storage
  const localTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  //add task to localStorage
  localTasks.push({id: Date.now(), item: inputValue});
  //save local Storage
  localStorage.setItem('tasks', JSON.stringify(localTasks));
}
