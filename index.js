//imports
import {C1} from './components/ConsoleLog.js'; //console.log alias
import {AddToLocal} from './components/AddToLocal.js'; //necessarily '.js'
import {LoadTasks} from './components/LoadTasks.js';
import {ShowElements} from './components/ShowElements.js';
import {DeleteAllBTN} from './components/DeleteAllBTN.js';
import {RenderTasks} from './components/RenderTasks.js';
import {CheckLocalStg} from './components/CheckLocalStg.js';
//localStorage Create
//setLocalStorage

const inputType = document.getElementsByTagName('input');
const taskContainer = document.querySelector('.task-container');
//submit btn
const submBtn = document.querySelector('.sub-btn');
//delete-all-btn
const delAllBTN = document.querySelector('.delete-all-btn');
//LOAD TASKS
LoadTasks(taskContainer);
//check localstorage

if (CheckLocalStg()) {
  ShowElements(delAllBTN);
  DeleteAllBTN(delAllBTN);
}

//Submit
function SubmitBTN(event) {
  //preventDefault
  event.preventDefault();
  //inputValue
  const inputValue = inputType[0].value.trim();
  //send value to function AddToLocal
  if (!inputValue) return;
  const newItem = {id: Date.now(), item: inputValue};
  AddToLocal(inputValue);
  RenderTasks(newItem, taskContainer);
  //clear the input value
  inputType[0].value = '';
  //check again localStorage
  if (CheckLocalStg()) {
    ShowElements(delAllBTN);
    DeleteAllBTN(delAllBTN);
  }
}

//eventListener
submBtn.addEventListener('click', SubmitBTN);
