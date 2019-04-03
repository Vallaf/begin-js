// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];


//1- Enlever le dernier éléments du tableau secretMessage
    var last = secretMessage.pop();

//2 - Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
    var newLength = secretMessage.push('to','program');
    console.log(secretMessage);

//3 - Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
    var pos = secretMessage.indexOf('easily'); 
    console.log(pos);// easily se trouve à la 6e position
     var removeEtRemplacer = secretMessage.splice(6, 1, 'right'); 
     console.log(secretMessage);

//4 -  Supprimer le premier élément du tableau.
    var premierElement = secretMessage.shift();
    console.log(secretMessage);

//5 - Ajouter la chaine "Programming" en début de tableau.
    var newLength =secretMessage.unshift('Programming');
    console.log(secretMessage);

//6 - Remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
    var suppEtRemplace = secretMessage.splice(5,5, 'know,');
    console.log(secretMessage);

//7 - Utiliser la méthode .join pour afficher le message secret à la console.   
    console.log(secretMessage.join( ' ' )); //Programming isn't about what you know, it's about what you can figure out. -2015, Chris Pine, Learn to program


