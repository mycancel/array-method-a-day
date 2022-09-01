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
          <h2>{method.method}</h2>
          <p>{method.description}</p>
          <h3>Example of {method.method}</h3>
        </main>
      ):(
        <main>
        </main>
      )}
    </>
  )
}

export default Main