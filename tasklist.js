// Wait for the page to load
document.addEventListener("DOMContentLoaded", function(){

// Locators
const taskElement = document.querySelector("#task");
const multipleTasksElement = document.querySelector("#multiple_tasks");
const formElement = document.querySelector("form");
const taskListElement = document.querySelector("#tasks");

function addElementToList(task){
    if(task != ""){
       let li = document.createElement("li");
        li.innerHTML = task;
        tasks.append(li); 
    }
}

formElement.onsubmit = ()=>{
    let task = taskElement.value;
    addElementToList(task);
    
    let multipleTasks = multipleTasksElement.value.split(", ");
    multipleTasks.forEach((t)=>{addElementToList(t)})
    
    // Clear the value in textboxes
    taskElement.value = "";
    multipleTasksElement.value ="";
    
    // stops form from submitting
    return false;
}
})
