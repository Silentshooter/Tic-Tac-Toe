# Tic-Tac-Toe

🕹️ Tic Tac Toe Game

A simple Tic Tac Toe (Zero vs Cross) game built using HTML, CSS, and JavaScript.
Play against a friend on the same device — featuring colorful X and O markers, reset and new game options, and automatic win detection.

🎯 Features

✅ Classic 3x3 Tic Tac Toe board

🎨 Distinct colors for X (Blue) and O (Red)

🏆 Winner detection logic using pre-defined patterns

🔒 Disables all boxes after a win

🔁 Reset and New Game buttons to play again

💬 Displays a congratulatory message to the winner

🧠 How It Works

Each box in the 3x3 grid is a <button>.

Players take turns clicking a box to place O or X.

JavaScript checks after every move whether any winning combination is achieved using:

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];


Once a win is detected, all boxes are disabled and the winner is displayed.

Reset or New Game buttons clear the board and start a new match.


🖌️ Color Scheme
Player	Symbol	Color Code	Description
Player 1	O	#e74c3c	Red
Player 2	X	#3498db	Blue

You can change these in style.css under .o-color and .x-color.

🧑‍💻 Technologies Used

HTML5 – Structure

CSS3 – Styling and layout

JavaScript (ES6) – Game logic and interactivity

