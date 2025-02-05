// Generer un nombre aléatoire entier
const myMin = 0;
const myMax = 100;

function nombreAleatoire(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(nombreAleatoire(myMin, myMax));

//   recupere le chiffre saisi dans l'input
function getValue() {
	const input = document.getElementById('chiffre').value;
	console.log(input);
}

// et compare avec le nombre aleatoire

function CompareNombre(input, nombreAleatoire) {}
// console.log(CompareNombre());

//   afficher la phrase c'est plus ou c'est moins

if (input > nombreAleatoire) {
	console.log("C'est moins");
} else 
{
	console.log("C'est plus");
}
