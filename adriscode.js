'use strict';

const baseGithubURL = 'https://api.github.com/users/';

const name = document.querySelector('.userName');
const button = document.querySelector('.btn');
const list = document.querySelector('.list');

function getUserAndRenderIt(event) {
  event.preventDefault();

  const userName = name.value;
  const githubUserURL = buildGithubUserURL(userName);

  fetch(githubUserURL)
    .then(response => response.json())
    .then(user => {
      const firstName = getFirstNameOnly(user.name);    
      emptyListElement(list);
      renderUserFirstNameInsideList(firstName);
    });
}

function buildGithubUserURL(userName) {  
  return `${baseGithubURL}${userName}`;
}

function getFirstNameOnly(string) {
  return string.split(' ')[0];
}

function stringToCharArray(string) {
  return string.split('');
}

function emptyListElement(element) {
  element.innerHTML = '';
}

function renderUserFirstNameInsideList(firstName) {
  const firstNameCharArray = stringToCharArray(firstName);

  for (let i = 0; i < firstNameCharArray.length; i++) {
    appendCharToList(firstNameCharArray[i]);
  }
}

function appendCharToList(char) {
  list.innerHTML += `<li class="item">${char}</li>`;
}

button.addEventListener('click', getUserAndRenderIt);