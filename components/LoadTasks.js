import {C1} from './ConsoleLog.js';
import {RenderTasks} from './RenderTasks.js';
export function LoadTasks(taskContainer) {
  if (!localStorage.getItem('tasks')) return;
  const allLocalTasks = JSON.parse(localStorage.getItem('tasks'));
  allLocalTasks.forEach((task) => {
    RenderTasks(task, taskContainer);
  });
}
