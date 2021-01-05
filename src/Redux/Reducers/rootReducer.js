const initialState = {
    users: [],
    posts: [],
    comments: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                users: action.data
            }
        case 'getUsers':
            return {
                ...state,
                posts: action.data
            }
        case 'getComments':
            return {
                ...state,
                comments: action.data
            }
        default:
            return state
    }
}