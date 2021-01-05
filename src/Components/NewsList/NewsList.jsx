import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, fetchComments } from '../../Redux/Actions/action'

export const NewsList = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.rootReducer)

console.log('users', selector.users)
console.log('posts', selector.posts)
console.log('comments', selector.comments)


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

    return<>
        <h1>NewsList</h1>
    </>
}