import store from "../../redux/store";
import { removeTodo } from "../../redux/actions";

const createBtnDelete = (index) => {
  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "X";
  btnDelete.setAttribute("type", "button");
  btnDelete.addEventListener("click", () => {
    store.dispatch(removeTodo(index));
  });

  return btnDelete;
}

export default createBtnDelete;