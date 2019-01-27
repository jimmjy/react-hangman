export default (state = 5, action) => {
	switch (action.type) {
		case 'REMAINING_GUESSES':
			return state - 1;
		default:
			return state;
	}
};
