import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, fetchComments, removePost } from '../../Redux/Actions/action'
import { combimePost } from '../../Redux/Actions/action'
import  './newsList.scss'

export const NewsList = ({posts}) => {

  const dispatch = useDispatch()
  const selector = useSelector(state => state.rootReducer)

  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage, setPostsPerPage] = useState(10)

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

console.log(posts)
  useEffect(() => {
    const combinePost = posts?.map(post => ({
       ...post, 
       user: selector.users?.find(user => post.userId === user.id), 
       comment: selector?.comments?.find(comment => post.id === comment.postId)
      }))
    return dispatch(
      combimePost(
        {
          post: combinePost,
        }
      )
    )
  }, [selector.posts, selector.users, selector.comments])


  return <>
    {selector?.post?.post?.map((res, i) => (
      <div className="card text-center" key={i}>
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