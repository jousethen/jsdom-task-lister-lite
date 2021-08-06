document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById("create-task-form").addEventListener('submit', function (event) {
    let list = document.getElementById("tasks");
    let task = document.createElement("li");

    task.innerHTML = document.getElementById("new-task-description").value;
    list.appendChild(task);
    event.preventDefault();
  });

});
