// Array to store the user's tasks
let myTasks = [];

// Create a new unordered list
let taskList = document.createElement("ul");

// Give the list an ID
taskList.id = "user-tasks";

// Add the list to the task-list div
document.getElementById("task-list").appendChild(taskList);


// Add a task when the Add Task button is clicked
document.getElementById("add-task").addEventListener("click", function () {

    // Get the task entered by the user
    let taskName = document.getElementById("task-name").value;

    // Add the task to the array
    myTasks.push(taskName);

    // Create a new list item
    let listItem = document.createElement("li");

    // Put the task text inside the list item
    listItem.innerHTML = taskName;

    // Add the list item to the unordered list
    taskList.appendChild(listItem);
});