import React, { useState } from 'react';
import {Li, TabeCntainer,TabTitle, Ul} from './tab.style';
import ListItem from '../listItem/listItem';
import UseData from '../../hooks/useData';
import ReactPaginate from 'react-paginate'

import './tab.style.css'


const Tabe=(props) => {
    const {cropTypeId,catagory}=props;
    const [pageNumber,setPageNumber] =useState(0);
    const [pageCount] =useState(4);

    const {data,loading} = UseData(` https://apiproxy.agrox.io/api/crops/GetDataForTradeScene?cropTypeId=${cropTypeId}&pageNumber=${pageNumber}`);

    const handlePageClick =(pages)=>{
      setPageNumber(pages.selected);
    }
  return (
    <TabeCntainer>
        <TabTitle>{catagory}</TabTitle>
        <Ul>
            {data && !loading ?data.map((item)=>{
                return <Li key={item.subCropId}><ListItem  name={item.cropName} price={item.price}/></Li>
            }): "loading"
        } 
        </Ul>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"paginate-container"}
        pageClassName={"paginate-page"}
        previousClassName={'paginate-page'}
        nextClassName={'paginate-page'}
        activeClassName={'paginate-page-active'}
        /> 
    </TabeCntainer>
  )
}

export default Tabe