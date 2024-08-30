import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Notifier } from './components/Notifier/Notifier';
import { Preloader } from './components/Preloader/Preloader';


function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <Notifier />
    </>
  );
}

export default App;
