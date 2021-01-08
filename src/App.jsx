import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'
import { Header } from './Components/Header/Header'
import { NewsList } from './Components/NewsList/NewsList'

export const App = () => {
  return <>
    <div className="container">
      <div className="root">
        <Header />
        <NewsList />
      </div>
    </div>
  </>
}
