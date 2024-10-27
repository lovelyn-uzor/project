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
    listItem.innerHTML=`
    <span onclick="togglecomplete(this)">${taskValue}</span>
    <button class="remove-btn" onclick="removeTask(this)">Remove</button>`;

    // append the new task to the taskList
    taskList.appendChild(listItem);

    // clear the input field after the task is added
    taskInput.value="";

}
// function to toggle a task as complete or incomplete
function togglecomplete(task){
    // add or remove 'completed'class
    task.parentElement.classList.toggle("completed");
}
// function to remove a task from the list
function removeTask(task){
    // remove the entire list item
    task.parentElement.remove();
}
