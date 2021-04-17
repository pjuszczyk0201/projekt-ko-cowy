import React, {useState} from 'react';
import { Alert } from '@material-ui/lab';

const NewProduct = ({addProduct}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('szt');
    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsArray = [];

        if (name.length < 3) {
           errorsArray.push('produkt musi zawierać przynajmniej 3 litery');
        }

        if (isNaN(Number(quantity))) {
            errorsArray.push( 'podaj liczbę');
        } else if (Number(quantity) <= 0) {
            errorsArray.push('liczba musi być dodatnia');
        }
        setError(errorsArray);
        if (errorsArray.length === 0) {
            const product = {
                name,
                quantity,
                unit
            };
            addProduct (product);
            setName('');
            setQuantity('');
        }
        console.log("product", product);
    }


    const styleForm = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "lightgray",
        width: "860px",

    }
    const styleInput = {
        padding: "10px",
        marginBottom: "10px",
        width: "500px",
    }
    const selectStyle = {
        width: "250px",
        padding: "5px",
    }

    const buttonStyle = {
        alignSelf: "flex-end",
        padding: "10px",
        backgroundColor: "orange",
        width: "100px",
        borderStyle: "none",
        outline: "none"
    }

    let errorsJsx = null;
    if (error.length > 0) {
        errorsJsx = error.map((err, index) => <Alert key={index} severity={"error"}>{err}</Alert>)
    }

    return (
        <form style={styleForm} onSubmit={handleSubmit}>
            {errorsJsx}
            <div className="form-group">
            <input
                type = "text"
                placeholder= "produkt"
                style={styleInput}
                value={name}
                onChange={e => setName (e.target.value)}
            >
            </input>
            </div>
            <div className="form-group">
                <input
                    type = "number"
                    placeholder= "ilość"
                    style={styleInput}
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                >
                </input>
            </div>
            <div className="form-group"
                 style={styleInput}
            >
                <select
                    style={selectStyle}
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <option value={"dkg"}>dkg</option>
                    <option value={"kg"}>kg</option>
                    <option value={"szt"}>szt</option>
                    <option value={"opk"}>opk</option>
                </select>
            </div>
            <button type={"submit"}
            style={buttonStyle}
            >Add</button>
        </form>
    );
};

export default NewProduct;
