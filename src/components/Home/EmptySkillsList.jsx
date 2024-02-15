import { Link } from "react-router-dom";

export const EmptySkillsList = () => {
	return (
		<p>
			Veuillez remplir <Link to="/profile"> votre profil </Link> pour continuer.
		</p>
	);
};
