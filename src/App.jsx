import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobsPage from './pages/AddJobsPage';
import EditJob from './pages/EditJob';
import { Provider } from 'react-redux';
import store from "./utils/store"



export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/edit-job/:id' element={<EditJob />} />
      <Route path='/jobs/:id' element={<JobPage />}/>
      <Route path='/add-job' element={<AddJobsPage />} />
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
