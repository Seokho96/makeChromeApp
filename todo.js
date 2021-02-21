const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    toDoInput.placeholder = "What is your main focus for today?";
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    delBtn.classList.add("delBtn");
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    if(toDos.length > 2){
        toDoInput.placeholder = "Too many toDos!!"
        toDoInput.value = "";
        return false;
    }
    if(currentValue === ""){
        toDoInput.placeholder = "No Blank!!"
       return false;
    }
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDO() {
    const loadedToDoS = localStorage.getItem(TODOS_LS);
    //const currentUser = localStorage.getItem(USER_LS);
  
    if (loadedToDoS !== null) {
        const parseToDos = JSON.parse(loadedToDoS);
        parseToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    } else {

    }
}

function init() {
    loadToDO();
    toDoForm.addEventListener("submit", handleSubmit);

}

init();