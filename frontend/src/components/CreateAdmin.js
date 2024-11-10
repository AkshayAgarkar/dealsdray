import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateAdmin = () => {
    const nav=useNavigate()
    const [email,mailfunction]=useState("")
    const [uname,namefunction]=useState("")
    const [pass,passfunction]=useState("")

    const sub=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:8080/postadmin',{email,uname,pass})
        console.log(response.data.data);
        if(response.data.data=="ok"){
            nav('/')
        }
        else{
            alert("email already exist")
        }
        
    }

  return (
    <>
    <Container>
        <Row className='mt-5'>
            <center>
            <Col lg={3} className='bg-blue-300'>
                <div>
                    <form className='pt-5 ps-2 pe-2 pb-5' onSubmit={sub}>
                        <input type="email" placeholder="enter your email id" className='p-2 form-inputs pt-1 pb-1' onChange={(e)=>mailfunction(e.target.value)}></input><br></br>
                        <input type="text" placeholder="enter username" className='mt-2 p-2 form-inputs pt-1 pb-1' onChange={(e)=>namefunction(e.target.value)}></input><br></br>
                        <input type="password" placeholder="create password" className='mt-2 p-2 form-inputs pt-1 pb-1' onChange={(e)=>passfunction(e.target.value)}
                        name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        ></input><br></br>
                        <button type="submit" className='btn btn-success mt-2'>Add admin</button>
                    </form>
                </div>
            </Col>
            </center>
        </Row>
    </Container>
    </>
  )
}

export default CreateAdmin