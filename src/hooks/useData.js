import  { useEffect, useState } from "react";

const UseData = (url,setMomoData,momoData)=>{
    const [data,setData] = useState(null);
    const [dataUrl,setDataUrl] =useState('');
    const [loading,setLoading] =useState(true);
    

    useEffect(()=>{
        async function getData(){
            try{
                    const data = await (await fetch(dataUrl)).json();
                    setData(data?.data);
                    setLoading(false);
            }catch(err){  
            }
        }
        getData();
    },[dataUrl])

    useEffect(()=>{
        setDataUrl(url);
    },[url])

    return {data,loading}
}

export default UseData;