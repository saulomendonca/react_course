import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";


const Product = () => {
  const { id } = useParams();


  return (
    <div>
      <h1>Mais informações do produto {id}</h1>
    </div>
  )
}

export default Product
