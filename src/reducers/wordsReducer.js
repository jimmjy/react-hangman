export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_WORD':
			return { word: action.payload.puzzle };
		default:
			return state;
	}
};
