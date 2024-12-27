import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/HomePage.jsx'
import Error from './components/404Page.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import BookDetails from './components/BookDetails.jsx'


const appRouter = createBrowserRouter([


  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Home/>,
        
      }, 
      
      {
        path:'/BrowseBooks',
        element:<BrowseBooks/>
      },
      {
        path:"/BrowseBooks/:Category",
        element:<BrowseBooks/>
      },
      {
        path:'/AddBook',
        element:<AddBook/>
      },
      {
        path:"/BookDetails/:id",
        element:<BookDetails/>
      },
      

    ],
    errorElement:<Error/>,
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
