import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'
import { Header } from './Components/Header/Header'
import { NewsList } from './Components/NewsList/NewsList'

export const App = () => {

  const selector = useSelector(state => state.rootReducer)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = selector?.posts?.slice(indexOfFirstPost, indexOfLastPost)


  return <>
    <div className="container">
      <div className="root">
        <Header />
        <NewsList posts={currentPosts}/>
      </div>
    </div>
  </>
}
