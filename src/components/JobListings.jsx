import React from 'react'
import Jobs from '../jobs.json'
import { useState , useEffect } from 'react';

import JobListing from './JobListing';
import Spinner from './Spinner';

export default function JobListings({isHome = false}) {
    // const [jobs, setJobs] = useState([]);
    // const [loading, setLoading] = useState(true);

    const recentJobs = isHome ? Jobs.slice(0,3) : Jobs;
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                
                {/* Future Opportunities */}
                    {/* {loading ? (<Spinner loading={loading}/>) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recentJobs.map((job) => (
                            <JobListing key={job.id} job={job}/>
                        ))}
                    </div>
                        
                    )} */}  

                    {(<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recentJobs.map((job) => (
                            <JobListing key={job.id} job={job}/>
                        ))}
                    </div>
                        
                    )}


                
            </div>
        </section >

    )
}
