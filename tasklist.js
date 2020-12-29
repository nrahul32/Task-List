// Wait for the page to load
document.addEventListener("DOMContentLoaded", function(){

// Locators
const taskElement = document.querySelector("#task");
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
    
    // Clear the value in textbox
    taskElement.value = "";
    
    // stops form from submitting
    return false;
}
    
})
