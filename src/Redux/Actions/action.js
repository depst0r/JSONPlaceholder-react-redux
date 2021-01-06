export const fetchPosts = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'getPosts', data: res }))
    }
}

export const fetchUsers = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'getUsers', data: res }))
    }
}

export const fetchComments = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/comments/`)
        .then(res => res.json())
        .then(res => dispatch({ type: 'getComments', data: res }))
    }
}