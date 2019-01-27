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

		//if puzzle word does not contain letter or is not space, reduce guesses
		if (
			!getState().puzzle.word.includes(char.toLowerCase()) &&
			!getState().puzzle.word.includes(char.toUpperCase())
		) {
			dispatch({ type: 'DECRESS_GUESSES' });
		}
	}
};

export const resetGuesses = () => {
	return { type: 'RESET_GUESSES' };
};
export const resetGuessedLetters = () => {
	return { type: 'RESET_GUESSED_LETTERS' };
};
