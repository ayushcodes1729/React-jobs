import React from 'react'
import { HashLoader } from 'react-spinners'

const override = {
    display : 'block',
    margin : '100px auto'
}

export default function Spinner({loading}) {
  return (
    <HashLoader
     color='#6366F1'
     loading = {loading}
     cssOverride={override}
     size={150}
    />
  )
}
