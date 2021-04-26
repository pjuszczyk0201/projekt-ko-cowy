import React from "react";
import {AppBar, Container} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {MdAddShoppingCart} from "react-icons/md";


const Header = () => {
    return (
        <AppBar className="header" position="static">
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