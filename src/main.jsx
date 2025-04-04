import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Service from './Component/Service.jsx'
import Github from './Component/Github.jsx'
import Contact from './Component/Contact.jsx'
import Content from './Component/Content.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {path:'/',
//     element: <App/>,
//     children:[
//       {path:'',
//         element: <Home/>,
//       },
//       {path:'about',
//         element: <About/>,
//       },
//       {path:'service',
//         element: <Service/>
//       },
//       {path:'contact',
//         element: <Contact/>
//       },
//       {path:'github',
//         element: <Github/>
//       },

      
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<App/>}>
       <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='github' element={<Github/>} />
    <Route path='service' element={<Service/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='/:searchId' element={<Content/>} />
   </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} ></RouterProvider>
    </StrictMode>,
)
