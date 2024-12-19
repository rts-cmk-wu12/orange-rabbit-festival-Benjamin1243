import { useState } from 'react'
import { useRoutes } from 'react-router'
import routes from "~react-pages"
import "./styles/index.scss"


function App() {


  return (
   <>
   {useRoutes(routes)}
   </>
  )
}

export default App
