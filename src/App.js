import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
import {AppContainer} from './app.syle'
import TabBar from './components/tabBar/tabBar';
import Tab from './components/tabes/tab';

const corpIds = ["1","2","3"] 
const getCategory =(corpId)=>{
  switch(corpId){
    case "1": 
      return "fruits"
    case "2": 
      return "greens"
    case "3": 
      return "leaves"
    default:
      return "unknown"
    }
}
const catagories = corpIds.map(corpId=>getCategory(corpId));

function App() {
  const [catagoriesData,setCategoriesData]=useState({})
  return (
    <AppContainer className="App">
        <Router>
          <TabBar catagories={catagories}/>
            <Routes>
              {corpIds.map((corpId) =><Route key={corpId} path={getCategory(corpId)} element={<Tab key={corpId} cropTypeId={corpId} catagory ={getCategory(corpId)} catagoriesData ={catagoriesData} setCategoriesData={setCategoriesData} />}></Route>)}
            </Routes>
        </Router>
    </AppContainer>
  );
}

export default App;
