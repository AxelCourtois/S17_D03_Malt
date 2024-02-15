import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const SkillsList = ({ skills }) => {
	return (
		<>
			<h2>Vos compétences</h2>
			<ul>
				{skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
			<div className={styles.profile}>
				<Link to="/profile"> Modifier mes compétences </Link>
			</div>
		</>
	);
};
