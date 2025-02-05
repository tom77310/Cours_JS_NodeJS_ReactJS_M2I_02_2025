const filmsArray = [
	{
		title: '🌌 Plongée dans la science-fiction',
		name: 'Interstellar',
		description:
			"Une odyssée spatiale fascinante où un groupe d'astronautes explore les confins de l'univers pour sauver l'humanité.",
		genre: 'Science-fiction',
		ambiance: 'Épique et contemplative',
		origin: 'États-Unis',
	},
	{
		title: '🕵️ Suspense et enquête',
		name: 'Sherlock',
		description:
			'Une série moderne où Sherlock Holmes et John Watson résolvent des mystères dans un Londres contemporain.',
		genre: 'Enquête',
		ambiance: 'Intrigante et intelligente',
		origin: 'Royaume-Uni',
	},
	{
		title: '🎭 Émotions et drames',
		name: 'The Pursuit of Happyness',
		description:
			'Un film inspirant sur un père et son fils qui luttent pour une vie meilleure, porté par une performance émouvante de Will Smith.',
		genre: 'Drame',
		ambiance: 'Inspirante et émotive',
		origin: 'États-Unis',
	},
	{
		title: '😂 Pour une dose d’humour',
		name: 'Brooklyn Nine-Nine',
		description:
			"Une comédie hilarante suivant les aventures d'une équipe de détectives dans un commissariat de New York.",
		genre: 'Comédie',
		ambiance: 'Légère et humoristique',
		origin: 'États-Unis',
	},
	{
		title: '⚔️ Épopées épiques',
		name: 'Le Seigneur des Anneaux',
		description:
			"Une trilogie légendaire où le bien et le mal s'affrontent dans un univers fantastique riche et captivant.",
		genre: 'Fantastique',
		ambiance: 'Épique et immersive',
		origin: 'Nouvelle-Zélande',
	},
	{
		title: '❤️ Romance et légèreté',
		name: 'The Notebook',
		description:
			"Une histoire d'amour intemporelle qui explore les hauts et les bas d'une relation passionnée.",
		genre: 'Romance',
		ambiance: 'Romantique et poignante',
		origin: 'États-Unis',
	},
	{
		title: '💥 Action et adrénaline',
		name: 'Mad Max: Fury Road',
		description:
			'Une course effrénée dans un désert post-apocalyptique, avec des cascades spectaculaires et une tension constante.',
		genre: 'Action',
		ambiance: 'Intense et dynamique',
		origin: 'Australie',
	},
	{
		title: '🎶 Pour les mélomanes',
		name: 'La La Land',
		description:
			"Une comédie musicale moderne célébrant l'amour, les rêves et la passion pour la musique et le cinéma.",
		genre: 'Comédie musicale',
		ambiance: 'Rêveuse et artistique',
		origin: 'États-Unis',
	},
	{
		title: '🧙 Magie et aventures',
		name: "Harry Potter à l'école des sorciers",
		description:
			"Le début d'une saga magique où un jeune sorcier découvre ses pouvoirs et un monde enchanté.",
		genre: 'Fantastique',
		ambiance: 'Magique et mystérieuse',
		origin: 'Royaume-Uni',
	},
	{
		title: '🌱 Nature et contemplation',
		name: 'Into the Wild',
		description:
			"L'histoire vraie d'un jeune homme qui quitte tout pour vivre une aventure solitaire au cœur de la nature sauvage.",
		genre: 'Aventure',
		ambiance: 'Solitaire et méditative',
		origin: 'États-Unis',
	},
	{
		title: '😨 Frissons garantis',
		name: 'Get Out',
		description:
			'Un thriller psychologique glaçant qui explore les tensions sociales et des secrets inquiétants.',
		genre: 'Thriller',
		ambiance: 'Angoissante et surprenante',
		origin: 'États-Unis',
	},
	{
		title: '🌟 Histoires inspirantes',
		name: 'Forrest Gump',
		description:
			"Un classique intemporel qui raconte la vie extraordinaire d'un homme simple mais au destin incroyable.",
		genre: 'Drame',
		ambiance: 'Émotive et inspirante',
		origin: 'États-Unis',
	},
	{
		title: '🌍 Voyage et exploration',
		name: 'The Secret Life of Walter Mitty',
		description:
			"Un film inspirant sur la quête de soi et l'aventure à travers des paysages incroyables.",
		genre: 'Aventure',
		ambiance: 'Émerveillée et motivante',
		origin: 'États-Unis',
	},
	{
		title: '👾 Univers dystopiques',
		name: 'Black Mirror',
		description:
			'Une série qui explore les conséquences effrayantes des avancées technologiques sur la société.',
		genre: 'Science-fiction',
		ambiance: 'Dystopique et perturbante',
		origin: 'Royaume-Uni',
	},
	{
		title: '🎩 Mystères magiques',
		name: 'The Prestige',
		description:
			'Deux magiciens rivaux dans une quête obsessionnelle pour réaliser le tour parfait.',
		genre: 'Thriller',
		ambiance: 'Mystérieuse et captivante',
		origin: 'États-Unis',
	},
];

const container = document.querySelector('.container');
for (const film of filmsArray) {
	const titre = document.createElement('h1');
	titre.classList.add('titre');
	titre.textContent = film.title;
	console.log(film.title);
	const div = document.createElement('div');
	div.classList.add('card');
	container.appendChild(div);
	div.appendChild(titre);

	const texte = document.createElement('p');
	texte.classList.add('texte');
	texte.textContent = film.name;
	console.log(film.name);
	div.appendChild(texte);

    const description = document.createElement('p');
	description.classList.add('description');
	description.textContent = film.description;
	console.log(film.description);
	div.appendChild(description);

    const genre = document.createElement('h2');
	genre.classList.add('genre');
	genre.textContent = film.genre;
	console.log(film.genre);
	div.appendChild(genre);

    const ambiance = document.createElement('h3');
	ambiance.classList.add('ambiance');
	ambiance.textContent = film.ambiance;
	console.log(film.ambiance);
	div.appendChild(ambiance);

    const origin = document.createElement('h3');
	origin.classList.add('origin');
	origin.textContent = film.origin;
	console.log(film.origin);
	div.appendChild(origin);
}
