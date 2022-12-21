import React from "react";
import router from './router';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import LocalStorageProvider from "./utils/local-storage-provider";

const App = () => {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <LocalStorageProvider>
            <RouterProvider router={router} />
          </LocalStorageProvider>
        </Provider>
      </React.StrictMode>
    </>
  );
}
export default App;
