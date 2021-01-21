const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
// span = document.querySelector(".span");

const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    HIDING = "hiding";


function getTime() {
    const date = new Date();
    const mimutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const time = parseInt(`${hours < 10 ? `0${hours}`: hours}`);
    return time;
}



function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    // span.classList.remove(HIDING);
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    //  span.classList.add(HIDING);
    greeting.classList.add(SHOWING_CN);
    const timeCheck = getTime()

    if (8 <= timeCheck && timeCheck <= 11) {
        greeting.innerHTML = `Good Morning!&nbsp; ${text}`;
    }
    if (12 <= timeCheck && timeCheck <= 13) {
        greeting.innerHTML = `Have a good lunch!&nbsp; ${text}`;
    }
    if (14 <= timeCheck && timeCheck <= 16) {
        greeting.innerHTML = `Aren't you sleepy?&nbsp; ${text}`;
    }
    if (17 <= timeCheck && timeCheck <= 18) {
        greeting.innerHTML = `It's time to get off work soon!&nbsp; ${text}`;
    }
    if (19 <= timeCheck && timeCheck <= 22) {
        greeting.innerHTML = `You did a great job. Take a rest today!&nbsp; ${text}`;
    }
    if (23 == timeCheck && timeCheck == 1 && timeCheck == 24) {
        greeting.innerHTML = `Time to go to sleep!&nbsp; ${text}`;
    }
    if (2 <= timeCheck && timeCheck <= 4) {
        greeting.innerHTML = `Are you an owl?&nbsp; ${text}`;
    }
    if (5 <= timeCheck && timeCheck <= 7) {
        greeting.innerHTML = `You start the day early!&nbsp; ${text}`;
    }




}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
    setInterval(loadName, 60000);
}

init();