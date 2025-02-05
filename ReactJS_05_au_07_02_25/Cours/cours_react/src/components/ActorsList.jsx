import result from '../result';

function ActorsList() {
	return (
		<div>
			<h2>Liste des Acteurs</h2>
			{result.map((actor) => (
				<div
					key={actor.id}
					style={{
						border: '1px solid #ccc',
						padding: '10px',
						marginBottom: '20px',
					}}
				>
					<h3>{actor.name}</h3>
					<img
						src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
					/>

					<h4>Films :</h4>
					<ul>
						{actor.known_for.map((movie) => (
							<li key={movie.id}>
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								/>
								<h2>{movie.title}</h2>

								<p>{movie.overview}</p>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export default ActorsList;
