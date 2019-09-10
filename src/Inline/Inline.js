import React from 'react';
import img from './forest.jpg';

const Inline = () => {
  const navStyles = {
    width: '25%',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${img})`,
    backroundPosition: 'center',
    backgrundSize: 'cover',
  };

  return <div style={{ ...navStyles }} />;
};

export default Inline;
