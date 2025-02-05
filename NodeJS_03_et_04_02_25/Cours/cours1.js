// Cours 1 du 03/02/2025

// const number1 = 2;
// const number2 = 3;
// console.log(number1 + number2);

// const { error, count } = require('console');
// const express = require('express');

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use((request, response, next) => {
// 	console.log('je suis un middleware flobal');
// 	// count++;
// 	next();
// });

// app.get('/', (request, response) => {
// 	console.log("J'ai reçu une requête GET sur la route /");

// 	console.log(Date.now());

// 	response.json({ message: 'Tout va bien :)', date: Date.now() });
// });

// app.listen(port, (error) => {
// 	if (error) {
// 		console.log('Il y a une erreur');
// 		return;
// 	}
// 	console.log(`Le serveur tourne sur le port ${port}`);
// });

// Exo 1 03/02/2025

// Consigne :
// écouter les requetes GET sur la route "/dico" qui renvoie le mot "informatique" avec le format de réponse :
// {
//      mot:"informatique"
// }

// app.get('/dico', (request, response) => {
// 	response.json({
// 		mot: 'info',
// 	});
// });

// Suite cours 1

// const words = [
// 	{
// 		id: 1,
// 		word: 'informatique',
// 	},
// 	{
// 		id: 2,
// 		word: 'JS',
// 	},
// 	{
// 		id: 3,
// 		word: 'HTML/CSS',
// 	},
// ];

// CRUD Word

// Get ONE
// READ
// app.get('/words', (request, response) => {
// 	response.json({ words: words });
// });

// Exo2 03/02/2025
// READ WORD EN FONCTION DE SON ID
// app.get('/words/:id', (request, response) => {
// 	const idToFind = Number(request.params.id);
// 	const findWord = words.find((word) => word.id === idToFind);
// 	if (!findWord) {
// 		response.json({
// 			error: true,
// 			message: "Il n'y a pas de mot avec cet id",
// 			isNaN: isNaN(idToFind),
// 		});
// 	} else {
// 		response.json({ word: findWord });
// 	}
// });

// POST ONE
// CREATE WORD
// app.post('/words', (request, response) => {
// 	const newWord = request.body.word;

// 	words.push({
// 		id: Date.now(),
// 		word: newWord,
// 	});

// 	response.json({ words });
// });

// UPDATE

// app.put('/words/:id', (request, response) => {
// 	const idToModify = Number(request.params.id);
// 	const wordToModify = words.find((word) => word.id === idToModify);
// 	const newWordValue = request.body.word;
// 	wordToModify.word = newWordValue.toLowerCase();
// 	response.json(words);
// });

// DELETE WORD

// app.delete('/words/:id', (request, response) => {
// 	const idToDelete = request.params.id;

// 	words = words.filter((word) => word.id !== idToDelete);
// 	response.json(words);
// });
// words = wordToDelete

// Code de julien => 03/02/2025
// const express = require('express');
// const {idIsNumberMiddleware} = require('./midleware/idIsNumberMiddleware.js');
// const {isWordMiddleware} = require('./midleware/isWordMiddleware.js');

// const app = express();
// const port = 3000;

// let count = 0;

// let words = [
// 	{
// 		id: 1,
// 		word: 'informatique',
// 	},
// 	{
// 		id: 2,
// 		word: 'react',
// 	},
// 	{
// 		id: 3,
// 		word: 'javascript',
// 	},
// ];

// let nextId = words.length + 1;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use((request, response, next) => {
// 	console.log('Je suis un middleware global');
// 	count++;
// 	next();
// });

// app.get('/', (request, response) => {
// 	console.log('Je suis une requête GET sur la route racine /');

// 	response.json({ message: 'Coucou', timestamp: Date.now() });
// });

// /* Convention API REST : 

// - Système de routes liées aux données 

// Par exemple 

// GET ALL     /words             --> renvoi tous les mots						X
// GET ONE     /words/:id         --> renvoi le mot avec l'id correspondant	X
// POST        /words             --> permet d'ajouter un mot					X
// PUT         /words/:id         --> permet de modifier un mot				X
// DELETE      /words/:id         --> Supprimer un par rapport a son id		X
// */

// /**
//  * CRUD WORDS
//  * GET ALL
//  * READ ALL
//  */
// app.get('/words', (request, response) => {
// 	response.json({ words });
// });

// /**
//  * CRUD WORDS
//  * GET ONE
//  * READ ONE
//  */
// app.get('/words/:id',idIsNumberMiddleware,isWordMiddleware, (request, response) => {
// 		const idToFind = Number(request.params.id);

// 		const findWord = words.find((word) => word.id === idToFind);

// 		response.json({ word: findWord });
// 	}
// );

// /**
//  * CRUD WORDS
//  * POST ONE Word
//  * CREATE ONE
//  */
// app.post('/words', (request, response) => {
// 	// recupérer body
// 	const newWord = request.body.word;

// 	words.push({
// 		id: nextId,
// 		word: newWord,
// 	});

// 	nextId++;

// 	response.json({
// 		word: words[words.length - 1],
// 	});
// });

// /**
//  * CRUD WORDS
//  * PUT ONE Word
//  * UPDATE word
//  */

// app.put('/words/:id',idIsNumberMiddleware,isWordMiddleware,	(request, response) => {
// 		const idToModify = Number(request.params.id);

// 		const wordToModify = words.find((word) => word.id === idToModify);

// 		const newWordValue = request.body.word;

// 		wordToModify.word = newWordValue.toLowerCase();

// 		response.json(words);
// 	}
// );

// /**
//  * CRUD WORD
//  * DELETE ONE Word
//  */
// app.delete('/words/:id',idIsNumberMiddleware,isWordMiddleware, (request, response) => {
// 		const idToDelete = Number(request.params.id);

// 		const wordsWithoutWordToDelete = words.filter(
// 			(word) => word.id !== idToDelete
// 		);

// 		words = wordsWithoutWordToDelete;

// 		response.json(words);
// 	}
// );

// app.listen(port, (error) => {
// 	if (error) {
// 		console.error(error);
// 		return;
// 	}

// 	console.log(`Serveur lancé sur le port ${port}`);
// });

// Cours 04/02/2025 (Apres-midi)

// code julien 04/02/2025

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const wordsRouter = require('./WordsRouter');

const app = express();
const port = 3000;

let count = 0;

app.use(
	cors({
		origin: 'http://127.0.0.1:5500',
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	})
);

/*
app.use((request, response, next) => {
	// TODO voir pourquoi http://127.0.0.1:5500/ refuse l'accès
	response.setHeader('Access-Control-Allow-Origin', '*');
	next();
});
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((request, response, next) => {
	console.log('Je suis un middleware global');
	count++;
	next();
});

app.use('/words', wordsRouter);

app.get('/', (request, response) => {
	console.log('Je suis une requête GET sur la route racine /');

	response.json({ message: 'Coucou', timestamp: Date.now() });
});

app.get(
	'/search/actors/:isAdult/:language/:recherche',
	async (request, response) => {
		const { isAdult, language, recherche } = request.params;

		const { page } = request.query;

		let searchPage = page ? page : 1;

		if (isAdult !== 'true' && isAdult !== 'false') {
			response.status(400).json({
				error: true,
				message: "isAdult n'a pas le bon format : true or false",
			});

			return;
		}

		if (language !== 'fr-FR' && language !== 'en-EN') {
			response.status(400).json({
				error: true,
				message: 'language doit être fr-FR ou en-EN',
			});

			return;
		}

		const url = `https://api.themoviedb.org/3/search/person?query=${recherche}&include_adult=${isAdult}&language=${language}&page=${searchPage}`;
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
			},
		};

		const TMDBResponse = await fetch(url, options);
		const data = await TMDBResponse.json();

		response.json(data);
	}
);

app.listen(port, (error) => {
	if (error) {
		console.error(error);
		return;
	}

	console.log(`Serveur lancé sur le port ${port}`);
});