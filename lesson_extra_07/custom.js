function getUser1(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(user => resolve(user))
      .catch(err => reject(err));
  });
}

getUser1(1).then(user => console.log(user));

// another way
function getUser2(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(
      response => response.json()
    );
}

getUser2(1)
  .then(user => console.log(user))
  .catch(err => console.log(err));

// another way
function getUser3(id) {
  const [userType, userId] = id.split('-');
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(
      response => response.json()
    );
}

getUser3('user-4')   // but just the number 4 will be an error, so let's modify this function in the next way
  .then(user => console.log(user))
  .catch(err => console.log(err));

// another way
function getUser4(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split('-');
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(
        response => response.json()
      );
  });
  
}

getUser4(1)   // it'll be a type error in the console, so we can rework
  .then(user => console.log(user))
  .catch(err => console.log(err));
