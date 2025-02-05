// Exo1 05/02/2025
/* eslint-disable react/prop-types */
function Article({ titre, children }) {
	return (
		<>
			<div>
				<h2>Titre : {titre}</h2>

                <div>{children}</div>
            </div>    
		</>
	);
}

export default Article;
