import React from 'react';
import Products from "./Products";
import {List} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const ProductsList = ({products, setProducts, clearList}) => {

    const handlerClearList = () => clearList();

    const deleteButtonStyle = {
        display: "flex",
        alignItems: "flex-start",
        marginLeft: "10px",
        marginTop: "15px"
    }

    return (
        <>
            <List className="newList">
            {
                products.map((product) =>{
                    return (
                        <Products
                            key={product.id}
                            setProducts={setProducts}
                            products={products}
                            product={product}
                            name={product.name}
                            quantity={product.quantity}
                            unit={product.unit}
                        />
                        )
                    }
                )
            }
            </List>
            {products.length > 0 &&
            <Button className="delete"
                style={deleteButtonStyle}
                onClick={handlerClearList}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon/>}
            >
            wyszyść listę
            </Button>}
        </>
    );
};

export default ProductsList;
