function makePlayerArray(){
const moneyArray=[1,5,10,25];
const playerArray=[];

for (let i=0;i<moneyArray.length;i++){
    let num=Math.floor(Math.random()*4)
    playerArray.push(moneyArray[num]);

}

console.log(playerArray);
return playerArray;
}
//Function to calculate the score

function calculateScore(playerArray) {
    let score = 0;
    for (let i = 0;i<
        playerArray.length; i++){
            score+=playerArray[i];
        }
return score;
    }

    //Function to check for a win

    function checkWin(playerArray){
        const targetScore=100;
        const score=
        calculateScore(playerArray);
        if (score>=targetScore){
            return true;
        }
return false;
    }

    //Function to reset the game

    function resetGame(){
        const playerArray= makePlayerArray();
        textOutput.textContent='Game reset. Start a new game!';
        return playerArray;
    }

    const testArray=makePlayerArray();
console.log(testArray);


const startButton=document.getElementById('startButton');
//const keepGoingButton=document.getElementById('keepGoingButton');
//const stopButton=document.getElementById('stopButton');
const textOutput=document.getElementById('textOutput');

const score=calculateScore(playerArray);
textOutput.textContent='Current score: $${score}';

const isWin=checkWin(playerArray);
if (isWin){
    textOutput.textContent='Congratulations!You are the winner! You are now a DOLLARNAIRE!!!';
}




startButton.addEventListener('click',()=>
{
    const playerArray=makePlayerArray();
    textOutput.textContent='Game started. Good luck!';
});



//keepGoingButton.addEventListener('click',()=>

   // textOutput.textContent='Keep going button clicked';
//});

//stopButton.addEventListener('click',()=>
//{
  //  textOutput.textContent='Stop button clicked';
//});

const quitButton=document.getElementById('quitButton');
quitButton.addEventListener('click',()=>
{
    const playerArray=[];
    const score=
    calculateScore(playerArray);
    textOutput.textContent='Final score: $${score}';
})

    const confirmation=confirm('Are you sure you want to quit?');
    if(confirmation){
        textOutput.textContent="Quit button clicked. Quitting the game...";
    }else{
        textOutput.textContent="Quit button clicked. Resuming the game...";
    }


const resetButton=document.getElementById('resetButton');
resetButton.addEventListener('click',()=>
{
const playerArray=resetGame();
});



    textOutput.textContent="Reset button clicked";


//button.setAttribute('id','myButton');
//button.textContent='Start','Stop', 'Quit';


//const parentElement=document.getElementById('parentElement');

//parentElement.appendChild(button);


class Player{
    constructor(){
        this.moneyArray=[1,5,10,25];
        this.playerArray=[];
    }

    createPlayerArray(){
        for (let i=0;i<this.moneyArray.length;i++){
                this.playerArray.push(this.moneyArray[i]);
            }
            }
    }

