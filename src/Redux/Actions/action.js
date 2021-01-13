import { COMBINE_POST } from './actionType'

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

export const removePost = id => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE', 
    })
    dispatch({ type: 'removePost', payload: id })
    }
}

export const addPost = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
          }
          ).then(res => res.json())
          .then(res => dispatch({ type: 'addPost', data: {
              body: res.body,
              title: res.title,
              userId: 1,
              id: 1
          } }))
    }
}

export const combimePost = arr => ({ type: COMBINE_POST, payload: arr })