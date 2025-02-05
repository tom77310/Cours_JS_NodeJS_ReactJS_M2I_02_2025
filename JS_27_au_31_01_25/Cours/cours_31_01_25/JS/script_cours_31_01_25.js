function gererEvenementInscription() {
	// console.log('coucou');
	const form = document.querySelector('#inscription');
	console.log(form);

	//  on selectionne tous les input

	const input = document.querySelector('#email').value;
	console.log(input);

	// Récupération des valeurs des inputs

	// Affichage dans la console
	console.log('Nom :', lastname.value);
	console.log('Email :', email.value);

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		console.log('envoyer');
	});
}
gererEvenementInscription();
