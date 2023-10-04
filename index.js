document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const taskInput = document.getElementById('task');
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <form class="delete-form" action="/delete_task" method="POST">
                <input type="hidden" name="task_index" value="${taskList.childElementCount}">
                <button type="submit">Delete</button>
            </form>
        `;
        taskList.appendChild(listItem);
    }
});
