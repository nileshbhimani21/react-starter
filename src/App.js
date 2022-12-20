import React, { Suspense } from 'react';
import { Spiner } from './component/Spiner';
import MainRoutes from './routes/MainRoutes';
import { ToastContainer } from 'react-toastify'
import './App.scss';
import { Provider } from 'react-redux';

const App = ({ store}) => {

  return (<>
    <Provider store={store}>
      <Suspense fallback={<Spiner />}>
        <MainRoutes />
      </Suspense>
      <ToastContainer theme="colored" autoClose={2000} limit={1} />
    </Provider>
  </>);
}

export default App;
