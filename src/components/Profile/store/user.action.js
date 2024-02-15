export const SET_NAME = "SET_NAME";
export const SET_COMPETENCE = "SET_COMPETENCE";

export function setName({ firstName, lastName }) {
	let payload = {
		firstName,
		lastName,
	};
	return {
		type: SET_NAME,
		payload,
	};
}

export function setCompetence(skills) {
	return {
		type: SET_COMPETENCE,
		payload: skills,
	};
}
