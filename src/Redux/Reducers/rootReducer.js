import { COMBINE_POST } from '../Actions/actionType'

const initialState = {
    posts: null,
    users: null,
    comments: null,
    post: null,
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
            return {
                ...state,
                posts: state.post.post.filter(item => item.id !== action.payload)
            }
        case 'addPost':
            console.log(action.data)
            return {
                ...state,
                posts: state.posts.concat(action.data)
            }
        default:
            return state
    }
}