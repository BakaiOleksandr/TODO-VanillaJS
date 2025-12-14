export function CheckLocalStg(){
  const localTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  if (localTasks.length > 0) return true;
};