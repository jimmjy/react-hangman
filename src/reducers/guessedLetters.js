export default (state = [], action) => {
	switch (action.type) {
		case 'GUESSED_LETTER':
			return [...state, action.payload];
		default:
			return state;
	}
};
