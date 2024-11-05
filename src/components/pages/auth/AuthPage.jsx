import React, { useState } from 'react';

import Login from './Login';
import Signin from './Signin';

const AuthPage = () => {
  const [toggleForm, settoggleForm] = useState(false);
  document.title = `Quik ${toggleForm ? 'login' : 'sign'} `;

  let form = <Login toggleData={[toggleForm, settoggleForm]} />;
  if (toggleForm) {
    form = <Signin toggleData={[toggleForm, settoggleForm]} />;
  }
  return (
    <div className="flex items-center justify-center flex-col">{form}</div>
  );
};

export default AuthPage;
