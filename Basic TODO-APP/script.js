// Get form and task list
var form = document.getElementById("todo-form");
var list = document.getElementById("todo-list");

// Show saved tasks when page loads
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

for (var i = 0; i < tasks.length; i++) {
    showTask(tasks[i]);
}

// Add new task
form.addEventListener("submit", function(e) {

    e.preventDefault();

    var title = document.getElementById("todo-title").value;
    var description = document.getElementById("todo-description").value;
    var date = document.getElementById("todo-date").value;
    var priority = document.getElementById("todo-priority").value;

    // Create task
    var task = {
        title: title,
        description: description,
        date: date,
        priority: priority
    };

    // Add task to array
    tasks.push(task);

    // Save tasks
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Show task
    showTask(task);

    // Clear form
    form.reset();
});

// Function to show task
function showTask(task) {

    var li = document.createElement("li");

    li.className = "task-item";

    li.innerHTML =
        "<h3>" + task.title + "</h3>" +
        "<p>" + task.description + "</p>" +
        "<p>Due: " + task.date + "</p>" +
        "<p>Priority: " + task.priority + "</p>" +
        "<button onclick='deleteTask(this)'>Delete</button>";

    list.appendChild(li);
}

// Delete task
function deleteTask(button) {

    var task = button.parentElement;

    // Remove from page
    task.remove();
    
    // Get task title
    var title = task.querySelector("h3").innerText;

    // Find and remove task from array
    for (var i = 0; i < tasks.length; i++) {

        if (tasks[i].title == title) {
            tasks.splice(i, 1);
            break;
        }
    }

    // Save updated tasks
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
