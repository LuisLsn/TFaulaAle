document.addEventListener("DOMContentLoaded", async () => {
  const toDos = [
    "Estudar HTML semântico",
    "Praticar CSS básico",
    "Revisar seletores CSS",
    "Montar página com Flexbox",
    "Adicionar responsividade com media queries",
    "Estudar JavaScript básico",
    "Praticar manipulação do DOM",
    "Implementar evento de clique em botão",
    "Criar lista dinâmica com JS",
    "Estudar funções em JavaScript",
    "Aprender sobre arrays e objetos",
    "Praticar laços (for, while)",
    "Estudar fetch() e requisições HTTP",
    "Consumir API simples (ex: Pokédex)",
    "Criar mini-projeto integrando tudo"
  ];

  const listWrapper = document.getElementById("list-wrapper");
  const ul = document.createElement("ul");
  listWrapper.appendChild(ul);

  function addListItem(text) {
    const li = document.createElement("li");

    li.textContent = text;

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "deletar";
    btnDelete.style.marginLeft = "10px";

    li.appendChild(btnDelete);

    btnDelete.addEventListener("click", () => {
      ul.removeChild(li);
    });

    ul.appendChild(li);
  }

  toDos.forEach(todo => addListItem(todo));

  const buttonAdd = document.querySelector(".btn");
  const inputTask = document.querySelector("input");

  buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    const taskText = inputTask.value.trim();
    if (taskText !== "") {
      addListItem(taskText);
      inputTask.value = "";
      inputTask.focus();
    }
  });
});
