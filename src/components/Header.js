import React from 'react';
import methods from '../methods';
import SelectItems from "./SelectItems"

const Header = () => {
  return (
    <header>
      <h1>An Array Method A Day</h1>
      <p>Select a method for more information.</p>
      <select name="method" id="method" defaultValue="Method Select">
        <option disabled="disabled" value="Method Select">Method Select</option>
        <SelectItems methods={methods}/>
      </select>
    </header>
  )
}

export default Header