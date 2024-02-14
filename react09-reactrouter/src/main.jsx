import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { ContactUS } from './pages/ContactUS.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Profiles } from './pages/Profiles.jsx'
import { Profile } from './pages/Profile.jsx'
import GitHub, {githubInfoLoader} from "./pages/GitHub.jsx";
import Layout from './pages/Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout />}>

        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUS />} />
        <Route path='profiles' element={<Profiles />} >
          <Route path=':profileID' element={<Profile/>} />
        </Route>
        <Route loader={githubInfoLoader}path='github' element={<GitHub />}/>

      </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)





