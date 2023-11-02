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

const testArray=makePlayerArray();
console.log(testArray);


const button=document.createElement('button');

button.setAttribute('id','myButton');
button.textContent='Start','Stop', 'Quit';


const parentElement=document.getElementById('parentElement');

parentElement.appendChild(button);


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

