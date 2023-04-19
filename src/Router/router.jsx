import { createBrowserRouter } from 'react-router-dom'
import Index from '../Index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  }
])
