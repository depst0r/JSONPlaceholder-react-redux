import React, { useEffect, useState } from 'react'
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

    return<>
    {selector.posts.map(res => (
      <h4>{res.name}</h4>
    ))}
        <h1>NewsList</h1>
    </>
}