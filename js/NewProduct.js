import React, {useState} from 'react';
import {Alert} from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const NewProduct = ({addProduct, products}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [error, setError] = useState([]);

    const handlerSubmit = (e) => {
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

        setError(errorsArray); //useEffect
        if (errorsArray.length === 0) {
            const product = {
                name,
                quantity,
                unit,
                id: products.length+1
            };
            addProduct (product);
            setName('');
            setQuantity('');
            setUnit('');
        }
    }


    let errorsJsx = null;
    if (error.length > 0) {
        errorsJsx = error.map((err, index) => <Alert key={index} severity={"error"}>{err}</Alert>)
    }

    return (
        <form className="newForm" onSubmit={handlerSubmit}>
            {errorsJsx}
            <TextField className="newProductInput"
                type = "text"
                value={name}
                onChange={e => setName (e.target.value)}
                id="standard-textarea"
                label="produkt"
                multiline
            >
            </TextField>
                <TextField className="newProductInput"
                    type = "number"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    id="standard-textarea"
                    label="ilość"
                    multiline
                >
                </TextField>
            <FormControl className="formControl">
            <InputLabel id="demo-simple-select-label">Jednostka</InputLabel>
            <Select className="newProductInput"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <MenuItem value={"dkg"}>dkg</MenuItem>
                    <MenuItem value={"kg"}>kg</MenuItem>
                    <MenuItem value={"szt"}>szt</MenuItem>
                    <MenuItem value={"opk"}>opk</MenuItem>
            </Select>
            </FormControl>
            <Button
                type={"submit"}
                variant="outlined"
                color="primary">
                Dodaj do koszyka
            </Button>
        </form>
    );
};

export default NewProduct;

