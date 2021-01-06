import { COMBINE_POST } from '../Actions/actionType'

const initialState = {
    users: [],
    posts: [],
    comments: [],
    post: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                posts: action.data
            }
        case 'getUsers':
            return {
                ...state,
                users: action.data
            }
        case 'getComments':
            return {
                ...state,
                comments: action.data
            }
        case COMBINE_POST :
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}