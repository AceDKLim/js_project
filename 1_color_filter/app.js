const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const a = document.querySelector(".a");
const b = document.querySelector(".b");

btn.addEventListener("click", function () {
    const randomNumber1 = Math.floor(Math.random() * colors.length);
    const randomNumber2 = Math.floor(Math.random() * colors.length);

    a.style.backgroundColor = colors[randomNumber1];
    b.style.backgroundColor = colors[randomNumber2];
    color.textContent = 'L : ' + colors[randomNumber1] + ' R : ' + colors[randomNumber2];
});