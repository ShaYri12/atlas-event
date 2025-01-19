import React from 'react'
import Header from '../components/Header'
import LocationSearchBar from './LocationSearchBar'
import Categories from './Categories'
import PopularEvents from './PopularEvents'
import FilterOneEvents from './FilterOneEvents'
import EventDestination from './EventDestination'
import FilterTwoEvents from './FilterTwoEvents'
import CreateEvent from '../components/CreateEvent'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <LocationSearchBar />
            <Categories />
            <PopularEvents />
            <FilterOneEvents />
            <EventDestination />
            <FilterTwoEvents />
            <CreateEvent />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home