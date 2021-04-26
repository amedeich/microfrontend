import { mount } from 'header/HeaderApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({isSignedIn, onSignOut}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignOut,
      isSignedIn
    });

    history.listen(onParentNavigate);
  }, [isSignedIn]);

  return <div id="navigation-bar" ref={ref} />;
};
