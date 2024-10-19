import React from 'react'
import BusinessProfile from '../../components/home/BusinessProfile'
import CleaningHomePage from '../../components/home/CleaningHomePage'
import LeanoHomePage from '../../components/home/LeanoHomePage'
import Main2 from '../../components/home/Main2'
import Main1 from '../../components/home/Main1'
import Accordion from '../../components/home/Accordian'
import ScrollSections from '../../components/home/HorizontalScroll'

const Home = () => {
  return (
    <div>
      <Main2/>
      <CleaningHomePage/>
      <ScrollSections/>
      <Main1/>
      <Accordion/>
      <LeanoHomePage/>
      <BusinessProfile/>
    </div>
  )
}

export default Home
