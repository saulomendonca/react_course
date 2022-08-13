import { useState } from "react"

const ConditionalRender = () => {
  const [x, setX] = useState(true)
  const [name, setName] = useState("John")

  const toggleX = () => {
    setX(!x);
  }

  return (
    <div>
      <h1>Is this showed?</h1>
      { x && <p>if x is true, yes!</p>}
      { !x && <p>if x is not true, yes!</p>}
      <button onClick={toggleX}> toggle X</button>
      <h3>Ternary Conditional</h3>
      { name === "John" ? (<p>Name is John</p>) : (<p>Name is not John</p>)}
      <button onClick={() => setName("Peter")}>Set name to Peter</button>
    </div>
  )
}

export default ConditionalRender
