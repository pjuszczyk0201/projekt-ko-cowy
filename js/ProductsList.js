import React from 'react';
import Products from "./Products";

const ProductsList = () => {
    {Products, toggleBoughtFn, clearListFn}: {items: Product[], toggleBoughtFn: Function, clearListFn: Function}
) => {

        const handleClearList = () => clearListFn();

        return (
            <Container maxWidth={"md"}>
                <List>
                    {Products.map( (prod: Product) => <Products key={prod.id} Products={prod} toggleBoughtFn={toggleBoughtFn}/>)}
                </List>
                {Products.length > 0 && <Button variant="contained" onClick={handleClearList}>Clear</Button>}
            </Container>
        );
    }

};

export default ProductsList;