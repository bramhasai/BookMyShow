import React from "react";
import { Row,Col } from "react-bootstrap";
import { QRCode } from "react-qrcode";
import successImg from '../assets/success.png'
import '../Css/Success.css';
import { useLocation } from "react-router-dom";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Success(){
    const navigate=useNavigate();
    const location=useLocation();
    const { title, selectedSeats, totalPrice, theatre } = location.state;
    const ticketDetails = JSON.stringify({
        movie: title,
        seats: selectedSeats.join(', '),
        price: `Rs: ${totalPrice}`,
        theatre: theatre
    });
    return(
        <Row className="success_row">
            <Col lg={4} className="success_col1">
                <img src={successImg} alt="" />
                <h5 style={{margin:"1rem 0rem 0.1rem"}}>Booking Confirmed😊</h5>
                <p>Enjoy your movie🎉</p>
            </Col>
            <Col lg={2} className="home_button"><Button onClick={()=>navigate('/')} style={{width:"10rem"}}>Go to Home</Button></Col>
            <Col lg={4} className="success_col2">
                <h5>Ticket QR Code</h5>
                <QRCode value={ticketDetails} />
                <div style={{ marginTop: '0.5rem',marginLeft:'2rem', maxWidth:"20rem"}}>
                    <p><strong>Movie:</strong> {title}</p>
                    <p style={{width:"15rem"}}><strong>Theater:</strong> {theatre}</p>
                    <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
                    <p><strong>Total Price:</strong> Rs {totalPrice}</p>
                </div>
            </Col>
        </Row>
    )
}