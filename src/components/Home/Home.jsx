import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { EmptySkillsList } from "./EmptySkillsList";
import { SkillsList } from "./SkillsList";

const Home = () => {
	const { firstName, lastName } = useSelector((state) => state.user);
	const skills = useSelector((state) => state.skills);

	return (
		<div className={styles.content}>
			<h1>
				Bienvenue {firstName} {lastName} !
			</h1>
			{skills.length > 0 ? <SkillsList skills={skills} /> : <EmptySkillsList />}
		</div>
	);
};

export default Home;
