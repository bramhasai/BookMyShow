import React, { useEffect, useState } from "react";
import { Col,Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import screenImg from '../assets/screen.png'
import '../Css/SeatSelection.css'

export default function SeatSelection(){
    const navigate=useNavigate();
    const location=useLocation()
    const {title,theatre}=location.state;
    const [seatMatrix,setSeatMatrix]=useState([]);
    const [selectedSeats, setSelectedSeats]=useState([]);
    const createSeats = () =>{
        let totalRows=5;
        let noOfSeatsInRow=14;
        let tempSeats=[];
        let row=0;
        let ch='A'
        while(row<totalRows){
            let col=1;
            let RowArr=[];
            while(col<=noOfSeatsInRow){
                RowArr.push(ch+col);
                col++;
            }
            tempSeats.push(RowArr);
            row++;
            ch=String.fromCharCode(ch.charCodeAt(0)+1);
        }
        setSeatMatrix(tempSeats);
    }

    useEffect(()=>{
        createSeats();
    },[])

    const handleSelectSeat = (newSeat) =>{
        if(selectedSeats.includes(newSeat)){
            setSelectedSeats(selectedSeats.filter(seat => seat !== newSeat))
        }
        else{
            setSelectedSeats([...selectedSeats,newSeat])
        }
        
    }

    return(
        <div>
            <div className="top_part">
                <h4>{title}</h4>
                <div>
                    <img src={screenImg} alt="" />
                    <p>Screen this side</p>
                </div>
                <h6>{theatre}</h6>
                
            </div>

            <div className="seats">
                {seatMatrix.map((seatArray,index)=>{
                    return(
                        <Row className="seatRow" key={index}>
                            {seatArray.map((seat,index)=>{
                                let isSelected=selectedSeats.indexOf(seat)>-1;
                                return(
                                    <Col className="seatCol" key={index}>
                                        <Button 
                                            style={{backgroundColor : isSelected ? "green" : "white", 
                                                color: isSelected ? "white" : "black"}} 
                                                className="seatButton" onClick={()=>{
                                                handleSelectSeat(seat)}}>
                                            {seat}
                                        </Button>
                                    </Col>
                                )
                            })}
                        </Row>
                    )
                })}
            </div>

            <div className="bottom_part">
                {
                    selectedSeats.length>0 ? 
                    <div className="price_div">
                        <div>
                            <h5>Selected seats</h5>
                            {selectedSeats.slice().sort((a, b) => a.localeCompare(b)).map((seat,index)=>{
                                return  <span key={index} style={{marginRight:"0.7rem"}}>{seat}</span>
                            })}
                        </div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
                            <h5>Total Price Rs: {selectedSeats.length * 200}</h5>
                            <Button onClick={()=>navigate('/success',{state:{
                                title: title,
                                selectedSeats: selectedSeats,
                                totalPrice: selectedSeats.length * 200,
                                theatre:theatre 
                            }})} style={{width:"10rem"}}>Checkout</Button>
                        </div>
                    </div> : 
                    <div>
                        <p style={{fontWeight:600, fontSize:"1.2rem"}}>No seats Selected</p>
                    </div>
                }
            </div>
            
        </div>
    )
}