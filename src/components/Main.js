import React, {useState, useEffect} from 'react'
import methods from '../methods';

const Main = ({ select }) => {
  const [method, setMethod] = useState(select);

  // When the select menu changes, the method displayed changes
  useEffect(() => {
    setMethod(methods.find((m) => m.method === select));
  }, [select]);

  // TODO: Populate Page with description and examples
  return (
    <>
      {method ? 
      (
        <main>
          <h1>{method.method}</h1>
          <p>Hello</p>
        </main>
      ):(
        <main>
          <h1>Select a method to see more information</h1>
        </main>
      )}
    </>
  )
}

export default Main