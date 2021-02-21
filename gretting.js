const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    toDo = document.querySelector(".toDo");
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
    if(currentValue === ""){
        input.value= "";
            input.setAttribute("placeholder","No blanks!");
            return false;
      }
      if(currentValue.length > 9){
        input.value= "";
        input.setAttribute("placeholder","Too Long Name!");
       // input.focus();
       return false;
      }
    
    toDo.classList.add(SHOWING_CN);
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

    let txt = "";
    const name = `<span class='name'>${text}</span>`;
    if (8 <= timeCheck && timeCheck <= 11) {
        txt = `${name}! Good Morning!`;
    }
    if (12 <= timeCheck && timeCheck <= 13) {
        txt = `${name}! Have a good lunch!&nbsp;`;
    }
    if (14 <= timeCheck && timeCheck <= 16) {
        txt = `${name}, Aren't you sleepy? ${text}`;
    }
    if (17 <= timeCheck && timeCheck <= 18) {
        txt = `${name}, Have you decided on your dinner menu?`;
    }
    if (19 <= timeCheck && timeCheck <= 22) {
        txt = `${name}! You did a great job!`;
    }
    if ( timeCheck === 23|| timeCheck === 0 || timeCheck === 1 ) {
        txt = `${name}! Time to go to sleep!`;
        
    }
    if (2 <= timeCheck && timeCheck <= 4) {
        txt = `${name}! Are you an owl?`;
    }
    if (5 <= timeCheck && timeCheck <= 7) {
        txt = `${name}! You start the day early! `;
    }

    greeting.innerHTML= txt;



}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
        toDo.classList.add(HIDING);
    } else {
        paintGreeting(currentUser);
        toDo.classList.add(SHOWING_CN);
    }
}

function animate(){
    const jbTime = 1000;
    $('.clockDiv' ).animate( {
      opacity: '1'
    }, jbTime, function() {
      $(  '.wirteNameForm' ).animate( {
        opacity: '1'
      });
      $('.greet').animate({
        opacity: '1'
      }, jbTime, function(){
        $('.toDo').animate({
            opacity: '1'
          });
      });
    
    } );
}

function init() {
    animate();
    loadName();
    setInterval(loadName, 60000);
}

init();