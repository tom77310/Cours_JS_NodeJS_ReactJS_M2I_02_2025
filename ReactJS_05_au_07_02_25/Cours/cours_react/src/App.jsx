// import Article from './components/Article';
// import Name from './components/Name';
import ActorsList from './components/searchActors/ActorsList';
import Menu from './components/Menu';
import result from './result';

function App() {
	// const MyName = `Thomas`;
	// const titreArticle = `Titre de l'article`; // => pour l'xo 1 et la suite du cours 05/02/2025
	console.log(result);

	return (
		<>
			{/* Cours 1 05/02/2025 */}
			{/* <Name name={MyName}></Name> */}
			{/* <Name></Name>
			<Name></Name> */}

			{/* Exo1 05/02/25 */}
			{/* <Article titre={titreArticle}></Article> */}

			{/* Cours 1 partie 2 05/02/2025 */}
			{/* <Menu></Menu>
			<Article titre="test">
				<Name name={MyName}></Name>
				<Name></Name>
				<Name></Name>
			</Article> */}
			{/* exo 3 05/02/2025 */}
			<Menu></Menu>
			{/*Cours1 partie3 05/02/2025 et Cours2 partie 1 06/02/2025 */}
			<div>
				<h1>Acteurs et Films</h1>
				<ActorsList />
			</div>
		</>
	);
}

export default App;
