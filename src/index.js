import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reduser = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reduser);

store.subscribe(() => console.log(store.getState()));

const AddToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (e) => {
  console.dir(e.target);
};

const paintToDo = () => {
  const toDos = store.getState();

  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;

    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();

  const toDo = input.value;
  input.value = "";
  AddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
