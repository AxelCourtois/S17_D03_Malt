import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => (
	<div className={styles.header}>
		<h1>Bienvenue !</h1>
		<p>
			Veuillez remplir <Link to="/profile"> votre profil </Link> pour continuer.
		</p>
	</div>
);

export default Home;
