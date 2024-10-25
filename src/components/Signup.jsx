import React, { useState } from "react";
import { Row,Col } from "react-bootstrap";
import login from '../assets/login.png'
import '../Css/Login.css'
import { Card } from "react-bootstrap";
import {Form,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div>
            <Row>
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

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" onChange={(e)=>setPassword(e.target.value)}/>
                                </Form.Group>

                                <Button className="login_button" variant="primary" type="submit">
                                    Sign up
                                </Button>
                            </Form>
                            <div style={{marginTop:"1rem",display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <p>Already have an account? Please <a onClick={()=>navigate('/login')}> Login</a> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}