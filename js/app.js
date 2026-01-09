const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-nuevo");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");
const vacioCom = document.querySelector(".vacioCom");
const pendientes = document.querySelector(".pendientes ul");
const completadas = document.querySelector(".completadas ul");
const ocultar = document.querySelector(".ocultar");

function actualizar() {
  vacio.style.display = pendientes.children.length === 0 ? "block" : "none";
  vacioCom.style.display = completadas.children.length === 0 ? "block" : "none";
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addBorrarBtn());
    li.appendChild(addCompleteBtn());
    
    pendientes.appendChild(li);

    input.value = "";

    actualizar();
  }
});

function addCompleteBtn() {
  const completeBtn = document.createElement("button");

  completeBtn.textContent = "O";
  completeBtn.className = "btn-completo";

  completeBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    completadas.appendChild(item);
    actualizar();
  });

  return completeBtn;
}

function addBorrarBtn() {
  const borrarBtn = document.createElement("button");

  borrarBtn.textContent = "X";
  borrarBtn.className = "btn-borrar";

  borrarBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    item.parentElement.removeChild(item);

    actualizar();
  });

  return borrarBtn;
}