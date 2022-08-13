import { useState } from "react";

const ManageData = () => {

  const [someData, setSomeData] = useState(10);
  return (
    <div>
      <p>Value: {someData} </p>
      <button onClick={() => (setSomeData(15))}>Change value</button>
    </div>
  )
}

export default ManageData
