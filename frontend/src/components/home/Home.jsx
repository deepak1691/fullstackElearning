import React from 'react'
import Hero from './Hero';
import HomeSevices from './HomeSevices';
import GetStarted from './GetStarted';
import RatingSlider from '../services/rating/RatingSlider';

export default function Home() {
  return (
    <>
    <Hero/>
    <HomeSevices/>
    <GetStarted/>
    <RatingSlider/>
    </>
  )
}
