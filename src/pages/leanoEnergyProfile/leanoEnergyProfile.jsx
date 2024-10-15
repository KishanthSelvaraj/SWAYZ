import React from 'react'
import About from '../../components/leanoEnergyProfile/About'
import VisionMissionValues from '../../components/leanoEnergyProfile/VissionMissionValues'
import Objectives from '../../components/leanoEnergyProfile/Objectives'
import ProductsandServices from '../../components/leanoEnergyProfile/ProductsandServices'
import Infrastructure from '../../components/leanoEnergyProfile/Infrastructure'
import FuelManagementSolutions from '../../components/leanoEnergyProfile/FuelManagementSolutions'
import ComparativeAdvantages from '../../components/leanoEnergyProfile/ComparativeAdvantages'
import SupportiveCulture from '../../components/leanoEnergyProfile/SupportiveCulture'
import LeanoEnergyContactInfo from '../../components/leanoEnergyProfile/leanoEnergyContactInfo'
const LeanoEnergyProfile  = () => {
  return (
    <div>
      <About/>
      <VisionMissionValues/>
      <Objectives/>
      <ProductsandServices/>
      <Infrastructure/>
      <FuelManagementSolutions/>
      <ComparativeAdvantages/>
      <SupportiveCulture/>
      <LeanoEnergyContactInfo/>
    </div>
  )
}

export default LeanoEnergyProfile 
