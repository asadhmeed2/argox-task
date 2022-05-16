import  { useEffect, useState } from "react";

const UseData = (url)=>{
    const [data,setData] = useState(null);
    const [dataUrl,setDataUrl] =useState('');
    const [haseMore,setHaseMore] =useState(true);
    const [error,setError] =useState(false);
    const [loading,setLoading] =useState(true);
    

    useEffect(()=>{
        async function getData(){
            try{
                const data = await (await fetch(dataUrl)).json();
                setData(data?.data);
                setHaseMore(data?.data.length > 0);
                setLoading(false);
            }catch(err){  
                setError(true)
            }
        }
        getData();
    },[dataUrl])

    useEffect(()=>{
        setDataUrl(url);
    },[url])

    return {data,loading,error,haseMore}
}

export default UseData;