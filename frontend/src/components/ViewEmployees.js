// import React from 'react'
// import { Container, Row, Col, Table } from 'react-bootstrap'
// import AdminPanel from './AdminPanel'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// const ViewEmployees = () => {

//   const nav=useNavigate()
//   const [employee, eres] = useState([])

//   useEffect(() => {
//     axios.get(`http://localhost:8080/getemployee`).then(response => {
//       console.log(response.data.data);
//       eres(response.data.data)
//     })
//   }, [])
//   const img = 'http://localhost:8080/'

//   const del = async (id) => {
//     console.log("deeellll" + id);
//     const response = await axios.post(`http://localhost:8080/delete`, { id })
//     console.log(response.data.data);
//     eres(employee.filter(item => item._id !== id))

//   }

//   const edit=async(id)=>{
//       console.log("eeeeee"+id);
//       sessionStorage.setItem('ed',id)
//   }

//   return (
//     <>
//       <AdminPanel />
//       <Container className='mt-5'>
//         <center><h1>Employee List </h1></center>
//         <Row className='justify-content-center'>
//           <Col lg={9} className='mt-5 pt-3'>
//             <Table striped="columns">
//               <thead>
//                 <tr>

//                   <th>Name</th>
//                   <th>mail</th>
//                   <th>mobile</th>
//                   <th>designation</th>
//                   <th>gender</th>
//                   <th>course</th>
//                   <th>image</th>
//                   <th>Edit/delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employee.map((i) => (
//                   <tr>
//                     <td>{i.name}</td>
//                     <td>{i.mail}</td>
//                     <td>{i.mobile}</td>
//                     <td>{i.designation}</td>
//                     <td>{i.gender}</td>
//                     <td>{i.course}</td>
//                     <td><img src={`${img}${i.image}`} width="120px" height="120px"></img></td>
//                     <td><Link to='/editdetails' onClick={()=>edit(i._id)}>Edit</Link>/<Link onClick={() => del(i._id)}>delete</Link></td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>

//     </>
//   )
// }

// export default ViewEmployees















import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AdminPanel from './AdminPanel';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ViewEmployees = () => {
  const nav = useNavigate();
  const [employees, setEmployees] = useState([]);
  const imgBaseURL = 'http://localhost:8080/';

  useEffect(() => {
    axios.get(`http://localhost:8080/getemployee`)
      .then(response => {
        setEmployees(response.data.data);
      })
      .catch(error => console.error("Error fetching employees:", error));
  }, []);

  const handleDelete = async (id) => {
    await axios.post(`http://localhost:8080/delete`, { id });
    setEmployees(employees.filter(employee => employee._id !== id));
  };

  const handleEdit = (id) => {
    sessionStorage.setItem('ed', id);
  };

  return (
    <>
      <AdminPanel />
      <Container className="my-5">
        <center><h1 className="text-2xl font-semibold text-gray-800 mb-4">Employee List</h1></center>
        <Row className="justify-content-center">
          <Col lg={10} className="bg-white shadow-lg rounded-lg p-4">
            <Table responsive hover className="text-center">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Course</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee._id} className="border-b">
                    <td className="py-3">{employee.name}</td>
                    <td className="py-3">{employee.mail}</td>
                    <td className="py-3">{employee.mobile}</td>
                    <td className="py-3">{employee.designation}</td>
                    <td className="py-3">{employee.gender}</td>
                    <td className="py-3">{employee.course}</td>
                    <td className="py-3">
                      <img 
                        src={`${imgBaseURL}${employee.image}`} 
                        alt={`${employee.name}'s profile`} 
                        className="rounded-md shadow-md" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                      />
                    </td>
                    <td className="py-3">
                      <Link 
                        to="/editdetails" 
                        onClick={() => handleEdit(employee._id)}
                        className="text-blue-500 hover:text-blue-700 mr-2"
                      >
                        Edit
                      </Link>
                      |
                      <button 
                        onClick={() => handleDelete(employee._id)} 
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewEmployees;
