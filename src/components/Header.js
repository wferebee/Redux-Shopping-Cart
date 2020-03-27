import React from 'react';
import './Header.css';
import url from '../assets/banner';

const Header = () => (
  <div className="header">
    <img className="headerImg" src={url} alt="Advance" />
  </div>
)
export default Header;

/*  Header is set up like this because it needs no state and is not being handed any props. I saved the image url as
a variable just so the header component was a little more clean looking. */