export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_WORD':
			return [action.payload];
		default:
			return state;
	}
};
