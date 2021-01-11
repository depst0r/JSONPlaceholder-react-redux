import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, fetchComments, removePost } from '../../Redux/Actions/action'
import { combimePost } from '../../Redux/Actions/action'
import  './newsList.scss'

export const NewsList = ({ posts }) => {

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
    const combinePost = selector?.posts?.map(post => ({
       ...post, 
       user: selector.users?.find(user => post.userId === user.id), 
       comment: selector?.comments?.find(comment => post.id === comment.postId)
      }))
      console.log(combinePost)
    return dispatch(
      combimePost(
        {
          post: combinePost,
        }
      )
    )
  }, [selector.posts, selector.users, selector.comments])


  return <>
    {posts?.map(res => (
      <div className="card text-center" key={res.id}>
        <div className="card-header">
          {res.user?.name}
        </div>
        <div className="card-body">
          <h5 className="card-title">{res.title}</h5>
          <p className="card-text">{res.comment?.body}</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(removePost(res.id))}
          >DELETE</button>
        </div>
        <div className="card-footer text-muted">

        </div>
      </div>
    )
    )}
  </>
}