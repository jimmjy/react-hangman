export default (state = [' '], action) => {
	switch (action.type) {
		case 'GUESSED_LETTER':
			return [...state, action.payload];
		case 'RESET_GUESSED_LETTERS':
			return [' '];
		default:
			return state;
	}
};
