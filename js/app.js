import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";
import NewProduct from "./NewProduct";
import Header from "./Header"
import ProductsList from "./ProductsList";


const App =() => {
    const [products, setProducts] = useState(() =>{
        const emptyList = [];
        const productJson = localStorage.getItem('productList');
        if(productJson !== null) {
            return JSON.parse(productJson);
        }
        return emptyList;
    })

    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify(products));
    }, [products]);


    const addProduct = product => {
        setProducts(prevProducts => {
            return [product,
                ...prevProducts
            ];
        })
    }

    const clearList = () => {
        setProducts([])
    }

    return (
        <>
            <Header/>
            <div className="container">
                <NewProduct addProduct={addProduct} products={products}/>
                <ProductsList setProducts={setProducts} products={products} clearList={clearList}/>
            </div>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));

