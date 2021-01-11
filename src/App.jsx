import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'
import { Header } from './Components/Header/Header'
import { NewsList } from './Components/NewsList/NewsList'
import { Pagination } from './Components/Pagination/Pagination'
import { AddPost } from './Components/AddPost/AddPost'

export const App = () => {

  const selector = useSelector(state => state.rootReducer)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = selector?.post?.post?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return <>
    <div className="container">
      <div className="root">
        <Header />
        <AddPost />
        <NewsList posts={currentPosts} />
        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={selector?.posts?.length} 
          paginate={paginate}
        />
      </div>
    </div>
  </>
}
