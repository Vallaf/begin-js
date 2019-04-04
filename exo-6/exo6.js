// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code : création dun objet avec comme propriétés name, room, garage bathroom, cars
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};


// afficher le nombre de voitures de Joe
//console.log(joeInfo.cars.length);
// changer le nombre de salle de bains de Joe : il n'en possède qu'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.



var team = {
    players: [
        {
            firstName: 'VAL',
            lastName: 'A',
            age: 10
        },

    ],

    games: [
        {
            opponent: "A",
            teamPoints: 40,
            opponentPoints: 30
        }]
};

function addPlayer(firstName, lastName, age) {

    var newPlayer = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    team.players.push(newPlayer);
    return team;
}

function addMatch(opponent, teamPoints, opponentPoints) {

    var newGame = {
        opponent: opponent,
        teamPoints: parseInt(teamPoints),
        opponentPoints:  parseInt(opponentPoints)
    }

    team.games.push(newGame);
    return newGame;
}

function sumPoint() {
    var totalPoints = 0;
    team.games.forEach(function (match) {
    totalPoints += match.teamPoints;
    });
   
    return totalPoints;

}

function moyennePoint() {
    var moyOppPoints = 0;
    team.games.forEach(function (match) {
        moyOppPoints += match.opponentPoints/team.games.length;
        });

return moyOppPoints;
}

function oldestPlayer(){


}

for (let i = 0; i < 2; i++) {

    addPlayer(prompt('Entrez un prénom'), prompt('Entrez un nom'), prompt('Age du joueur'));
};


for (let i = 0; i < 2; i++) {

    addMatch(prompt('Entrez nom équipe adverse'), prompt('Team Points'), prompt('Opponent Points'));
};

console.log(team);

console.log(sumPoint());
console.log(moyennePoint());

