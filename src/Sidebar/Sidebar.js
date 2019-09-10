import React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem/MenuItem';

const Sidebar = ({ menu }) => {
  // const status = false;

  return (
    <ul className="sidebar">
      {menu.map(obj => (
        <MenuItem name={obj.name} link={obj.link} key={obj.id} />
      ))}

      {/* <MenuItem name="Dashboard" link="/dashboard" />
            <MenuItem name="User" link="/user" active={true} />
            <MenuItem name="Contacts" link="/contacts" /> */}
    </ul>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Sidebar;
