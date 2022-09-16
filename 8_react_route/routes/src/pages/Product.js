import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";


const Product = () => {
  const { id } = useParams();

  const url = 'http://localhost:3000/products/' + id

  const {data: product, loading, error} = useFetch(url)

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <>
          <h1>{product.name}</h1>
          <h1>R${product.price}</h1>
          <Link to={`info`}>Mais informações</Link>
        </>
      )}
    </div>
  )
}

export default Product
