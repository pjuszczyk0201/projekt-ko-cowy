import React from "react";
import {AppBar, Container} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {MdAddShoppingCart} from "react-icons/md";


const Header = () => {

    const headerStyle = {
        width: "520px",
        height: "100px",
        borderRadius: "10px",
        backgroundColor: "rosybrown",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
}

    return (
        <AppBar className="header" position="static" style={headerStyle}>
            <Toolbar>
                <Container maxWidth={"md"}>
                    <Typography variant={"h6"}>
                        Moja lista zakupów
                        <MdAddShoppingCart className="headerIcon"/>
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
export default Header