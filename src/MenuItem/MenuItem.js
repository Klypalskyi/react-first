import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ active, link, name }) => {
  return (
    <li className={active && 'active'}>
      <a className="menu-item" href={link}>
        {name}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
