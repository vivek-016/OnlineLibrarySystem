import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import {Provider} from 'react-redux'
import BooksStore from './utils/booksStore'

function App() {
  

  return (
    <Provider store={BooksStore}>
      <div className='App'>
        <Header/>
        <Outlet/>
        
      </div>
    </Provider>
  )
}

export default App;
