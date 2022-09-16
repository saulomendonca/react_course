import { Link, useSearchParams } from "react-router-dom"
import SearchForm from "../components/SearchForm";

import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams()

  const url = 'http://localhost:3000/products?' + searchParams

  const {data: products, loading, error} = useFetch(url)

  return (
    <div>
      <SearchForm />
      <h1>Products</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {products && products.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
