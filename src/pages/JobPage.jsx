import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {removeJob} from "../utils/jobSlice"
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

function JobPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { id } = useParams();
    const job = useSelector((store) => store.job);
    // const [job, setJob] = useState(jobFromStore || JSON.parse(localStorage.getItem('job')));

    useEffect(() => {
        if (!job) {
            navigate('/jobs'); // Redirect if no job found
        }
    }, [job, navigate]);

    if (!job) {

        return <div>Loading...</div>
    }
    const onDeleteClick = async() => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this listing ?')

            if (!confirm) return;

            await axios.delete(BASE_URL+ `/job/delete/${job._id}`,{withCredentials: true});
            dispatch(removeJob());

            toast.success("Job Deleted Successfully")

            navigate('/jobs');
        } catch (error) {
            throw new Error(error);
        }
    }
    // const [job,setJob]= useState(null);
    // const [loading, setLoading]= useState(true);
    // useEffect(()=>{
    //     const fetchJob = async ()=>{
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data =await res.json();
    //             console.log(data);
    //             setJob(data);
    //         } catch (error) {
    //             console.log("Error fetching the Data", error);
    //         }finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchJob();
    // },[])
    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{job.jobType}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <FaLocationDot className='text-lg text-orange-700 mr-2' />
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">
                                    {job.jobDescription}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{job.salary} / Year</p>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Company Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">{job.companyName}</h2>

                                <p className="my-2">
                                    {job.companyDescription}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.email}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.phone}</p>
                            </div>

                            {/* <!-- Manage --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    to={`/edit-job/${job._id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Job</Link>
                                <button onClick={onDeleteClick}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

// const jobLoader = async ({ params }) => {
//     const res = await fetch(`/api/jobs/${params.id}`)
//     const data = await res.json();
//     return data
// }

export default JobPage