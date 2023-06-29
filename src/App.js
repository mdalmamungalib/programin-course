import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Components/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='dark:bg-gray-900'>
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
    
  );
}

export default App;
