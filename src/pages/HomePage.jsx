import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <HomeCard />
            <JobListings isHome="true" />
            <ViewAllJobs/>
        </div>
    )
}
