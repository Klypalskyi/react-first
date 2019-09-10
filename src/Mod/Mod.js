import React from 'react';
import classNames from 'classnames/bind';
import style from './Mod.module.css';

const classes = classNames.bind(style);

function Mod() {
  return (
    <div className={style.main}>
      <h2 className={`${style.title} ${style.white}`}>Mod Sidebar Title</h2>

      <h3
        className={classes({
          title: true,
          white: true,
        })}
      >
        Subtitle
      </h3>
    </div>
  );
}

export default Mod;
