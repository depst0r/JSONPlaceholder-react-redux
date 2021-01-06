import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, fetchComments } from '../../Redux/Actions/action'

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
    {/* <button onClick={() => test()}>test</button> */}
      {selector.posts.filter(post => (
        selector.users.some(user => {
          if (post.userId === user.id) {
            console.log(post)
            console.log(user)
          }
        })
      ))}
        <h1>NewsList</h1>
    </>
}