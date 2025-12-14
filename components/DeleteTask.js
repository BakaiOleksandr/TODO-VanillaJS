import {C1} from './ConsoleLog.js';
import {RenderTasks} from './RenderTasks.js';
import {CheckLocalStg} from './CheckLocalStg.js';
import {HideElements} from './HideElements.js';
export function DeleteTask(taskElement) {
  const delAllBTN = document.querySelector('.delete-all-btn');

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
  if (!CheckLocalStg()) HideElements(delAllBTN);
}
