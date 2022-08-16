const UserDetails = ( { name, age, profession} ) => {
  return (
    <div>
      Nome: {name} - Idade: {age} - Profissão: {profession} - Pode tirar habilitação? { age > 18 ? "Sim" : "Não"}
    </div>
  )
}

export default UserDetails
