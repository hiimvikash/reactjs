import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { ContactUS } from './pages/ContactUS.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Profiles } from './pages/Profiles.jsx'
import { Profile } from './pages/Profile.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
    errorElement : <NotFound/>
    
  },
  {
    path : '/about',
    element : <About/>,
    
  }, 
  {
    path : '/contact',
    element : <ContactUS/>
  },
  {
    path : '/profiles',
    element : <Profiles/>, 
    children :[
      {
        path : '/profiles/:profileID',
        element : <Profile/>
      }
    ]
  }
    
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
