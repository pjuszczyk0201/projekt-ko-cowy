import React from 'react';
import ReactDOM from "react-dom";
import NewProduct from "./NewProduct";
import Header from "./Header"


const App =() => {

    return (
        <>
            <Header/>
            <NewProduct/>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector("#app"));


