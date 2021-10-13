import store from "../../redux/store";
import { addTodo } from "../../redux/actions";

export const addTask = (e, input) => {
  e.preventDefault();

  if (input.value.length < 1) return;

  store.dispatch(addTodo(input.value));

  input.value = "";
}