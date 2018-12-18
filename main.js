'use strict';

const input = document.querySelector('#input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
console.log(button);
function apiCall(event) {
    event.preventDefault();
    let userName = input.value;
    console.log(userName);
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            let userName = data.name;
            console.log('username',userName);
            let nameCharacters = userName.split("");
            list.innerHTML = "";
            for (let i = 0; i < userName.length; i++) {
                if (nameCharacters[i] !== "") {
                    list.innerHTML += `<li class="item"> ${nameCharacters[i]} </li>`;
                }
                else if (nameCharacters === "") { }
            }
        })
}

button.addEventListener('click', apiCall);