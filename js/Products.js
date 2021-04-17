import React from 'react';
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Products = ({name, quantity,unit}) => {

    const listStyle = {
        width: "950px"
    }

    return (
        <ListItem dense button style={listStyle}>
             <ListItemIcon>
               <Checkbox
                edge="start"
                 tabIndex={-1}
                 disableRipple
               />
             </ListItemIcon>
             <ListItemText> {name} {quantity} {unit}</ListItemText>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )}

export default Products;
