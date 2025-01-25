import React from 'react'
import EnvironmentalImpact from "./EnvironmentalImpact";
import HealthRisks from "./HealthRisks";
import Recycling from "./Recycling";
import Lifecycle from "./Lifecycle";
import Articles from "./Articles";
import Hero from './Hero';
import LoadingAnimation from './LoadingAnimation';

function Main() {
  return (
    <>
      <div className="bg-gray-100">
        {/* <LoadingAnimation /> */}
        <Hero />
        <EnvironmentalImpact />
        <HealthRisks />
        <Recycling />
        <Lifecycle />
        <Articles />
      </div>
    </>
  )
}

export default Main