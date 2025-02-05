// Exemple API

const requeteButton = document.querySelector('.requete');
const containerGOT = document.querySelector('.GOT');

requeteButton.addEventListener('click', async () => {
    //https://thronesapi.com/api/v1/characters/

    const reponse = await fetch('https://thronesapi.com/api/v1/characters/');

    console.log(reponse);

    if (reponse.ok) {
        const data = await reponse.json();

        console.log(data);

        for (const character of data) {
            const p = document.createElement('p');
            p.textContent = character.name;
            containerGOT.appendChild(p);
        }
    }
});

// Exo API Pokemon

const MontrerPokemon = document.querySelector('.montrer');
const ListePokemon = document.querySelector('.pokemon');

MontrerPokemon.addEventListener('click', async () => {
    const response = await fetch('https://tyradex.vercel.app/api/v1/pokemon');
    console.log(response);

    if (response.ok) {
        const donnée = await response.json();

        console.log(donnée);
        for (const pokemon of donnée) {
            const texte = document.createElement('p');
            texte.textContent = "Nom du pokémon en Français :" + pokemon.name.fr;
            ListePokemon.appendChild(texte);
            
            const image = document.createElement('img');
            image.src = pokemon.sprites.regular;
            ListePokemon.appendChild(image);
        }
        
    }
    
})