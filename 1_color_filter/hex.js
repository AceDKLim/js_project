const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");   //html의 버튼 btn으로 선언
const color = document.querySelector(".color");  //css의 color color로
let HEX = "#";

btn.addEventListener("click", function () {
    HEX = "#";
    for (let i = 0; i < 6; i++) {
        HEX += hex[Math.floor(hex.length * Math.random())];
    }
    color.textContent = HEX;
    document.body.style.backgroundColor = HEX;
});
