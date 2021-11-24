import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-expand-sm  navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          {branding}
        </a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">

            <Link className="nav-link" to="/">
               <i className="fas fa-home"></i> Home
            </Link>
        </li>
        <li className="nav-item">

            <Link className="nav-link" to="/about">
                <i className="fas fa-question"></i>About
            </Link>
        </li>
        <li className="nav-item">

            <Link className="nav-link" to="/contacts/add">
              <i className="fas fa-plus"></i>  Add
            </Link>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
