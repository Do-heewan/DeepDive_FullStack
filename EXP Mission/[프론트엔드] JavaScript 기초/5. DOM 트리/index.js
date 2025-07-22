const buttonElement = document.querySelector('.btn');
const buttonElement1 = document.querySelector('.btn-1');
const text = document.getElementById('text');

buttonElement.addEventListener('click', handleButton);
buttonElement1.addEventListener('click', colorChange);

function handleButton (event) {
    text.innerHTML = "<h3>저는 현재 딥다이브 풀스택 15회차 강의를 수강중입니다. <br>풀스택 개발자로 한 걸음 다가가기 위한 공부를 하고 있습니다.</h3>";
    text.style.color = 'black';
    console.log(event.target);
}

function colorChange (event) {
    text.style.color = 'red';
    console.log(event.target);
}