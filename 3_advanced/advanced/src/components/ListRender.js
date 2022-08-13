import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Saulo", "juliana", "Rita", "Che"])
  const [users, setUsers] = useState([
    { id: 1, name: "Pedro", age: 31},
    { id: 2, name: "Maria", age: 33},
    { id: 3, name: "João", age: 37},
    { id: 4, name: "Jose", age: 36}
  ])

  const deleteRandam = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandam}> Delete random user</button>
    </div>
  )
}

export default ListRender
