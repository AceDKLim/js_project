// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false;
let editID = '';
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement('article');

    } else if (value && editFlag) {
        console.log("editing");
    } else {
        displayAlert("please enter value", "danger");
    }
}
function displayAlert(text, action) {
    alert.textContant = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
        alert.textContant = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********