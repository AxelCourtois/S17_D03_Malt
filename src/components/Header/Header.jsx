import logo from "../../assets/images/React-icon.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const { fullName } = useSelector((state) => state.user);
	const skills = useSelector((state) => state.skills);
	const skillsCount = skills.length;

	return (
		<div className={styles.menu}>
			<NavLink to="/">
				<img src={logo} className={styles.logo} alt="logo React" />
			</NavLink>
			<nav>
				<ul className={styles.link}>
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => ({ color: isActive ? "#0fbcf9" : "" })}
						>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/profile"
							style={({ isActive }) => ({ color: isActive ? "#0fbcf9" : "" })}
						>
							Mon profil
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className={styles.info}>
				<p className={styles.name}>{fullName}</p>
				<p className={styles.comp}>
					{skillsCount === 0 ? "Aucune" : skillsCount} compétence
					{skillsCount > 1 ? "s" : ""}
				</p>
			</div>
		</div>
	);
};
export default Header;
