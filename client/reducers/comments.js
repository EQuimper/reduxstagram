// A reducer takes in 2 things
// 1. The action (info about what happened)
// 2. Copy of the current state

function postComment(state = [], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			// Return the new state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			// Return the new state whitout this comment
			return [
				// From the start to the one with want to delete
				...state.slice(0, action.i),
				// After the delete one to the end
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// Take the current state
			...state,
			// Overwrite with a new comment
			[action.postId]: postComment(state[action.postId], action)
		}
	}
	return state;
}

export default comments;
