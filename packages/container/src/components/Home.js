import { mount } from 'home/HomeApp';
import React, { useRef, useEffect } from 'react';

export default ({isSignedIn, user}) => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(isSignedIn, user)
    mount(ref.current, {isSignedIn, user});
  }, [isSignedIn]);

  return <div ref={ref} />
};
