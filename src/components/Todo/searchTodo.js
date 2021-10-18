import store from "../../redux/store";
import { searchTodo } from "../../redux/actions";

export const searchTask = (e) => {
  store.dispatch(searchTodo(e.target.value));
}