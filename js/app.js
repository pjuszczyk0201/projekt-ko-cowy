import React, {useState} from 'react';
import ReactDOM from "react-dom";
import NewProduct from "./NewProduct";
import Header from "./Header"
import ProductsList from "./ProductsList";


const App =() => {
    const [products,setProducts] = useState([])

    const addProduct = product => {
        setProducts(prevProducts => {
            return [product,
                ...prevProducts
            ];
        })
    }

    return (
        <>
            <Header/>
            <NewProduct addProduct={addProduct}/>
            <ProductsList products={products}/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));

