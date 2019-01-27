import apiRequest from '../apis/apiRequest';

//need to add action to call fetchWords then

export const fetchWords = words => async dispatch => {
	const response = await apiRequest.get('/puzzle', {
		params: {
			wordCount: words,
		},
	});

	dispatch({ type: 'FETCH_WORD', payload: response.data });
};

export const guessLetters = char => (dispatch, getState) => {
	if (
		!getState().guessedLetters.includes(char.toLowerCase()) &&
		!getState().guessedLetters.includes(char.toUpperCase())
	) {
		dispatch({ type: 'GUESSED_LETTER', payload: char });
	}

	console.log(getState().guessedLetters);
	console.log(getState().puzzle.word.includes(char));
};

//need to blank out characters from state words and display * instead until they have been guessed
