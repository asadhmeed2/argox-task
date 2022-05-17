import React from 'react'
import { ListItemContainer, ListItemPrice, ListItemName } from './listItem.style'

function ListItem(props) {
    const {price, name,id} =props;
  return (
    <ListItemContainer>
        <ListItemPrice>מחיר {parseFloat(price).toFixed(3)}ש"ח</ListItemPrice>
        <span>{id} :מספר פריט</span>
        <ListItemName>{name}</ListItemName>
    </ListItemContainer>
  )
}

export default ListItem