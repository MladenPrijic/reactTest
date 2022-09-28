import React from 'react';
import './main.css';

const Main = (props) => {
  const { children } = props;
  return <main className={`main`}>{children}</main>;
};

export default Main;
