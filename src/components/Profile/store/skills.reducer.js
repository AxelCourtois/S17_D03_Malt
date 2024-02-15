import { SET_COMPETENCE } from "./user.action";

const initialState = [];

const skillsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_COMPETENCE: {
			return action.payload || state;
		}
		default:
			return state;
	}
};

export default skillsReducer;
