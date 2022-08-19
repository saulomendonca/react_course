import './MyForm.css'
import {useState} from "react";
const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState();
  const [role, setRole] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)
    setName('');
    setEmail('');
    setBio('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" 
          placeholder="Type your name"
          onChange={handleName} 
          value={name}/>
        </div>

        <label>
          <span>Email</span>
          <input type="email" name="email" 
          placeholder="Type your email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
        </label>

        <label>
          <span>Bio</span>
          <textarea name="bio" 
          placeholder="biography" 
          onChange={(e) => setBio(e.target.value)}
          value={bio}/>
        </label>

        <label>
          <span>Role</span>
          <select name="role"
            onChange={(e) => setRole(e.target.value)}>
            <option>admin</option>
            <option>manager</option>
            <option>user</option>
          </select>
          
        </label>



        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default MyForm
