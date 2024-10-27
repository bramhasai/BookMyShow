import React, { useState } from "react";
import { Row,Col } from "react-bootstrap";
import login from '../assets/login.png'
import '../Css/Login.css'
import { Card } from "react-bootstrap";
import {Form,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login({setUser}){
    const navigate =useNavigate();
    const [email,setEmail]=useState("");
    const handleLogin=()=>{
        localStorage.setItem('userEmail',email);
        setUser(email);
        navigate('/');
    }
    return(
        <div>
            <Row className="login_form_row">
                <Col className="login_image">
                    <img src={login} alt="" />
                </Col>
                <Col className="login_form_col">
                    <Card className="login_card">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                                </Form.Group>

                                <Button onClick={handleLogin} className="login_button" variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                            <div 
                                style={{marginTop:"1rem",display:"flex", alignItems:"center", justifyContent:"center"}}
                            >
                                <p>New here? Please <a className="link" onClick={()=>navigate('/signup')}> signup</a> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}