import React, { useState,useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminPanel from './AdminPanel'
import './styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EditDetails = () => {
    const nav=useNavigate()
    const [name,namefun]=useState("")
    const [mail,mailfun]=useState("")
    const [num,numfun]=useState()
    const [designation,desfun]=useState("")
    const [gender,genfun]=useState("")
    const [course,coursefun]=useState("")
    const [fl,flres]=useState("")

    const handleChange = (e) => {
        desfun(e.target.value);
      };
    
    const id=sessionStorage.getItem('ed')

      useEffect(()=>{
        if(id){

        axios.get(`http://localhost:8080/edit/${id}`).then(response=>{
            console.log(response.data.data);
            namefun(response.data.data.name)
            mailfun(response.data.data.mail)
            numfun(response.data.data.mobile)
            desfun(response.data.data.designation)
            genfun(response.data.data.gender)
            coursefun(response.data.data.course)
        })
    }
    else{
        nav("/")
    }
    },[])


    const sub=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:8080/editpost',{name,mail,num,designation,gender,course,fl,id},{headers:{'Content-Type':'multipart/form-data'}})
        console.log(response.data.data);
        nav('/viewemployee')
    }

  return (
    <>
    <AdminPanel />
            <Container>
                <Row className='justify-content-center'>
                    <center><h1 className='mt-5'>Create Employee</h1></center>
                    <Col lg={3}>
                        <div>
                            <form className='pt-3' onSubmit={sub}>
                                <input type='text' required placeholder='enter name' className='form-inputs pt-1 pb-1 ps-1' value={name} onChange={(e)=>namefun(e.target.value)}></input><br></br>
                                <input type='email' required placeholder='enter email' className='form-inputs mt-2 pt-1 pb-1 ps-1' value={mail} onChange={(e)=>mailfun(e.target.value)}></input><br></br>
                                <input type='number' required placeholder='enter mobile number' className='form-inputs mt-2 mb-3 pt-1 pb-1 ps-1' value={num} onChange={(e)=>numfun(e.target.value)}></input><br></br>


                                <label>Designation:</label><br></br>
                                <select className='form-inputs' selected={designation} value={designation} onChange={handleChange}>
                                    <option value="">select an option</option>
                                    <option value="hr" >Hr</option>
                                    <option value="manager">Manager</option>
                                    <option value="sales">sales</option>
                                </select><br></br>


                                <label className='mt-2'>Gender:</label><br></br>
                                <label className='mt-1'>Male:</label>
                                
                                <input type='radio' required value='male' name="gender" checked={gender === 'male'}  className='ms-2' onChange={(e)=>genfun(e.target.value)}></input>
                                <label className='ms-4'>Female:</label>
                                
                                <input type='radio' required name="gender" value='female' checked={gender === 'female'}  className='ms-2' onChange={(e)=>genfun(e.target.value)}></input><br></br>


                                <label className='mt-2'>Course</label><br></br>

                                <label>Bca:</label><input type='checkbox' value="Bca" checked={course === 'Bca'}  className="ms-1" onChange={(e)=>coursefun(e.target.value)}></input>

                                <label className='ms-4'>Mca:</label><input type='checkbox' checked={course === 'Mca'} value="Mca" className='ms-1' onChange={(e)=>coursefun(e.target.value)}></input>

                                <label className='ms-4'>Bsc:</label><input type='checkbox' value="Bsc" checked={course === 'Bsc'} className='ms-1' onChange={(e)=>coursefun(e.target.value)}></input><br></br>


                                <label className='mt-2'>Upload Image:</label><br></br>
                                <input type='file' className='mt-1' onChange={(e)=>flres(e.target.files[0])}></input><br></br>
                                <button type="submit" className='mt-3 btn btn-success'>submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default EditDetails