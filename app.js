let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText = "Delete";
  item.appendChild(delBtn);

  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let parent = event.target.parentElement;
    parent.remove();
    console.log("deleted");
  }
});
