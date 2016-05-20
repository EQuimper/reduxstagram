// A reducer takes in 2 things
// 1. The action (info about what happened)
// 2. Copy of the current state

function posts(state = [], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			return [
				...state.slice(0, i), //before the one we updating
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1)
			]
		default:
			return state;
	}
}

export default posts;
