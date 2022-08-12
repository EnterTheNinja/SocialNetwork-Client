import React, { createContext } from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import PostData from './network/PostData';
import UserAuth from './network/UserAuth'; 

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Context.Provider
  value={{
    user: new UserAuth(),
    post: new PostData(),
  }}>
      <App />,
  </Context.Provider>)
