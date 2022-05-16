import React from 'react'
import { ListItemContainer, ListItemPrice, ListItemName } from './listItem.style'

function ListItem(props) {
    const {price, name} =props;
  return (
    <ListItemContainer>
        <ListItemPrice>{price}</ListItemPrice>
        <ListItemName>{name}</ListItemName>
    </ListItemContainer>
  )
}

export default ListItem