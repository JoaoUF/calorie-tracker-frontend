import React from 'react'
import {
  useRoutes,
} from 'react-router-dom'
import SignIn from './pages/SignIn'
import MainFoodTable from './pages/MainFoodTable'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'

export default function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <AuthProvider />,
      children: [
        {
          path: '/',
          element: <SignIn />
        },
        {
          path: '/',
          element: <PrivateRoute />,
          children: [
            {
              path: 'main',
              element: <MainFoodTable />
            },
          ]
        },
      ]
    },
  ])

  return routes
}

/*
 {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/main',
      element: <MainFoodTable />
    },
*/