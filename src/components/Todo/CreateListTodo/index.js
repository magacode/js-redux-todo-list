import createBtnDelete from "../createBtnDelete";
import createCheckbox from "../createCheckbox";
import './style.css'

export const createListTodo = (storeData, todoList) => {
  const todos = storeData.todos;

  return todos.forEach((task, index) => {
    const btnDelete = createBtnDelete(index);
    const checkBox = createCheckbox(index);

    const li = document.createElement('li');
    li.innerHTML = `<span>${task.title}</span>`;
    
    if (task.done) {
      li.classList.add('done');
      checkBox.checked = true;
    }
    
    li.appendChild(checkBox);
    li.appendChild(btnDelete);

    todoList.appendChild(li);
  });
}