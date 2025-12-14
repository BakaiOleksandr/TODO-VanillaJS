import {C1} from './ConsoleLog.js';
import { RenderTasks } from './RenderTasks.js';
export function DeleteTask(taskElement) {
  //get id from dataset of element
  const taskID = Number(taskElement.dataset.id);
  //delete from DOM
  taskElement.remove();
  //get local storage
  const localST = JSON.parse(localStorage.getItem('tasks'));
  //filter local storage
  const filteredLSrg = localST.filter((task) => task.id !== taskID);
  //save localStorage
  localStorage.setItem('tasks', JSON.stringify(filteredLSrg));
  //render again
//   RenderTasks()
//   renderAlltasks(taskContainer,filteredLSrg);
}
