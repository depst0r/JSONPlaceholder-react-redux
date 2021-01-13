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

// export const addPost = () => {
//     return dispatch => {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//           }
//           ).then(res => res.json())
//           .then(res => dispatch({ type: 'addPost', data: {
//               body: res.body,
//               title: res.title,
//               userId: res.userId,
//               id: res.id
//           } })).then(res => console.log(res))
//     }
// }

export const addPost = (title, body, userId, id) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
            //   body: body,
            //   userId: userId,
            //   id: id
            }), 
             headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
          }).then(res => res.json())
                    .then(res => dispatch({ type: 'addPost', data: res })).then(res => console.log(res))
    }
}

export const combimePost = arr => ({ type: COMBINE_POST, payload: arr })