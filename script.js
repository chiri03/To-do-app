const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-cotainer");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    saveData();
  }
};

for (let index = 0; index < wishlist.length; index++) {
  let li = document.createElement("li");
  li.innerHTML = wishlist[index];
  listContainer.appendChild(li);

  let closeButton = document.createElement("span");
  closeButton.innerHTML = "\u00d7";
  li.appendChild(closeButton);
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
