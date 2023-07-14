import {React ,useState} from 'react'
import Header from './Components/Header';
import TabSection from './Components/TabSection';
import Footer from './Components/Footer';
import Delivery from './Components/Delivery';
import DiningOut from './Components/DiningOut';
import NightLife from './Components/NightLife';
import FilterData from './data'
const HomePage = () => {
    const [activeTab , setActiveTab] = useState(FilterData[0].title);
    return (
      <div className="  mx-auto overflow-hidden  " >
          <Header />
          <TabSection activeTab = {activeTab}  FilterData={FilterData} setActiveTab = {setActiveTab}/>
          {getCurrentScreen(activeTab)}

          <Footer/>
      </div>
    )
}

const getCurrentScreen = (tab) =>{
    switch (tab){
        case "Delivery":
        return (<Delivery/>);

        case "Dining Out":
            return(<DiningOut/>);

        case "NightLife":
            return(<NightLife/>) 
        default :
        return(<Delivery/>)       
    }

}

export default HomePage;
