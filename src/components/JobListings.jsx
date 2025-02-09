import React from 'react'
import { useState , useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addFeed } from '../utils/feedslice';

export default function JobListings({isHome = false}) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const feed = useSelector((store)=> store.feed)

    useEffect (()=>{
        const fetchJobs = async ()=>{
            const apiUrl = isHome ? BASE_URL + '/jobs?limit=3' : BASE_URL + '/jobs'
            try {
                const res = await axios.get(apiUrl, {withCredentials : true});
                // const data =await res.json();
                // console.log(res.data)
                // setJobs(data);
                dispatch(addFeed(res.data))
                // console.log(jobs);
            } catch (error) {
                console.log("Error fetching the Data", error);
            }finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, [])
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                
                    {loading ? (<Spinner loading={loading}/>) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {feed.map((job) => (
                            <JobListing key={job.id} job={job}/>
                        ))}
                    </div>
                        
                    )}


                
            </div>
        </section >

    )
}
