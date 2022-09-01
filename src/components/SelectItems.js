import React from 'react'

const SelectItems = ({ methods }) => {
  return (
  <select name="method" id="method" defaultValue="Method Select">
    <option disabled="disabled" value="Method Select">Method Select</option>
    {methods.map((e) => <option key={e.method}>{e.method}</option>)}
  </select>
  )
}

export default SelectItems