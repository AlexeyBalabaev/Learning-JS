"use strict";

async function f() {
  return 1;
}

/* ----- */
{
  async function f() {
    return 1;
  }

  f().then(alert);   // 1
}

/* ----- */
{
  async function f() {
    return Promise.resolve(1);
  }

  f().then(alert);    // 1
}

/* ----- */
{
  async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("completed!"), 1000)
    });

    let result = await promise;

    alert(result);   // completed!
  }

  f();
}

/* ----- */
{
  function f() {
    let promise = Promise.resolve(1);
    // let result = await promise;     SuntaxError
  }
}

/* ----- */
{
  async function showAvatar() {

    // JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    //information about user from github
    let githubResponse = await fetch('https://api.github.com/users/${user.name}');
    let githubUser = await githubResponse.json();

    // show
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
  
  }

  showAvatar();

}

/* ----- */
{

  // it's bad - SyntaxError on the high level
  /*
  let response = await fetch('/article/promise-chaining/use.json');
  let user = await response.json();
  */

  // need so - use the anonim function
  /*
  (async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    ...
  })();
  */

}

/* ----- */
{
  
  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // complete resolve with value this.num * 2 after 1000ms
      setTimeout(() => resolve(this.num *2), 1000);
    }
  };

  async function f() {
    // the code will wait 1 sec,
    // and after the value wil become 2
    let result = await new Thenable(1);
    alert(result);
  }

  f();

}

/* ----- */
{
  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }

  new Waiter()
    .wait()
    .then(alert);   // 1
}

/* ----- */
{
  async function f() {
    await Promise.reject(new Error("Oops!"));
  }
}
{
  //the same
  async function f() {
    throw new Error ("Oops!");
  }
}

/* ----- */
{
  async function f() {

    try {
      let response = await fetch('http://no-such-url');
    } catch(err) {
      alert(err);   // TypeError: failed to fetch
    }
  }

  f();
}

/* ----- */
{
  async function f() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      alert(err);
    }
  }

  f();
}

/* ----- */
{
  async function f() {
    let response = await fetch('http://no-such-url');
  }

  f().catch(alert);   // TypeError:failed to fetch
}

// we can so (with Promise.all):
/* ----- 
{
  
  let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    ...
  ]);
}
*/