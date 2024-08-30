import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { AppWrappers } from './components/AppWrappers/AppWrappers';
import { router } from './routes/routes';


createRoot(document.getElementById('root')!).render(
  <AppWrappers>
    <RouterProvider router={router} />
  </AppWrappers>
  ,
);
