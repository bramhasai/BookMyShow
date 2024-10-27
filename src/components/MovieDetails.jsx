import React, { useEffect, useState } from "react";
import { Row,Col } from "react-bootstrap";
import {Button} from "react-bootstrap";
import '../Css/MovieDetails.css'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const IMAGE_URL='https://image.tmdb.org/t/p/w500/';
const TIMINGS=["10:00 AM", '02:30 PM', '06:30 PM', '10:00 PM'];

export default function MovieDetails(){
    const location = useLocation();
    const {id,title,overview,poster_path}=location.state;
    const [latlong, setlatlong] = useState({})
    const [theatres,setTheatres]=useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position)=>{
                setlatlong({
                    lat:position.coords.latitude,
                    long:position.coords.longitude
                })
            });
        }
    },[])

    useEffect(()=>{
        if(Object.keys(latlong).length>0){
            const geoApi =`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latlong.long},${latlong.lat},15000&bias=proximity:78.4740613,17.360589&limit=20&apiKey=3d84216258964f3bb97bb5c798c8b5dc`;
            axios.get(geoApi).then(res=>{
                const featuresArr=res.data.features;
                const names=[];
                featuresArr.map((feature)=>{
                    names.push(feature.properties.name);
                })
                setTheatres(names);
            })
        }
    },[latlong])
    return(
        <div>
            <Row className="movie_details_row">
                <Col className="movie_details_col">
                    <img src={IMAGE_URL+poster_path} alt="" />
                    <h5>{title}</h5>
                    <div>
                        <h6>Overview</h6>
                        <p>{overview}</p>
                    </div>
                    
                    
                </Col>
                <Col className="theatres_col">
                    {theatres.map((theatre,index)=>{
                        return(
                            <div className="theatre_showtime" key={index}>
                                <div>
                                    <h6>{theatre}</h6>
                                </div>
                                <div className="show_timings">
                                    {TIMINGS.map((time,index)=>{
                                    return(        
                                        <Button onClick={()=>{
                                            navigate(`/${id}/selectseat`,{state:{title:title,theatre:theatre}})
                                        }} className="showtime_button" key={index}>{time}</Button>
                                    )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}