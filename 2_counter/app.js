const value = document.querySelector('#value');  //css에서 숫자 관련된 부분 -> html의 숫자
const btns = document.querySelectorAll('.btn');   //css에서 버튼 관련된 부분 리스트로 -> html의 버튼
let n = 0;

btns.forEach(function (btn) {   //버튼리스트 들고 옴(increase, decrease, reset)
    btn.addEventListener("click", function (e) { //버튼 눌리면
        const num = e.currentTarget.classList;   //num이 버튼의 클래스 제어
        if (num.contains("increase")) {
            n++;
        } else if (num.contains("decrease")) {
            n--;
        } else if (num.contains("reset")) {
            n = 0;
        }
        value.textContent = n;     //숫자에 감소, 증가된 숫자 넣음
        if (n == 0) {
            value.style.color = "black";
        } else if (n > 0) {
            value.style.color = "green";
        } else if (n < 0) {
            value.style.color = "red";
        }
    });
});
