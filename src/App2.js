import React from 'react'
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App2 = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />}>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        )
    )
  return (
    <div><RouterProvider router={router} /></div>
  )
}

const Root = () => {
    return <>
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About pe jaana hai ?</Link>
        <Link to="/contact">Contact karna hai ?</Link>
        </div>
        <div>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </>
}

export default App2