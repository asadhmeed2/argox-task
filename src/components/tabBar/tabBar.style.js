import styled from 'styled-components'


export const TabBarConatiner = styled.div`
display:flex;
`
export const TabBarUl =styled.ul`
display:flex;
list-style: none;
gap:5px;
background: lightsteelblue ;
margin-left: 20px ;
padding-left:0;
`


export const TabBarLi =styled.li`
border-right: 1px solid black;
padding-right:5px;
border-radius: 4px;
&:hover{
    background: gray ;
}
`