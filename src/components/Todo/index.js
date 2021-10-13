import store from "../../redux/store";
import { createListTodo } from "./CreateListTodo";
import { addTask } from "./addTodo";

const input = document.querySelector(".todo-title");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todos-list");
const todoTotal = document.querySelector(".total-todos");

todoForm.addEventListener("submit", (e) => addTask(e, input));

const render = () => {
  const storeData = store.getState();
  todoTotal.innerHTML = storeData["totalTodo"];
  todoList.innerHTML = "";

  createListTodo(storeData, todoList);
}

render();
store.subscribe(render);