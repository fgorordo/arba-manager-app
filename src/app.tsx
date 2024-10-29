import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';

import { appRouter, store } from '@/core';

export const App = () => {
  return (
    <Provider store={store}>
        <RouterProvider router={appRouter} />
    </Provider>
  )
}
