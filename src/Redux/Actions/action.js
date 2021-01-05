export const fetchPosts = id => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'getPosts', data: res }))
    }
}

export const fetchUsers = id => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'getUsers', data: res }))
    }
}

export const fetchComments = id => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(res => dispatch({ type: 'getComments', data: res }))
    }
}