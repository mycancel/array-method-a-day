import React from 'react'

const SelectItems = ({ methods }) => {
  return (
    <>
      {methods.forEach((e) => (<option value={e.method}>{e.method}</option>))}
    </>
  )
}

export default SelectItems