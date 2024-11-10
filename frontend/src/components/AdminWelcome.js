import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminPanel from './AdminPanel'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AdminWelcome = () => {

    const [uname,ures]=useState("")
    const sid=sessionStorage.getItem('sid')
    useEffect(() => {
        axios.get(`http://localhost:8080/adminget/${sid}`).then(response => {
          console.log(response.data.data);
          ures(response.data.data)
        })
      }, [])

    return (
        <>
            <AdminPanel />
            <Container className='mt-5'>
                <center>
                    <Row>
                        <h1>
                            {uname?<h1>Welcome {uname}</h1>:<h1>please login</h1>}
                        </h1>
                    </Row>
                    <Row className='mt-5'>
                        <Link to='/createemployee'><div>Create Employee</div></Link>
                        <Link to='/viewemployee'><div className='mt-2'>Employee List</div></Link>
                    </Row>
                </center>
            </Container>
        </>
    )
}

export default AdminWelcome