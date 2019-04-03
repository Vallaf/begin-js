// you can write js here

console.log('exo-5');

var input = prompt('Entrez une chaîne de caractères: ');
var vowels = ["A","E","I","O","U"];
var resultArray = [];


//for (var i=0; i< input.length; i++){
//    console.log(vowels.indexOf(input[i])); // exemple "SALUT"  : affiche sur la console -1 0 -1 4 -1 position des lettres voyelles du tableau vowels
for (var j=0; j< input.length; j++){
    var letter = input[j].toUpperCase(); // création d'une variable explicite pour s'y retrouver
   

    if (vowels.indexOf(letter) != -1) {
        resultArray.push(letter);

     //resultArray.push(vowels.indexOf(letter));

    console.log(resultArray.join(''));
   
   }
}


