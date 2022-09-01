import React, {useEffect} from 'react'

const Main = ({ select }) => {
  useEffect(() => console.log(select), [select]);
  return (
    <main>Main</main>
  )
}

export default Main