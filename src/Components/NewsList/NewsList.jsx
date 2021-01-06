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


useEffect(() => {
 const news =  selector.posts?.map(post => ({ ...post, user: selector.users?.find(user => post.userId === user.id) }))
 return dispatch(
      combimePost(
        {
          post: news
        }
      )
  )

}, [selector.posts, selector.users])


    return<>
        <h1>NewsList</h1>
    </>
}