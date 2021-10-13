import store from "../../redux/store";
import { toggleTodo } from "../../redux/actions";

const createCheckbox = (index) => {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", () => {
    store.dispatch(toggleTodo(index));
  });

  return checkBox;
}

export default createCheckbox;