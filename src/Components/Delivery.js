import React from 'react'
import Filter from './Filter'
import delivaryData from '../DeliveryData'
import DeliveryCollection from './DeliveryCollection'
import TopBrands from './TopBrands'
import ExploreSection from './ExploreSection'
import { RestaurantData } from '../RestaurantData'


const RestaurantDataList = RestaurantData;
const Delivery = () => {
  return (
    <div>
     
      <Filter   delivaryData ={delivaryData}/>
      <DeliveryCollection/>
      <TopBrands/>
      <ExploreSection list={RestaurantDataList} CollectionNameTitle="Delivery Restaurants in Pune"/>

    </div>
  )
}

export default Delivery
