import { combineReducers } from 'redux';
import wordReducer from './wordsReducer';

export default combineReducers({
	words: wordReducer,
});
