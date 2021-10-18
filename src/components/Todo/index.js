import store from "../../redux/store";
import { createListTodo } from "./CreateListTodo";
import { addTask } from "./addTodo";
import {searchTask} from "./searchTodo";

const input = document.querySelector(".todo-title");
const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todos-list");
const todoTotal = document.querySelector(".total-todos");
const todoSearch = document.querySelector("#search");

todoForm.addEventListener("submit", (e) => addTask(e, input));
todoSearch.addEventListener("input", (e) => searchTask(e));

const render = () => {
  const storeData = store.getState();
  todoTotal.innerHTML = storeData["totalTodo"];
  todoList.innerHTML = "";

  createListTodo(storeData, todoList);
}

render();
store.subscribe(render);