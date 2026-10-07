// Form element aur list containers ko exact IDs ke through grab karo
var todoForm   = document.getElementById("todo-form");
var todoList   = document.getElementById("todo-list");

// Form submission ko listen karo
todoForm.addEventListener("submit", function(e) {
    // Page ko reload hone se roko
    e.preventDefault();

    // Submit handler ke andar specific input elements ko grab karo
    var titleInput       = document.getElementById("todo-title");
    var descriptionInput = document.getElementById("todo-description");
    var dateInput        = document.getElementById("todo-date");
    var prioritySelect   = document.getElementById("todo-priority");

    // Values ko extract karo aur spacing ko trim karo
    var title = titleInput.value.trim();
    var desc  = descriptionInput.value.trim();
    var date  = dateInput.value;
    var priority = prioritySelect.value;

    // Agar "No tasks yet" message hai toh use remove karo
    var emptyMessage = todoList.querySelector(".empty-message");
    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Task block ke liye naya list item banao
    var li = document.createElement("li");
    li.className = "task-item"; // CSS me hook karne ke liye clean class name

    // Internal HTML elements ko manually build karo 
    var taskHTML = "";
    taskHTML += "<h3>" + title + "</h3>";
    taskHTML += "<p class='task-desc'>" + desc + "</p>";
    taskHTML += "<p class='task-meta'>";
    taskHTML += "<strong>Due:</strong> " + date + " | ";
    taskHTML += "<strong>Priority:</strong> " + priority;
    taskHTML += "</p>";
    
    // Item ko baad me remove karne ke liye simple button add karo
    taskHTML += "<button type='button' class='delete-btn' onclick='removeTask(this)'>Delete</button>";

    // Inside contents ko set karke list me append karo
    li.innerHTML = taskHTML;
    todoList.appendChild(li);

    // Fields ko poora reset karo taaki fresh task likh sake
   // todoForm.reset();
});

// Alag clear helper function jo explicit task block ko discard kare
function removeTask(buttonElement) 
{
    // Parent list item ko get karke wipe out karo
    var item = buttonElement.parentElement;
    item.remove();

    // Agar list bilkul empty hai, toh original message wapas daalo
    if (todoList.children.length === 0) {
        var emptyLi = document.createElement("li");
        emptyLi.className = "empty-message";
        emptyLi.textContent = "No tasks yet. Add your first task.";
        todoList.appendChild(emptyLi);
    }
}

// GitHub push commands:
// git add .
// git commit -m "Add TODO app"
// git branch -M main
// git remote add origin https://github.com/your-username/your-repo.git
// git push -u origin main
    