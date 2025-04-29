const inputBoxEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");

function addTask() {
  if (inputBoxEl.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxEl.value;
    listContainerEl.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBoxEl.value = "";
  saveDate();
}

listContainerEl.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

const saveDate = () => {
  localStorage.setItem("data", listContainerEl.innerHTML);
};

const showTask = () => {
  listContainerEl.innerHTML = localStorage.getItem("data");
};
