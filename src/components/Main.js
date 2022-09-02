import React, {useState, useEffect} from 'react'
import methods from '../methods';

const Main = ({ select }) => {
  const [method, setMethod] = useState(select);

  // When the select menu changes, the method displayed changes
  useEffect(() => {
    setMethod(methods.find((m) => m.method === select));
  }, [select]);

  // If the examples propertie in the method found exists, the main tag is populated with information
  return (
    <>
      {method?.examples ? 
      (
        <main>
          <h2>{method.method}</h2>
          <p>{method.description}</p>
          <h3>Example of {method.method}</h3>
          {method.examples.map((ex) => (
            <>
              <img src={ex.image} alt={method.method}/>
              <p>{ex.text}</p>
            </>
          ))}
        </main>
      ):(
        <main>
          <p style={{textAlign: "center"}}>No method selected.</p>
        </main>
      )}
    </>
  )
}

export default Main