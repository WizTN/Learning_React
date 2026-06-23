function a () {
    n++;
    counter.innerHTML = n;
}

let button = document.getElementById("button");
let counter = document.getElementById("counter");
let n = 0;
button.addEventListener("click",a);