import React, { useEffect, useState } from 'react'
import Product from './Product';
import Search from './Search';
const Body = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setProductsData(data))
            .catch((error) => console.log("unable to load data", error))
    }, [])
    return (
        <div className="body">
            <Search />
            <div className="products" style={{display:"flex",flexWrap:"wrap",gap:"35px"}}>
                {productsData.map((product) => <Product product={product}/>)}
            </div>
        </div>
    )
}

export default Body