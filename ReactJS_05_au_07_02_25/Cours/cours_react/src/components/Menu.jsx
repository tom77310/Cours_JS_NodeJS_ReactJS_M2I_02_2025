/* eslint-disable react/prop-types */
// Cours partie 2 05/02/2025
import MenuItem from './MenuItem';
import styles from './Menu.module.css';

function Menu({ links }) {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.menu}>
					{(links || []).map((oneLink) => (
						<MenuItem
							key={oneLink.href}
							href={oneLink.href}
							content={oneLink.content}
						/>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Menu;

