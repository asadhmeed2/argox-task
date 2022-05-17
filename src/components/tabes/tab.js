import React, { useEffect, useState } from 'react';
import {Li, TabeCntainer,TabTitle, Ul} from './tab.style';
import ListItem from '../listItem/listItem';
import UseData from '../../hooks/useData';
import ReactPaginate from 'react-paginate'
import {ITEM_IN_PAGE} from '../../consts/constents'

import './tab.style.css'



const Tabe=(props) => {
    const {cropTypeId,catagory}=props;
    const [pageNumber,setPageNumber] =useState(0);
    const [currnetPagesNumber,setCurrnetPagesNumber] =useState([]);
    const [firstItemNumber,setFirstItemNumber] =useState(0);
    const [data,setData] = useState([])

    // const {data,loading} = UseData(`https://apiproxy.agrox.io/api/crops/GetDataForTradeScene?cropTypeId=${cropTypeId}&pageNumber=${pageNumber}`);

      useEffect(()=>{
      const getData = async ()=>{
        try{
          const data = await (await fetch(`https://apiproxy.agrox.io/api/crops/GetDataForTradeScene?cropTypeId=${cropTypeId}&pageNumber=${pageNumber}`)).json();
          setData(prev => [...prev,...data.data])
          setCurrnetPagesNumber(data.length)
        }catch(err){  
        }
      }
      getData()
      
      },[pageNumber,cropTypeId])

    const handlePageClick =(pages)=>{
      if(firstItemNumber >= data.length-ITEM_IN_PAGE){
        setPageNumber(pageNumber+1);
      }else{
        setFirstItemNumber(firstItemNumber+ITEM_IN_PAGE-1)
      }

    }
  return (
    <TabeCntainer>
        <TabTitle>{catagory}</TabTitle>
        <Ul>
            {console.log(data)}
            {data ?data.filter((item,index)=>index>=firstItemNumber && index<firstItemNumber+ITEM_IN_PAGE).map((item,index)=>{
                  return <Li key={item.subCropId}><ListItem id={item.subCropId} name={item.cropName} price={item.price}/></Li>
            }): "loading"
        } 
        </Ul>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={currnetPagesNumber}
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