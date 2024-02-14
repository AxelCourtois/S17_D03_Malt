export const SET_NAME = "SET_NAME";

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
