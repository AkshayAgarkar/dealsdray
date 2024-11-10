import React, { useState,useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
    const nav=useNavigate()
    const [uname,ures]=useState("")
    const sid=sessionStorage.getItem('sid')
    useEffect(() => {
        axios.get(`http://localhost:8080/adminget/${sid}`).then(response => {
          console.log(response.data.data);
          ures(response.data.data)
        })
      }, [])

    const logout=()=>{
        nav('/')
        // sessionStorage.setItem('sid','')
    }
    const gohome=()=>{
        nav('/adminwelcome')
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand onClick={gohome} style={{cursor:"pointer"}}>Employee Management</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link><Link to="/viewemployee" style={{textDecoration:"none"}}>Employee List</Link></Nav.Link>
                                        <Nav.Link><Link to='/createemployee' style={{textDecoration:"none"}}>Create Employee</Link></Nav.Link>
                                    </Nav>
                                    <Nav>
                                        
                                        <NavDropdown title={uname} id="collapsible-nav-dropdown">
                                            <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                                            
                                        </NavDropdown>
                                        <Nav.Link eventKey={2} onClick={logout}>
                                            Log Out
                                        </Nav.Link>
                                        
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminPanel