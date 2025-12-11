import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Training from './pages/Training'
import Contact from './pages/Contact'
import RootLayout from './layout/rootLayout'
import { RouterProvider } from 'react-router-dom'

const App = () => {

  const routerData= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='training' element={<Training />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routerData}/>
    </>
  )
}

export default App
