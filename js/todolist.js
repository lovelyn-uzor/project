// function to add a task to the list
function addTask(){
    // get input field value
    console.log("clicked")
    const taskInput=document.getElementById("taskInput");

    // trim extra spaces
     const taskValue=taskInput.value.trim();

    //  check if input is not empty
    if (taskValue===""){
        alert("please enter task!");
        return;
    }
    // get the list Element
    const taskList=document.getElementById("taskList");

    // create a new list item
    const listItem=document.createElement("li");
    // listItem.innerHTML=`
    // <span onclick="togglecomplete(this)">${taskValue}</span>`
    const span = document.createElement("span")
    span.addEventListener("click", togglecomplete(this))
    span.innerText = taskValue

    const edit = document.createElement("button")
    edit.addEventListener("click", editTask(this))
    edit.innerText = "Edit"

    const remove = document.createElement("button")
    remove.addEventListener("click", removeTask(this))
    remove.innerText = "Delete"

    // append the new task to the taskList
    listItem.appendChild(span);
    listItem.appendChild(edit);
    listItem.appendChild(remove);
    taskList.appendChild(listItem);
   


    // clear the input field after the task is added
    taskInput.value="";

}
// function to toggle a task as complete or incomplete
function togglecomplete(task){
    // add or remove 'completed'class
    task.parentElement.classList.toggle("completed");
}
// function to edit an existing task
function editTask(button){
    const listItem=button.parentElement;//reference to the task item element
    const taskValue = listItem.querySelector('span');//reference to the tasks text
    const newText=prompt("Edit task:",taskValue.innerText);//prompt the user for a new task description
    //if user enters new text, update the task text
    if(newText){
        taskValue.innerText=newText;
    }
}

// function to remove a task from the list
function removeTask(task){
    // remove the entire list item
    task.parentElement.remove();
}
