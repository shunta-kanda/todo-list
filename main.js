'use strict';

{
  const taskValue = document.getElementsByClassName('task_value')[0];
  const taskSubmit = document.getElementsByClassName('task_submit')[0];
  const taskList = document.getElementsByClassName('task_list')[0];

  const addTasks = (task) => {
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      DeleteTasks(deleteButton);
    });
  };

  const DeleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
  };

  taskSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
  });

}