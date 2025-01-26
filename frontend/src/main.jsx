import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <RouterProvider router={router} />
</Provider>,
)
