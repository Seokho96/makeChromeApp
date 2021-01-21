const title = document.querySelector("#title"); // 아이디가 title인것 중에서 제일 첫번째 
//title.innerHTML = "Hi From JS";
//title.style.color = "white";
document.title = "I own you now";

const CLICKED_CLASS = "clicked";

// const BASE_COLOR  = "rgb(52, 72, 94)";
// const OTHER_COLOR = "#7F8C8D";

// function handleClick() {
//     const currentColor = title.style.color; 
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else{
//         title.style.color = BASE_COLOR;
//     }
// }ㅇㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ

function handleClick() {
    //const curentClass = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS);  CLICKED_CLASS 라는 클래스를 가지고 있는 모든 요소

    // if (/*curentClass !== CLICKED_CLASS*/hasClass) {
    //     // title.className = CLICKED_CLASS;
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     //title.className = "";
    //     title.classList.add(CLICKED_CLASS);
    // }   ==  title.classList.toggle(CLICKED_CLASS);와 같은 의미
    title.classList.toggle(CLICKED_CLASS);

}

function init() {
    //  title.style.color = BASE_COLOR;
    // title.addEventListener("mouseenter", handleClick);
    title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
    console.log("alalal");
}


function handleOnline() {
    console.log("welcomBack");
}

window.addEventListener("offline", handleOffline); // 인터넷 연결이 안될 시 
window.addEventListener("online", handleOnline); // 인터넷 연결 시


// title.addEventListener("click", handleClick);

// function handleResize(event){
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);




// if("10" === 10){
//     console.log("hi");
// }                       
// else{
//     console.log("ho");
// }

/*
const age =  prompt("How old are you?");

if( age >= 18 && age <= 21){
   console.log("you can drink but you should not");
}
else if(age > 21){
    console.log("go ahed");
}
else{
    console.log("too young");
}
*/