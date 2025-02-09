import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobsPage from './pages/AddJobsPage';
import EditJob from './pages/EditJob';
import { Provider } from 'react-redux';
import store from "./utils/store"



export default function App() {
  //add Job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

  //update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/edit-job/:id' element={<EditJob updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/add-job' element={<AddJobsPage addJobSubmit={addJob} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  ))
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
