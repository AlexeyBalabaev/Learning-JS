"use strict";

{
  fetch('https://no-such-server.blabla')   // error
    .then(responce => responce.json())
    .catch(err => alert(err))   // TypeError: failed to fetch
}

/* ----- */
{
  fetch('/files.user.json')
    .then(response => responce.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(responce => responce.json())
    .then(githubUser => new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);

      setTimeout(() => {
        img.remove();
        resolve(githubUser);
      }, 3000);
    }))
    .catch(error => alert(error.message));
}

/* ----- */
{
  new Promise((resolce, reject) => {
    throw new Error("Error!");
  }).catch(alert);   // Error: Error!
}

// the same
{
  new Promise((resolve, reject) => {
    reject(new Error("Error!"));
  }).catch(alert);   // Error: Error!
}

/* ----- */
{
  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    throw new Error("Error!");
  }).catch(alert);   // Error: Error!
}

/* ----- */
{
  new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    blabla();
  }).catch(alert);   // ReferenceError: blabla is not defined
}

/* ----- */
{
  // the execution: catch -> then
  new Promise((resolve, reject) => {
    throw new Error("Error!");
  }).catch(function(error) {
    alert("Error processed, continue to work");
  }).then(() => alert("Managment will movie to the next then"));
}