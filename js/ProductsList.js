import React from 'react';
import Products from "./Products";
import {List} from "@material-ui/core";

const ProductsList = ({products}) => {
    return (
        <List>
            {products.map(product =>(
                <Products name={product.name} quantity={product.quantity} unit={product.unit} />
                ))}
        </List>
    );
};

export default ProductsList;