const display = document.getElementById("form-display");
const addItem = document.getElementById("add-btn");
const deleteAllItem = document.getElementById("dlt-btn");
const list = document.getElementById("note-list");
const form = document.getElementById("note-list");
eventlisteners();
function eventlisteners() {
    addItem.addEventListener("click", addNote);

    form.addEventListener("click", deleteItem);

    deleteAllItem.addEventListener("click", deleteAllItems);
}
function addNote(a) {
    if (display.value === "") {
        alert("bu kısım boş bırakılamaz");
        display.value = "";
        return;
    } else;
    const li = document.createElement("li");
    li.className = "notes";
    li.appendChild(document.createTextNode(display.value));
    const i = document.createElement("i");
    i.className = "fa-solid fa-xmark";
    i.id = "dlt-btn2";
    li.appendChild(i);
    list.appendChild(li);
    display.value = "";

}

function deleteItem(e) {
    console.log(e.target)
    if (e.target.id === "dlt-btn2") {
        e.target.parentElement.remove();
    }
}

function deleteAllItems() {
    form.innerHTML = " "
}




