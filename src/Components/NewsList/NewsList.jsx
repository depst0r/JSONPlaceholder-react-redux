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
    const combinePost = selector.posts?.map(post => ({ ...post, user: selector.users?.find(user => post.userId === user.id) }))
    return dispatch(
      combimePost(
        {
          post: combinePost,
        }
      )
    )
  }, [selector.posts, selector.users])
// console.log(selector.post.post?.map(res => res.user.name))
console.log('eddddddddddr', selector.post?.post)

if (selector.post?.post === undefined) {
  console.log('loading')
} else {
  console.log('hjrrr', selector.post?.post);
}

  return <>
  {/* {selector.post.post?.map((res, i) => ( 
  <p key={i}>{res.title}
  </p>
   )
  )} */}
    <h1>NewsList</h1>
  </>
}