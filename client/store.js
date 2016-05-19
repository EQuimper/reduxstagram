import {
	createStore,
	compose
} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import reducer
import rootReducer from './reducers/index';

// Import the data
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
	posts,
	comments
};

// Create store
const store = createStore(
	rootReducer,
	defaultState,
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
