let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}
function setHiddenFields() {
    let res = "";
    for(let i = 0; i < 3; i++) {
       let num = Math.random() * 10;
       num = Math.floor(num);
       res += num;
    }
    answer.value = res;
    attempt.value = 0;
}
//implement new functions here
