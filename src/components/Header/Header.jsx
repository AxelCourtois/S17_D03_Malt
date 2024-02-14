import { Link } from "react-router-dom";
import logo from "../../assets/images/React-icon.png";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
	const { fullName } = useSelector((state) => state.user);

	return (
		<div className={styles.menu}>
			<Link to="/">
				<img src={logo} className={styles.logo} alt="logo React"></img>
			</Link>
			<nav>
				<ul className={styles.link}>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/profile">Mon profil</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.info}>
				<p className={styles.name}>{fullName}</p>
				<p className={styles.comp}>Aucune compétence</p>
			</div>
		</div>
	);
};

export default Header;
