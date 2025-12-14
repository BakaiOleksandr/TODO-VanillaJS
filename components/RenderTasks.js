import {C1} from './ConsoleLog.js';
import {DeleteTask} from './DeleteTask.js';

export function RenderTasks(task, taskContainer) {
  const taskElement = document.createElement('div'); //create task element container
  taskElement.classList.add('task-text-container'); //add class
  taskElement.dataset.id = task.id;
  //create text element
  const textElement = document.createElement('p');
  textElement.classList.add('task-text');
  textElement.textContent = task.item;

  //images
  //create image List
  const imgList = document.createElement('img');
  imgList.classList.add('img');
  imgList.src = '../images/list.svg';
  //create delete img
  const deleteTaskIMG = document.createElement('img');
  deleteTaskIMG.classList.add('img', 'delete');
  deleteTaskIMG.src = '../images/trash.svg';
  //set place
  // taskElement.prepend(imgList);
  taskElement.append(imgList, textElement, deleteTaskIMG);
  taskContainer.appendChild(taskElement);
  //add eventListener
  deleteTaskIMG.addEventListener('click', () => DeleteTask(taskElement));
}
