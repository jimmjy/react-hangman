import { combineReducers } from 'redux';
import wordReducer from './wordsReducer';
import guessedLetters from './guessedLetters';
import remainingGuesses from './remainingGuesses';

export default combineReducers({
	puzzle: wordReducer,
	guessedLetters: guessedLetters,
	remainingGuesses: remainingGuesses,
});

//need a reducer for guessed letters to store guesses
