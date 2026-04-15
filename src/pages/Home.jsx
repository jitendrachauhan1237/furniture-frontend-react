 import React from 'react'
import Hero from '../components/Hero'
import InfiniteBenefitsScroll from '../components/InfiniteScroll'
// import NewArrivals from '../components/NewArrivals'
import ShopByCategory from '../components/ShopByCategory'
import RoomOffers from '../components/RoomOffer'
import HotProducts from '../components/HotProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import CustomerTestimonials from '../components/CustomerTestimonial'
// import DataUploader from '../components/dataStore/DataStore'
import useScrollToTop from '../hooks/useScrollToTop'


 
 const Home = () => {
  useScrollToTop()
   return (
     <div>
      {/* <DataUploader /> */}
       <Hero />
       <InfiniteBenefitsScroll />
       {/* <NewArrivals /> */}
       <ShopByCategory />
       <RoomOffers />
       <HotProducts />
       <WhyChooseUs />
       <CustomerTestimonials />
       
     </div>
   )
 }
 
 export default Home
 