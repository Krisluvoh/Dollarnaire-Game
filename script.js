let player1Total = 0;
let player2Total = 0;
let currentPlayer = 1;

// Reset function
const reset = () => {
    player1Total = 0;
    player2Total = 0;
    currentPlayer = 1;

    const player1Output = document.getElementById('player1Total');
    const player2Output = document.getElementById('player2Total');

    // Reset player totals
    if (player1Output) {
        player1Output.innerHTML = `Player 1 Total: $0.00`;
        player1Output.classList.remove('winner');
    }

    if (player2Output) {
        player2Output.innerHTML = `Player 2 Total: $0.00`;
        player2Output.classList.remove('winner');
    }

    // Enable the Start button
    document.getElementById('startButton').disabled = false;
};

// Quit function
const quit = () => {
    // Reset both players' totals back to 0
    player1Total = 0;
    player2Total = 0;

    const player1Output = document.getElementById('player1Total');
    const player2Output = document.getElementById('player2Total');

    // Reset player totals on the UI
    if (player1Output) {
        player1Output.innerHTML = `Player 1 Total: $0.00`;
        player1Output.classList.remove('winner');
    }

    if (player2Output) {
        player2Output.innerHTML = `Player 2 Total: $0.00`;
        player2Output.classList.remove('winner');
    }

    // Enable the Start button
    document.getElementById('startButton').disabled = false;

    console.log('Quit function called');
};

// Play function
const play = () => {
    console.log('Play function called'); // Debugging log

    const coinIncrements = [1, 5, 10, 25];
    const randomCoin = coinIncrements[Math.floor(Math.random() * coinIncrements.length)];

    const player1Output = document.getElementById('player1Total');
    const player2Output = document.getElementById('player2Total');

    if (currentPlayer === 1) {
        player1Total += randomCoin;

        if (player1Output) {
            player1Output.innerHTML = `Player 1 Total: $${(player1Total / 100).toFixed(2)}`;
        }

        if (player1Total >= 100) {
            if (player1Output) {
                player1Output.classList.add('winner');
                document.getElementById('startButton').disabled = true;
                player1Output.innerHTML += " - Winner!";
            }
            return; // Exit the function when a winner is declared
        }

        currentPlayer = 2;
    } else {
        player2Total += randomCoin;

        if (player2Output) {
            player2Output.innerHTML = `Player 2 Total: $${(player2Total / 100).toFixed(2)}`;
        }

        if (player2Total >= 100) {
            if (player2Output) {
                player2Output.classList.add('winner');
                document.getElementById('startButton').disabled = true;
                player2Output.innerHTML += " - Winner!";
            }
            return; // Exit the function when a winner is declared
        }

        currentPlayer = 1;
    }
};

// Event listener for the Start button
document.getElementById('startButton').addEventListener('click', play);

// Event listener for the Reset button
document.getElementById('resetButton').addEventListener('click', reset);

// Event listener for the Quit button
document.getElementById('quitButton').addEventListener('click', quit);
