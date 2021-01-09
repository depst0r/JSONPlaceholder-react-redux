import { COMBINE_POST } from '../Actions/actionType'

const initialState = {
    posts: null,
    users: null,
    comments: null,
    post: null
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
        case 'removePost':
                console.log('removepost', state.post.post)
            return {
                ...state,
                post: state.post.post.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}