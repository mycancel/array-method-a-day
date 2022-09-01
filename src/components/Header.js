import React from 'react';
import methods from '../methods';
import Select from "./Select"

const Header = (props) => {
  return (
    <header>
      <h1>An Array Method A Day</h1>
      <p>Select a method for more information.</p>
      <Select methods={methods} {...props}/>
    </header>
  )
}

export default Header