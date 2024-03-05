const inputList = document.getElementById("input-list")
const taskList = document.getElementById("task-list")

function addlist() {
if(inputList.value == ""){
    alert("please write a task..")
}
let li = document.createElement("li");
li.innerHTML = inputList.value;
taskList.appendChild(li);
inputList.value= ""

let span = document.createElement("span");
span.innerHTML = "x";
li.appendChild(span);

saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    } else if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    }
    saveData();
})


function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}

showData();