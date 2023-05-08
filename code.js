// Selectors

let inputFiled = document.querySelector("#box");
let inputBtn = document.querySelector('.button');
let listConatiner = document.querySelector(".list");

// Adding The Task To The List

inputBtn.onclick = function () {
    if (inputFiled.value === '') {
        alert("You Did Not Your Task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputFiled.value;
        listConatiner.appendChild(li);
        let spanIcon = document.createElement("span");
        spanIcon.classList.add("iconofX");
        spanIcon.innerHTML = "\u00d7";
        li.appendChild(spanIcon);
    }
    inputFiled.value = '';
    Store();
}

// Check & Delete The Task

listConatiner.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        Store();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        Store();
    }
}, false)

// Storing The Tasks 

function Store() {
    localStorage.setItem("Task", listConatiner.innerHTML);
}

function Show() {
    listConatiner.innerHTML = localStorage.getItem('Task');
}

Show();