import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, fetchUsers, fetchComments, removePost } from '../../Redux/Actions/action'
import { combimePost } from '../../Redux/Actions/action'
import  './newsList.scss'

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
    const combinePost = selector.posts?.map(post => ({
       ...post, 
       user: selector.users?.find(user => post.userId === user.id), 
       commetn: selector?.comments?.find(comment => post.id === comment.postId)
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
          // <div className="beloremepsum" key={i}>
          // <div className="kaluteraturesom">
          //   <h3 className="nagetap-kopulas">{res.user?.name}</h3>
          //   <p className="dinapiecd-esadsica">{res.title}</p>
          //   <button 
          //   className="btn btn-outline-danger"
          //   onClick={() => dispatch(removePost(res.id))}
          //   >DELETE</button>
          // </div>
          // </div>
          <div class="card text-center" key={i}>
          <div class="card-header">
          {res.user?.name}
          </div>
          <div class="card-body">
            <h5 class="card-title">{res.title}</h5>
            <p class="card-text">{res.comment?.body}</p>
              <button 
            className="btn btn-outline-danger"
          onClick={() => dispatch(removePost(res.id))}
           >DELETE</button>
          </div>
          <div class="card-footer text-muted">
            
          </div>
        </div>
    )
    )}
  </>
}