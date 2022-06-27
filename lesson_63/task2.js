"use sctrict";

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = 'response';
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Enter login?", 'AlexeyBalabaev');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // after alert, a new iteration of cycle will begin
        alert("This user doesn't exist, please, repeat the enter.");
      } else {
        // unknown error, throw its
        throw err;
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();