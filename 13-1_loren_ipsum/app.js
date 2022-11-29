
let texts = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const alpa = document.getElementById("alpa");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const value = parseInt(amount.value);

    for (let i = 0; i < texts.length; i++) {
        if (texts[i] == alpa.value) {
            texts.splice(i);
            i--;
        }
    }

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result"> </p>`;
        window.alert('please input number 1~9');
    } else {
        let tempText = [];
        let text = "";
        let random;
        let randnum;
        for (i = 0; i < value; i++) {
            text = "";
            random = Math.floor(Math.random() * 100);
            for (let j = 0; j < random; j++) {
                randnum = Math.floor(Math.random() * texts.length);
                let n = texts[randnum];
                text = text + n;
            }
            tempText.push(text);
        }
        tempText = tempText
            .map(function (item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");
        result.innerHTML = tempText;
    }
});