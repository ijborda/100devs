// Rewrite using async/await
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}
loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404
async function loadJson(url) {
  try {
    let response = await fetch(url)
    let data = await response.json()
    return data
  } catch(err) {
    alert( new Error(err) );
  }
}
loadJson('https://javascript.info/no-such-user.json')


// Rewrite "rethrow" with async/await
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}
// Ask for a user name until github returns a valid user
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}
demoGithubUser();
async function demoGithubUser() {
  try {
    let name = prompt("Enter a name?", "iliakan");
    let user = await loadJson(`https://api.github.com/users/${name}`)
    alert(`Full name: ${user.name}.`);
    return user;
  } catch(err) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}


// Call async from non-async
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}
function f() {
  wait().then(a => console.log(a))
}
f()