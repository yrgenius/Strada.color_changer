let buttonChange = document.querySelector('.change');
let buttonRandom = document.querySelector('.random');
let input = document.querySelector('.color');
let body = document.querySelector('body');

buttonChange.addEventListener('click', () => changeBackground());

randomBackground(1000);

function changeBackground(value) {
    let color = value || input.value;
    body.style.background = color;
}

function randomBackground(time) {
    buttonRandom.addEventListener('click', timer);
    let isRun = false;
    let timerId = 0;

    function timer() {
        if (!isRun) startTimer();
        else stopTimer();
    }

    function startTimer() {
        if (!isRun) {
            let color = 0;
            timerId = setInterval(() => {
                color = getRandomColor();
                changeBackground(color);
            }, time);
            buttonRandom.textContent = 'Stop';
            isRun = !isRun;
        }
    }

    function stopTimer() {
        if (isRun) {
            clearInterval(timerId);
            buttonRandom.textContent = 'Random color';
            isRun = !isRun;
        }
    }

    function getRandomColor() {
        let arr = new Array(3).fill('*');
        arr = arr.map(el => Math.floor(Math.random() * 256));
        return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    }
}