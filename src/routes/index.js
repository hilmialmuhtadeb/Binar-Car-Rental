import { Route, Routes } from "react-router-dom";
import Home from '../components/pages/Home'

import React from 'react'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoute