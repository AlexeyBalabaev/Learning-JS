"use strict";

{
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result);   // 1
    return result  * 2;
  }).then(function(result) {
    alert(result);   // 2
    return result * 2;
  }).then(function(result) {
    alert(result);   // 4
    return result * 2;
  });
}

/* ----- */
{
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });

  promise.then(function(result) {
    alert(result);   // 1
    return result * 2;
  });

  promise.then(function(result) {
    alert(result);   // 1
    return result * 2;
  });

  promise.then(function(result) {
    alert(result);   // 1
    return result * 2;
  });
}

/* ----- */
{
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result);   // 1

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });

  }).then(function(result) {
    alert(result);   // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });

  }).then(function(result) {
    alert(result);   // 4
  });
}

/* ----- */
{
  loadScript("/files/one.js")
    .then(function(script) {
      return loadScript("/files/two.js");
    })
    .then(function(script) {
      return loadScript("/files/three.js");
    })
    .then(function(script) {
      one();
      two();
      three();
    });
}

// the same
{
  loadScript("/files/one.js")
    .then(script => loadScript("/files/two.js"))
    .then(script => loadScript("/files/three.js"))
    .then(script => {
      one();
      two();
      three();
    })
}

/* ----- */
{
  fetch('/files/user.json')
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      alert(text);
    });
}

// the same
{
  fetch('/files/user.json')
    .then(response => response.json())
    .then(user => alert( user.name ));
}

/* ----- */
{
  fetch('/files/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => {
      let img = document.createElement('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);

      setTimeout(() => img.remove(), 3000);
    })
}

/* ----- */
{
  fetch('/files/user.json')
    .then(response => response())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function(resolve, reject) {
      let img = document.createElementent('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);

      setTimeout(() => {
        img.remove();
        resolve(githubUser);
      }, 3000);
    }))
    .then(githubUser => alert(`Finished show ${githubUser.name}`));
}

/* ----- */
{
  function loadJson(url) {
    return fetch(url)
      .then(response => responce.json());
  }

  function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json());
  }

  function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
      let img = document.createElementent('img');
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);

      setTimeout(() => {
        img.remove();
        resolve(githubUser);
      }, 3000);
    });
  }

  loadJson('/files/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Avatar show ${githubUser.name}`));
    // ...
}