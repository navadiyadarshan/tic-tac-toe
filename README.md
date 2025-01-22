# tic-tac-toe
🔗game: [tic-tac-toe](https://digi-tic-tac-toe.netlify.app/)
<br>
<ul type="disc">
        <li>This project is a simple, interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. It allows both single-player and two-player gameplay modes.</li>
        <li>In two-player mode, two users take turns making moves, with a dynamic game board and functionality to declare the winner or a draw. The game can be played directly in the browser, providing an engaging and responsive experience for users on both desktop and mobile devices. A restart button is included, allowing players to reset the game after each round.</li>
        <li>In single-player mode, the user competes against the computer, which follows a basic random move algorithm to simulate an opponent. The player makes their move first, and then the computer selects an available cell for its turn. The game checks for win conditions, draw scenarios, and updates the board dynamically after each move. Like two-player mode, single-player mode also includes a restart button to easily reset the game and play again. The interface is designed to be intuitive, providing clear feedback on the current game status, whether it's a win, loss, or ongoing game.</li>
        <br>
        <li><u>About This Project<u></li>
        <ol type="1">
            <li>HTML Structure:</li>
            <ul type="circle">
Created the basic structure using HTML5 for the game interface, including a Tic Tac Toe board and player information.
Added options for selecting the game mode: single-player or two-player.
Incorporated sections for displaying the current player's turn, game status (win, loss, or draw), and buttons to restart the game.
Set up the grid using div elements, which are clickable for user interactions.
            <li>CSS Styling:</li>
            <ul type="circle">
                <li>Styled the game interface using CSS, ensuring it’s visually appealing and user-friendly.</li>
                <li>Used Flexbox to organize the layout of the game board and player info, maintaining a clean, structured look.</li>
                <li>Made the design responsive to work across various screen sizes, ensuring accessibility on mobile devices.</li>
                <li>Applied hover effects to the grid cells, giving immediate feedback to players.</li>
                <li>Customized the overall look and feel using colors, fonts, and borders to enhance the visual experience.</li>
            </ul>
            <li>JavaScript Functionality:</li>
            <ul type="circle">
                <li>Implemented game logic to handle both two-player and single-player modes.</li>
                <li>For two-player mode, players alternate turns, and the game checks for win conditions after each move.</li>
                <li>For single-player mode, the player competes against the computer. The computer makes its moves randomly to ensure challenging but fair gameplay.</li>
                <li>Created functions to determine whether the game has been won, lost, or resulted in a draw.</li>
                <li>Used event listeners to capture player clicks and dynamically update the game board.</li>
                <li>Added a restart button to reset the game board and player statuses, allowing continuous play.</li>
            </ul>
            <li>Game Logic:</li>
            <ul type="circle">
                <li>In two-player mode, players alternate between X and O, with the game checking for a winner after each move (horizontal, vertical, or diagonal).</li>
                <li>In single-player mode, the computer's move is simulated. After the user makes a move, the computer randomly selects a valid empty cell and places its move(either X or O).</li>
                <li>The game checks after each move whether either player has won or if there’s a draw.</li>
                <li>Players can easily restart the game, returning the board to its initial state.</li>
            </ul>
            <li>Single-Player:</li>
            <ul type="circle">
                <li>The computer's move is randomly generated but ensures that it doesn’t make invalid moves (i.e., moves in already filled cells).</li>
                <li>The computer randomly selects a cell from the available ones, ensuring some level of challenge for the player.</li>
                <li>Provides an interesting and engaging challenge for users in single-player mode.</li>
            </ul>
            <li>Interactivity:</li>
            <ul type="circle">
                <li>Players can click on the grid cells to make their moves.</li>
                <li>In single-player mode, the computer’s move follows the player’s move with a slight delay to create a more realistic gameplay experience.</li>
                <li>A restart button allows users to reset the game at any time.</li>
            </ul>
        </ol>
        <br>
        <li><u>Learned from this Project</u></li>
        <ol type="1">
            <li>HTML5:</li>
            <ul type="circle">
                <li>Improved structuring of interactive web interfaces, managing layout and game controls.</li>
                <li>Gained experience implementing forms for user selection (game mode, restart functionality).</li>
            <ul>
            <li>CSS:</li>
            <ul type="circle">
                <li>Enhanced skills in designing user-friendly and visually appealing interfaces with responsive layouts.</li>
                <li>Created dynamic, interactive visuals using hover effects and transitions for grid cells.</li>
            <ul>
            <li>JavaScript:</li>
            <ul type="circle">
                <li>Implemented game logic to handle both two-player and single-player modes.</li>
                <li>Developed simple AI for the computer opponent in single-player mode using random number generation and move validation.</li>
                <li>Improved understanding of event-driven programming, dynamically updating the DOM based on user actions.</li>
                <li>Implemented functions to check for game outcomes (win, draw, or ongoing) after every move.</li>
            <ul>
            <li>Game Development Basics:</li>
            <ul type="circle">
                <li>Gained knowledge of building turn-based games with multiple player modes.</li>
                <li>Implemented logic to check for winning conditions and validate player moves in real-time.</li>
            <ul>
            <li>Problem Solving:</li>
            <ul type="circle">
                <li>Solved the challenge of alternating turns and checking for the end of the game (win or draw).</li>
                <li>Created a basic, random move algorithm for the computer to simulate an opponent in single-player mode.</li>
            <ul>
            <li>Project Organization:</li>
            <ul type="circle">
                <li>Organized the project files (HTML, CSS, JavaScript) for easy readability and maintainability.</li>
                <li>Separated logic for the two-player and single-player modes, ensuring clear structure and functionality.</li>
            </ul>
        </ol>
    </ul>