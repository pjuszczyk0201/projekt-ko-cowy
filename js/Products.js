import React, {useState} from 'react';
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ImCheckmark } from "react-icons/im";
import { RiEdit2Fill } from "react-icons/ri"


const Products = ({name, quantity,unit, product, products, setProducts}) => {
    const [productEdit, setProductEdit] = useState(null);
    const [nameEdit, setNameEdit] = useState("");
    const [quantityEdit, setQuantityEdit] = useState("");
    const [unitEdit, setUnitEdit] = useState("")

    const removeProduct = () => {
        setProducts(products.filter((el) => el.id !== product.id))
    }

    const boughtHandler = () => {
    setProducts(products.map(el => {
        if(el.id === product.id) {
            return {
                ...el, bought: !el.bought
            }
        }
        return el;
        })
    )
}

const editProduct = () => {
    setProducts(products.map(el => {
            if(el.id === product.id) {
                el.name = nameEdit;
                el.quantity = quantityEdit;
                el.unit = unitEdit
            }
            return el;
        })
    )
    setProductEdit(null);
    setNameEdit("");
    setQuantityEdit("");
    setUnitEdit("");
}

return (
        <ListItem dense button className="listItem">
            {productEdit === product.id ? (
                <form className="editForm">
                    <input className="inputEdit"
                        type="text"
                        placeholder="product"
                        onChange={(e) => setNameEdit(e.target.value)}
                        value={nameEdit}
                    />
                    <input className="inputEdit"
                        type="text"
                        placeholder="ilość"
                        onChange={(e) => setQuantityEdit(e.target.value)}
                        value={quantityEdit}
                    />
                    <select className="inputEdit"
                        onChange={e => setUnitEdit(e.target.value)}
                        value={unitEdit}
                    >
                        <option value={"dkg"}>dkg</option>
                        <option value={"kg"}>kg</option>
                        <option value={"szt"}>szt</option>
                        <option value={"opk"}>opk</option>
                    </select>
                    <ImCheckmark onClick={() => editProduct(product.id)}/>
                </form>
                ) : (
                <ListItemIcon className="productList">
                    <Checkbox
                        onChange={boughtHandler}
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                    />
                    <ListItemText className={product.bought ? "bought" : ''}> {name} {quantity} {unit}</ListItemText>
                    <RiEdit2Fill onClick={() => setProductEdit(product.id)}/>
                    <IconButton aria-label
                        onClick={removeProduct}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemIcon>
                )}
        </ListItem>
    )}

export default Products;
