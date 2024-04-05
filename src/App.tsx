import React from 'react'
import {
  useRoutes,
} from 'react-router-dom'
import SignIn from './pages/SignIn'
import MainFoodTable from './pages/MainFoodTable'

export default function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/main',
      element: <MainFoodTable />
    },
  ])

  return routes
}