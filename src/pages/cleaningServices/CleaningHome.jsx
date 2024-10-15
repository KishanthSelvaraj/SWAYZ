import React from 'react'
import Banner from '../../components/cleaningServices/Banner'
import CoreValues from '../../components/cleaningServices/CoreValues'
import VisionMissionSection from '../../components/cleaningServices/VisionMissionSection'
import Services from '../../components/cleaningServices/Services'
import PressureCleaning from '../../components/cleaningServices/PressureCleaning'
import Benefits from '../../components/cleaningServices/Benefits'
import LandscapingServices from '../../components/cleaningServices/LandscapingServices'
import HowWorks from '../../components/cleaningServices/HowWorks'
import TrainingAffiliations from '../../components/cleaningServices/TrainingAffiliations'
import Footer from '../../components/cleaningServices/Footer'

const CleaningHome = () => {
  return (
    <div>
       <Banner/>
       <VisionMissionSection/>
       <CoreValues/>
       <Services/>
       <PressureCleaning/>
       <Benefits/>
       <LandscapingServices/>
       <HowWorks/>
       <TrainingAffiliations/>
    </div>
  )
}

export default CleaningHome