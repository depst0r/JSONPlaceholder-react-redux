import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, fetchComments } from '../../Redux/Actions/action'
import { combimePost } from '../../Redux/Actions/action'

export const NewsList = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.rootReducer)


    useEffect(() => {
        dispatch(
          fetchPosts()
        )
      }, [])
    
      useEffect(() => {
        dispatch(
          fetchUsers()
        )
      }, [])
    
      useEffect(() => {
        dispatch(
          fetchComments()
        )
      }, [])

      // useEffect(() => {
      //   selector.posts.filter(post => (
      //     selector.users.some(user => {
      //       if (post.userId === user.id) {
      //         dispatch(
      //           combimePost(
      //             {
      //               post: post,
      //               user: user
      //             }
      //           )
      //         )
      //       }
      //     })
      //   ))
      // })

      // useEffect(() => {
      //   const a = selector.posts
      //   const b = selector.users
      //   const result = a.filter(v => {
      //      b.filter(v2 => {
      //         if (v.userId === v2.id) {
      //           console.log(
      //             v.title + v2.name
      //           )
      //         } 
      //     })
      // })
        
      // console.log('result', result)
      // })

      // const test = () => {
      //   const a = selector.posts
      //   const b = selector.users

      //   const result = a.filter(v => {
      //     return b.some(v2 => {
      //         if (v.userId === v2.id) {
      //           console.log(
      //             v.title + v2.name
      //           )
      //         } 
      //     })
          
      // })
      // }


    return<>
    <button onClick={() => test()}>test</button>
      
        <h1>NewsList</h1>
    </>
}