import React, { Suspense } from 'react';
import { Spiner } from './component/Spiner';
import MainRoutes from './routes/MainRoutes';
import { ToastContainer } from 'react-toastify'
import './App.scss';

const App = () => {

  return (<>
        <Suspense fallback={<Spiner />}>
          <MainRoutes />
        </Suspense>
        <ToastContainer theme="colored" autoClose={2000} limit={1} />     
        </>);
}

export default App;
