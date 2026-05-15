import { Route ,Routes } from "react-router-dom";
import Login from "../auth/Login";

import React from 'react'

export default function Homepage() {
  return (
    <div>
        <Routes>
            <Route path="/" element={Login}/>

        </Routes>
    </div>
  )
}


