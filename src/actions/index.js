import apiRequest from '../apis/apiRequest';

export const fetchWords = words => async dispatch => {
	const response = await apiRequest.get('/puzzle', {
		params: {
			wordCount: words,
		},
	});

	dispatch({ type: 'FETCH_WORD', payload: response.data });
};
