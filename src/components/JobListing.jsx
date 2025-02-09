import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addJob} from "../utils/jobSlice"

export default function JobListing({ job }) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let description = job.jobDescription;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    const handleRead = async () => {
        try {
            const res = await axios.get(BASE_URL + `/job/${job._id}`, { withCredentials: true });
            console.log(res.data);
            dispatch(addJob(res.data.data)); // FIXED
            navigate(`/jobs/${job._id}`);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.jobType}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">
                    {description}
                </div>
                <button onClick={() => setShowFullDescription((prevState) => (!prevState))} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? 'Less' : "More"}</button>

                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className='inline text-lg mb-1 mr-1' />
                        {job.location}
                    </div>
                    <button
                        onClick={handleRead}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}
