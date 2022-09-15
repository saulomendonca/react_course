import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    httpConfig(product, 'POST')

    setName("");
    setPrice("");
  }

  const handleDelete =  (id) => {
    const product = {
      id
    }

    httpConfig(product, 'DELETE')
  }


  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando Dados</p>}
      {error && <p>{error}</p>}
      <ul>
        {items?.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
            <button onClick={() => handleDelete(product.id)}>excluir</button>
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" disabled={loading}/>
        </form>
      </div>
    </div>
  );
}

export default App;
