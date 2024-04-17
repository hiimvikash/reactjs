import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    {/* <React.Suspense fallback={<div>Loading...</div>}> */}
    <App />
    {/* </React.Suspense> */}
    </RecoilRoot>
  </React.StrictMode>,
)
