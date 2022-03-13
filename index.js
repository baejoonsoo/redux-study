const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = 0;

const updateCount = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateCount();
};

const handleMinus = () => {
  count -= 1;
  updateCount();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
