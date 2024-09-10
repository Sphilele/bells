import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Story from './pages/Story'
import Chat from './components/Chat';
import RootLayout from './pages/Root'
import Contact from './Forms/Contact';
import Signup from './Forms/Signup';
import Quiz from './quiz/Quiz';
import Brides from './guests/Brides';
import ErrorPage from './pages/ErrorPage';
import NewLogin from './Forms/NewLogin';

const router = createBrowserRouter([
{ 
  path: '/', 
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {index: true, element: <Home />},
    {path: '/story', element: <Story />},
    {path: '/chat', element: <Chat />},
    {path: '/contact', element: <Contact />},
    {path: '/newlogin', element: <NewLogin />},
    {path: '/signup', element: <Signup />},
    {path: '/quiz', element: <Quiz />},
    {path: '/brides', element: <Brides />},

  ],
},
]);


function App () {
  return (
    <RouterProvider router={router} /> 
   )
}

export default App
