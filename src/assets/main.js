let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value === "" || attempt.value === "") {
        setHiidenFields();
    }
}
function setHiddenFields() {
    let res = "";
    for(let i = 0; i < 4; i++) {
       let num = Math.random() * 10;
       num = Math.floor(num);
       res += num;
    }
    answer.value = res;
    attempt.value = 0;
}
