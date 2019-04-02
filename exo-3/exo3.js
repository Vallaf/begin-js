// you can write js here
console.log('exo-3');

var userInput = prompt('Que choisissez-vous : pierre, feuille ou ciseaux ? ')
//userInput.toLowerCase();


function getUserChoice(userInput)
{
    if(userInput == 'pierre'){
        console.log(userInput);
    }

    else if(userInput == 'feuille'){
        console.log(userInput);
    }

    else if(userInput == 'ciseaux'){
        console.log(userInput);
    }
   else if(userInput == 'bomb'){
    console.log(userInput);
   }
    else {
        console.log('Erreur : renouvelez-votre choix');
    }
    return userInput;
}
   
function getComputerChoice(){

    var computerChoice=Math.round(Math.random()*3);

    if(computerChoice== 0){
        computerChoice = 'pierre';
        console.log(computerChoice);
    }
    else if(computerChoice == 1){
        computerChoice = 'feuille';
        console.log(computerChoice);
    }
    else if(computerChoice ==2 ){
        computerChoice = 'ciseaux';
        console.log(computerChoice);

    }
    return computerChoice;
}

function determineWinner(userInput,computerChoice){
   
    if (userInput == computerChoice){
        console.log('Egalité');
    }

    else if (userInput == 'pierre' && computerChoice =='ciseaux'){
        console.log('gagné');
    }
    else if (userInput == 'feuille' && computerChoice =='pierre'){
           console.log('gagné');
    }
    else if (userInput == 'ciseaux' && computerChoice =='feuille'){
        console.log('gagné');
    }
    else if (userInput == 'bomb'){
        console.log('GAGNE')
    }
    else  console.log('perdu');

}

function playGame(){
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    determineWinner(userChoice,computerChoice);

}

playGame();


/*getUserChoice(userInput);
getComputerChoice();
determineWinner(userInput,computerChoice);*/
    
