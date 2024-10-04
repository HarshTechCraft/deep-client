import React from 'react'
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import SearchVenue from '../components/SearchVenue'
import Footer from '../components/Footer'
import { Loader } from '../components/Loader'

function Home() {
  return (
    <div>
      <ImageSlider/>
      <Header/>
      <SearchVenue/>
      <Footer/>
    </div>
  )
}

export default Home
