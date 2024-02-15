import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { setName } from "./store/user.action.js";
import { setCompetence } from "./store/user.action.js";

const Profile = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const skills = useSelector((state) => state.skills);

	const [formState, setFormState] = useState({
		prenom: user.firstName || "",
		nom: user.lastName || "",
		competence: skills.join(", ") || "",
	});

	useEffect(() => {
		setFormState({
			prenom: user.firstName || "",
			nom: user.lastName || "",
			competence: skills.join(", ") || "",
		});
	}, [user, skills]);

	const handleInputChange = (event) => {
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const capitalizeFirstLetter = (string) => {
			return string.charAt(0).toUpperCase() + string.slice(1);
		};
		let skills = formState.competence
			.split(",")
			.map((skill) => capitalizeFirstLetter(skill.trim()));
		skills = skills.filter((skill) => skill !== "");
		const result = {
			firstName: formState.prenom,
			lastName: formState.nom,
			skills: skills,
		};

		dispatch(
			setName({ firstName: result.firstName, lastName: result.lastName })
		);
		dispatch(setCompetence(result.skills));
	};

	return (
		<div className={styles.profile}>
			<h1>Mon profil</h1>

			<form onSubmit={handleSubmit} className={styles.formulaire}>
				<div className={styles.nameGroup}>
					<div>
						<label htmlFor="prenom">Prénom</label>
						<input
							type="text"
							id="prenom"
							name="prenom"
							value={formState.prenom}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="nom">Nom</label>
						<input
							type="text"
							id="nom"
							name="nom"
							value={formState.nom}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div className={styles.compGroup}>
					<label htmlFor="competence">Compétences</label>
					<input
						type="text"
						id="competence"
						name="competence"
						value={formState.competence}
						placeholder="Vos compétences, séparées par des virgules"
						onChange={handleInputChange}
					/>
				</div>

				<div className={styles.buttonGroup}>
					<button type="submit">SAUVEGARDER</button>
				</div>
			</form>
		</div>
	);
};

export default Profile;
