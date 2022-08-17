import styles from './Car.module.css'
const Cars = ({carName, brand, km, color}) => {
  return (
    <div className={styles.div_car}>
      <h1>{carName}</h1>
      <ul>
        <li>{brand}</li>
        <li>{km}km</li>
        <li>{color}</li>
      </ul>
    </div>
  )
}

export default Cars
