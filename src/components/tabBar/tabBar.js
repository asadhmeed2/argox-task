import React from 'react'
import {Link} from 'react-router-dom'
import './tabBar.style.css'
import { TabBarConatiner, TabBarLi, TabBarUl } from './tabBar.style';

function TabBar(props) {
    const{catagories}=props;
    return (
    <TabBarConatiner>
        <TabBarUl>
            {catagories.map(catagory=><TabBarLi key={catagory}><Link className="tabBarLink" to={catagory} >{catagory}</Link></TabBarLi>)}
        </TabBarUl>
    </TabBarConatiner>
    )
}

export default TabBar