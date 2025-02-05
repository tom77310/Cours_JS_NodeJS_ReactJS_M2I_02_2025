// Cours 27/01/2025

// console.log('HELLO WORLD');

// const nom = 'Thomas';
// const age = '22 ans';

// console.log(nom);
// console.log(age);

// console.log("Je m'appelle"+ " " + nom +" "+ "et j'ai" + " " + age);
// console.log(`Je m'appelle ${nom} et j'ai ${age}`);

console.log();

// Cours 28/01/2025



// Exo 1
// const texte = 'Il était une fois un marchand très riche. Il avait six enfants, trois garçons et trois très jolies filles. La cadette était si belle et si intelligente qu’on la surnomma dès son enfance La Belle enfant. Ses sœurs en étaient très jalouses. Elles avaient beaucoup d’orgueil, passaient leurs journées au bal ou au théâtre et à se moquaient de Belle, qui préférait lire des livres. La richesse de la famille étant connue de tous, plusieurs pré-tendants demandèrent les jeunes filles en mariage. Pourtant aucun ne se révéla assez bien pour elles. Les aînées désiraient au moins un duc ou un comte. Belle quant à elle, bien qu’elle remerciât ceux qui souhaitaient l’épouser, préfé-rait rester encore quelques années auprès de son père.';
// const caractere = texte.length;


// console.log(texte.length);
// console.log(texte.split('').length);


// Exo 2

// const nombreDeCaractères = texte.length;

// const nombreDeMots = texte.split(' ').length;

// const tableauDePhrases = texte.split('.');
// const tableauDePhrasesNettoyé = tableauDePhrases.filter(
//     (elementAVerifier) => elementAVerifier !== ''
// );

// const nombreDePhrases = tableauDePhrasesNettoyé.length;

// console.log(nombreDeCaractères, nombreDeMots, nombreDePhrases);

// Exo 3 
// Consigne :
// A partir de ce code, créer 3 fonctions qui permettent de compter les caractères, compter les mots et compter les phrases

// const nombreDeCaractères = texte.length;

// const nombreDeMots = texte.split(' ').length;

// const tableauDePhrases = texte.split('.');
// const tableauDePhrasesNettoyé = tableauDePhrases.filter(
//     (elementAVerifier) => elementAVerifier !== ''
// );

// const nombreDePhrases = tableauDePhrasesNettoyé.length;

// console.log(nombreDeCaractères, nombreDeMots, nombreDePhrases);


// Correction Exo 3
// Fonction pour compter les caractères
function compterCaracteres(texte) {
    return texte.length;
}

// Fonction pour compter les mots
function compterMots(texte) {
    return texte.trim().split(/\s+/).length;
}

// Fonction pour compter les phrases
function compterPhrases(texte) {
    const tableauDePhrases = texte.split('.');
    const tableauDePhrasesNettoye = tableauDePhrases.filter(
        (elementAVerifier) => elementAVerifier.trim() !== ''
    );
    return tableauDePhrasesNettoye.length;
}

// Exemple d'utilisation
// const texte = "Ceci est un exemple. Il contient plusieurs phrases. Testons-le !";

// const nombreDeCaractères = compterCaracteres(texte);
// const nombreDeMots = compterMots(texte);
// const nombreDePhrases = compterPhrases(texte);

// console.log("Nombre de caractères :", nombreDeCaractères);
// console.log("Nombre de mots :", nombreDeMots);
// console.log("Nombre de phrases :", nombreDePhrases);



// Exo4

// Nombre de caractères
const buttonCaractères = document.querySelector('.caractères');
const input = document.querySelector('#paragraph');
const paragrapheCaractères = document.querySelector('.result-caractères');

console.log(buttonCaractères);

buttonCaractères.addEventListener('click', (event) => {
	event.preventDefault();

	const value =  input.value;

	console.log(value);
	paragrapheCaractères.innerText = "Nombre de caractères : " + compterCaracteres(value) + " caractères";
});

// Nombre de mots
const buttonMots = document.querySelector('.mots');
const input2 = document.querySelector('#paragraph2');
const paragrapheNbrMot = document.querySelector('.result-mots');

buttonMots.addEventListener('click', (event) => {
	event.preventDefault();

	const value =  input2.value;

	console.log(value);
	paragrapheNbrMot.innerText = "Nombre de mots : " + compterMots(value) + " mots";
});

// Nombre de phrase
const buttonPhrases = document.querySelector('.phrase');
const input3 = document.querySelector('#paragraph3');
const paragrapheNbrPhrase = document.querySelector('.result-phrase');

buttonPhrases.addEventListener('click', (event) => {
	event.preventDefault();

	const value =  input3.value;

	console.log(value);
	// paragrapheNbrPhrase.innerText = "Nombre de phrases : " + compterPhrases(value) + " phrases";
    // if (value<=1) {
    //     paragrapheNbrPhrase.innerText = "Nombre de phrase : " + compterPhrases(value) + " phrase";
    // }else{
    //     paragrapheNbrPhrase.innerText = "Nombre de phrases : " + compterPhrases(value) + " phrases";
    // }
});
