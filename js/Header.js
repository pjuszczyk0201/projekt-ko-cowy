import React from "react";


export const Header = () => {
    const style = {
        backgroundColor: "gray",
        textAlign: "center",
        padding: "20px",
        color: "orange",
        width: "900px"
    }

    return (
        <>
            <div style={style}>
            <h1>Moja lista zakupów</h1>
            </div>
        </>
    )
}
export default Header