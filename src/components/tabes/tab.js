import React, { useMemo, useRef, useState } from 'react';
import {Li, TabeCntainer,TabTitle, Ul} from './tab.style';
import ListItem from '../listItem/listItem';
import ReactPaginate from 'react-paginate'
import {ITEM_IN_PAGE} from '../../consts/constents'

import './tab.style.css'



const Tabe=(props) => {
    const {cropTypeId,catagory}=props;
    const [pageNumber,setPageNumber] =useState(0);
    const [firstItemNumber,setFirstItemNumber] =useState(1);
    const [data,setData] = useState([])
    const [haseMore,setHaseMore] = useState(true)
    const pageNumberRef = useRef()

      useMemo(()=>{
      const getData = async ()=>{
        try{
          console.log(pageNumber);
          const data = await (await fetch(`https://apiproxy.agrox.io/api/crops/GetDataForTradeScene?cropTypeId=${cropTypeId}&pageNumber=${pageNumber}`)).json();
          console.log("data in memo" ,data.data);
          if(data.data.length){
            pageNumberRef.current =pageNumber+1;
            setData(prev => [...prev,...data.data])
          }else{
            setHaseMore(false);
          }
        }catch(err){  
        }
      }
      if(pageNumberRef.current !== pageNumber){
        getData()
      }
      
      },[pageNumber,cropTypeId])

    const onPageClicked =(pages)=>{
      if(pages.isNext){
          setFirstItemNumber(haseMore || firstItemNumber < firstItemNumber+ITEM_IN_PAGE?firstItemNumber+ITEM_IN_PAGE-1:firstItemNumber)
        if(firstItemNumber+ITEM_IN_PAGE >= data.length-ITEM_IN_PAGE && haseMore){
              console.log("page number is changed");
              setPageNumber(pageNumber+1);
        }
      }else if(pages.isPrevious&& firstItemNumber > 0){
        setFirstItemNumber(firstItemNumber-ITEM_IN_PAGE)
      }
      // console.log(pages);
    }

  return (
    <TabeCntainer>
        <TabTitle>{catagory}</TabTitle>
        <Ul>
            {data ?data.filter((item,index)=>index>=firstItemNumber && index<firstItemNumber+ITEM_IN_PAGE).map((item,index)=>{
                  return <Li key={index}><ListItem id={item.subCropId} name={item.cropName} price={item.price}/></Li>
            }): "loading"
        } 
        </Ul>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={(data.length/ITEM_IN_PAGE)+1}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        containerClassName={"paginate-container"}
        pageClassName={"paginate-page"}
        previousClassName={'paginate-page'}
        nextClassName={'paginate-page'}
        activeClassName={'paginate-page-active'}
        onClick={onPageClicked}
        /> 
    </TabeCntainer>
  )
}

export default Tabe