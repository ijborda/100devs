// Re-resolve a promise?
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});
promise.then(alert);
// Output: 1 is alerted


// Delay with a promise
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Success'), ms)
    })
}  
delay(3000).then(() => alert('runs after 3 seconds'));


// Animated circle with promise
function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
}
function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
      
            div.addEventListener('transitionend', function handler() {
              div.removeEventListener('transitionend', handler);
              resolve(div)
            });
          }, 0);
    })
}
showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});


// Promise: then versus catch
promise
  .then(f1)
  .catch(f2);
promise
  .then(f1, f2);
// No. Error is unhandled in the second version.


// Error in setTimeout
new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
}).catch(alert);
// As said in the chapter, there’s an "implicit try..catch" around the function code. So all synchronous errors are handled. But here the error is generated not while the executor is running, but later. So the promise can’t handle it.
// A reject statement is needed here to handle the error.