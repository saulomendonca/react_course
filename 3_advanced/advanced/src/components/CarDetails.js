const CarDetails = ({brand, km, color}) => {
  return (
    <div>
      <h1>Car Details</h1>
      <ul>
        <li>{brand}</li>
        <li>{km}</li>
        <li>{color}</li>
      </ul>
    </div>
  )
}

export default CarDetails
