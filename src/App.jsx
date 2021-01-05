import React, { useEffect } from 'react'
import { fetchPosts, fetchUsers, fetchComments } from './Redux/Actions/action'
import { useDispatch, useSelector } from 'react-redux'

import './App.scss'
import { NewsList } from './Components/NewsList/NewsList'

export const App = () => {

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
    <NewsList  />
    <h1>App</h1>
  </>
}
