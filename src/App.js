import {AppContainer} from './app.syle'
import Tabe from './components/tabes/tab';

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
function App() {
  return (
    <AppContainer className="App">
      {corpIds.map(corpId => <Tabe key={corpId} cropTypeId={corpId} catagory ={getCategory(corpId)}/>)}
    </AppContainer>
  );
}

export default App;
