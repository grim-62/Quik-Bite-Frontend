import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Router from './routers/Router';

const App = () => {
  const navigate = useNavigate();

  const checkToken = () => {};

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <div className="h-auto max-w-screen overflow-hidden">
      <Router />
    </div>
  );
};

export default App;
