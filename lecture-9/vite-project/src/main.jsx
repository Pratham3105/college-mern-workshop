// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>  
//     <App    />
//     </BrowserRouter>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './Context.jsx'
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>  
    <Context.Provider    value='hellooooooo'>  
    <App    />
    </Context.Provider>
    </BrowserRouter>
  </StrictMode>,
)