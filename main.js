// Добавление новой задачи
var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");

// Прослушиваем конпку "Добавить" по id submit
form.addEventListener("submit", addItem);
//  Удаление эленета 
itemsList.addEventListener("click", removeItem);
// Фильтрация списка дел, прослушка ввода
filter.addEventListener("keyup" , filterItem);

// Добавление задачи в список
function addItem (event){
//Отменяем отправку (перезагрузку) страницы
    event.preventDefault();
// Находим Инпут
    var newItemInput = document.getElementById("newItemText");
// Получаем значение из Инпута
    var newItemText = newItemInput.value;

// Создаем новый елемент для новой задачи
    var newElement = document.createElement("li");
    newElement.className = "list-group-item";

// Добавляем текст в новый элемнет
    var newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);
// Создаем кнопку
    var deleteBtn = document.createElement("button");
// Добавляем текст в кнопку
    deleteBtn.appendChild(document.createTextNode("Удалить"));
// Добавляем CSS класс в кнопку
    deleteBtn.className = "btn btn-light btn-sm float-right";
// Добавляем datd атрибут
    deleteBtn.dataset.action = "delete";
// Помещаем кнопку внутрь тега li
    newElement.appendChild(deleteBtn);
// Добавляем новую задачу в список
    items.prepend(newElement);
// очистим поле для новой задачи
    newItemInput.value = "";
} 

// Удаление задачи из списка
function removeItem(event){
    if (
        // Сравниваем атрибут 
        event.target.getAttribute("data-action") == "delete"
    ) {
        // Выводим окно 
        if ( confirm("Удалить задачу ?")) {
            event.target.parentNode.remove();
        }
    }
}

// Фильтрация списка 
function filterItem(event) {
    // Получаем фрузу для поиска и переводим ее в нижний регистр
    var searchedText = event.target.value.toLowerCase();

    // Получаем список всех задач
    var items = itemsList.querySelectorAll("li");

    // Перебераем циклом все найденные теги li с задачами /
    items.forEach(function (item) {
    // Получаем текст задачи из списка и переводим в нижний регистр
        var itemText = item.firstChild.textContent.toLocaleLowerCase();

        // Проверяем значение искомой подстроки в текст задачи
        if (itemText.indexOf(searchedText) != -1) {
        // Если вхождение есть то показываем элемент с задачей, если нет скрываем
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
