import React, { useState } from 'react';
import "./Home.css";
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDawnload from '../../Components/AppDawnload/AppDawnload';

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDawnload/>
    </>
  )
}

export default Home