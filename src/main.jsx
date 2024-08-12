import React, { children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { useRoutes } from 'react-router'
import Welcome from './components/Welcome.jsx'
import {Form} from './components/Form.jsx'
import { BrowserRouter } from 'react-router-dom'
import AddPartyForm from './components/AddPartyForm.jsx'
import PoliticalParties from './components/PoliticalParties.jsx'
import Result from './components/Result.jsx'
const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '', element: <Welcome /> },
        { path: 'parties', element: <PoliticalParties /> },
        { path: 'form', element: <Form /> },
        { path: 'add-party', element: <AddPartyForm /> },
        {path: 'result', element: <Result />},
      ]
    }
  ]);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
