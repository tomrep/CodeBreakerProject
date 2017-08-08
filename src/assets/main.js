let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value === "" || attempt.value === "") {
        setHiidenFields();
    }
    if(!validateInput(input.value)){
        return false;
    } else {
        attempt.value += 1;
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

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if(input.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults() {
}
