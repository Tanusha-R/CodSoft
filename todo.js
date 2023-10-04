//Javascript
function deleteTask(taskId) {
    var taskElement = document.querySelector(`[data-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
    }
}

// Add event listeners to all delete buttons
var deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(function (button) {
    var deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            var taskId = event.target.getAttribute("data-id");
            deleteTask(taskId);
        });
    });
});

