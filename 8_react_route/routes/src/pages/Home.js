import "./Home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const url = "http://localhost:3000/products"

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <SearchForm />
      <h1>Products</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map(item => (
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

export default Home
