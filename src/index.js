import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.styles.scss';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Our Routes & NavBar components
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/login/login.component';
import Registration from './routes/registration/registration.component';
import Home from './routes/home/home.component';
import GameContainer from './components/game-container/game-container.component';
import Slots from './routes/slots/slots.component';
import ErrorPage404 from './routes/404/error-page-404.component';

// Setting up our router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      <Route path="games" element={<GameContainer />} />
      <Route path="slots" element={<Slots />} />
      <Route path="*" element={<ErrorPage404 />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
