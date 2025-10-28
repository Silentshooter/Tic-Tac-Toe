let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newgameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = 'O';
            box.classList.add('o-color');
            turn0 = false;
        } else {
            box.innerText = 'X';
            box.classList.add('x-color');
            turn0 = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
        box.classList.remove('x-color', 'o-color');
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} has won the game!`;
    msgContainer.classList.remove('hide');
    disabledboxes();
};

const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== '' && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            return;
        }
    }
};

resetBtn.addEventListener('click', () => {
    turn0 = true;
    enableboxes();
    msgContainer.classList.add('hide');
});

newgameBtn.addEventListener('click', () => {
    turn0 = true;
    enableboxes();
    msgContainer.classList.add('hide');
});
