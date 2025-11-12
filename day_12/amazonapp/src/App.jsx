import { useState } from "react"
import { useEffect } from "react"

const Search = ({ searchHandler }) => {
  return (
    <div className="search">
      <input type="text" name="search" id="search" onChange={(e) => searchHandler(e.target.value)} />
      <button>search</button>
    </div>
  )
}

const Product = ({ product }) => {
  return (
    <div className="cart">
      <img src={product.img} alt="prod-here" />
      <h3>{product.title}</h3>
    </div>
  )
}
const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredData(data);
      })
      .catch((error) => console.log("unable to load data", error))
  }, [])
  const searchHandler = (query) => {
    const data = products.filter(
      (product) => product.title.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredData(data);
  }
  return (
    <div className="body">
      <Search searchHandler={searchHandler} />
      <div className="products" style={{ display: "flex", flexWrap: "wrap", gap: "45px" }}>
        {filteredData.map((product) => <Product product={product} />)}
      </div>
    </div>
  )
}
function App() {
  return (
    <Body />
  )
}

export default App
