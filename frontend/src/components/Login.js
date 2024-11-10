import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const nav=useNavigate()
    const [mail,mailfunction]=useState("")
    const [pass,passfunction]=useState("")

    const sub=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:8080/login',{mail,pass})
        console.log(response.data.sid);
        if(response.data.data=="ok"){
            sessionStorage.setItem('sid',response.data.sid)
            nav('/adminwelcome')
        }
        else{
            alert("wrong email or password")
        }


    }
  return (
    <>
    <Container>
        <Row className='mt-5'>
            <center>
            <Col lg={3} className='bg-blue-300 w-[900px] p-3'>
                <div className=''>
                    <form className='pt-5 ps-2 pe-2 pb-5' onSubmit={sub}>
                        <input type="email" placeholder="enter your email id" className='p-2 rounded-md form-inputs pt-1 pb-1' onChange={(e)=>mailfunction(e.target.value)}></input><br></br>
                        <input type="password" placeholder="enter your password" className=' p-2 rounded-md mt-2 form-inputs pt-1 pb-1' onChange={(e)=>passfunction(e.target.value)}></input><br></br>
                        <button type="submit" className='btn btn-success mt-2'>Log in</button>
                    </form>
                    <Link to='/createadmin'>Register admin</Link>
                </div>
            </Col>
            </center>
        </Row>
    </Container>
    </>
  )
}

export default Login