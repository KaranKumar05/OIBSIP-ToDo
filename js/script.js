document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("todo-form");
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const todosContainer = document.getElementById("todos");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = titleInput.value;
        const description = descriptionInput.value;

        // if (title.trim() !== "" && description.trim() !== "") {
        if (title.trim() !== "") {
            const todoItem = document.createElement("div");
            todoItem.classList.add("todo");
            todoItem.innerHTML = `
                <div class="todoCard">
                    <div>
                        <p>${title}</p>
                        <p>${description}</p>
                    </div>
                    <button class="delete-btn"><i class="bi bi-x-lg"></i></button>
                </div>
            `;

            todosContainer.appendChild(todoItem);

            // Clear input fields
            titleInput.value = "";
            descriptionInput.value = "";

            // Add delete event listener
            const deleteButton = todoItem.querySelector(".delete-btn");
            deleteButton.addEventListener("click", function () {
                todosContainer.removeChild(todoItem);
            });
        }
    });
});
