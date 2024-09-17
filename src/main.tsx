import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Data } from './components/data'
import App from './App'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/animeData',
    element:  <Data />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
