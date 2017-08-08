let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value === "" || attempt.value === "") {
        setHiddenFields();
    }
    if(!validateInput(input.value)){
        return false;
    } else {
        attempt.value += 1;
    }
    if(getResults(input.value)) {
        setMessage("You win! :)");
    } else {
        if(attempt.value >= 10) {
            setMessage("You lose! :(");
        } else {
            setMessage("Incorrect, try again.");
        }
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

function getResults(result) {
    let count = 0;
    let results = document.getElementById('results');
    let div = '<div class="row"><span class="col-md-6">' + result + '</span><div class="col-md-6">'
    for(let i = 0; i < 4; i++) {
        if(result.charAt(i) === answer.value.charAt(i)) {
            count += 1;
            div+= '<span class="glyphicon glyphicon-ok"></span>';
        } else if (answer.value.indexOf(result.charAt(i)) === -1) {
            div+= '<span class="glyphicon glyphicon-remove"></span>';
        } else {
            div+= '<span class="glyphicon glyphicon-transfer"></span>';
        }
    }
    div += '</div></div>';
    results.innerHTML += div;
    if(count === 4) {
        return true;
    } else {
        return false;
    }
}
