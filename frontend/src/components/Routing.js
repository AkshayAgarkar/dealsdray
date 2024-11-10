import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import CreateAdmin from './CreateAdmin'
import AdminPanel from './AdminPanel'
import AdminWelcome from './AdminWelcome'
import CreateEmployee from './CreateEmployee'
import ViewEmployees from './ViewEmployees'
import EditDetails from './EditDetails'
const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/createadmin' element={<CreateAdmin />} />
                <Route path='/adminwelcome' element={<AdminWelcome />} />
                <Route path='/createemployee' element={<CreateEmployee />} />
                <Route path='/viewemployee' element={<ViewEmployees />} />
                <Route path='/editdetails' element={<EditDetails />} />
            </Routes>
        </>
    )
}

export default Routing