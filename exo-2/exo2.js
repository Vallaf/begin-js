// you can write js here
console.log('exo-2');

var estInscrit = prompt("Etes-vous inscrit ?") ;

if(estInscrit == 'true'){
   estInscrit = true;
}
else {
   estInscrit = false;
  
}

var raceNumber = Math.floor(Math.random()*1000);
var age = prompt("Quelle est votre âge ?");

if(!estInscrit){
   raceNumber +=1000;
   console.log(raceNumber);
}

if (estInscrit && age>18){
  
   console.log(age);
   console.log('You will race at 9:30 am.' + ' ' + 'Votre n° de dossard est : ' + raceNumber);

}
else if (estInscrit || age>18){
   console.log('You will race at 11:00 am.' + ' ' + 'Votre n° de dossard est : ' + raceNumber);
}

if (!estInscrit|| age<18){
   console.log('You will race at 12:30 am.' + ' ' + 'Votre n° de dossard est : ' + raceNumber);
}

else console.log('Go to see the registration desk');

