import { useState } from "react";
import styles from "./Profile.module.css";

const Profile = () => {
	const [formState, setFormState] = useState({
		prenom: "",
		nom: "",
		competence: "",
	});

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
		const result = {
			firstName: formState.prenom,
			lastName: formState.nom,
			skills: formState.competence
				.split(",")
				.map((skill) => capitalizeFirstLetter(skill.trim())),
		};
		console.log(result);
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
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="nom">Nom</label>
						<input
							type="text"
							id="nom"
							name="nom"
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
