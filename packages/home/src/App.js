import React from 'react';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({isSignedIn, user}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Landing isSignedIn={isSignedIn} user={user} />
      </StylesProvider> 
    </div>
  );
};
