//variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//event-listener
addTask.addEventListener("click", function () {
  if (inputTask.value === "") {
    alert("Please enter a task");
    return;
  }

  let task = document.createElement("div");
  task.classList.add("task");

  let listItem = document.createElement("li");
  listItem.innerText = `${inputTask.value}`;
  task.appendChild(listItem);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  taskContainer.appendChild(task); //tüm hepsi bir task divine bağlandı en son o html de olan tascontainer a bağlandı.
  inputTask.value = ""; //her yazımdan sonra içinin silinmesi için.

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove(); //target bize kişinin ikona tıkladığını söylüyor,ikonun parentı button elementi button elementinin parentı da task o yüzden iki kez parent koyup remove yaptık ama direk aşağıdaki gibi de task.remove ile yani this ile kaldırabilirdik.
  });

  // Add event listeners for check and delete buttons (burada checkede tıklayınca sadece içinin turuncu olmasını denedim şimdi asıl istenen efekti yapıcaz o yüzden yorumlıcam)
  //checkButton.addEventListener("click", function () {
  //this.classList.toggle("completed");
  //});

  //deleteButton.addEventListener("click", function () //{
  //task.remove();
  //});
});
