import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import '../Css/Home.css';
import { useNavigate } from "react-router-dom";

const MOVIE_API='https://api.themoviedb.org/3/movie/now_playing?api_key=a0aa117344e38c46e616b4af160b2d01&language=en-US&page=1';
const IMAGE_URL='https://image.tmdb.org/t/p/w500/';

export default function Home(){
    const [movies,setMovies]=useState([]);
    const navigate =useNavigate();

    useEffect(()=>{
        axios.get(MOVIE_API).then((res)=>{
            setMovies(res.data.results);
        })
    },[])

    const handleClick = (movie)=>{
        navigate('/movieDetails/'+movie.id, {state:movie});
    }

    return(
        <div className="movies_div">
            {movies.map((movie)=>{
                console.log(movie);
                console.log(IMAGE_URL+movie.poster_path);
                return(
                    <Card onClick={()=>handleClick(movie)} className="movie-card" key={movie.id}>
                        <Card.Img variant="top" className="movie_img" src={IMAGE_URL+movie.poster_path} />
                        <Card.Title style={{fontWeight:"700", fontSize:"1rem"}}>{movie.title}</Card.Title>
                    </Card>
                )
            })}
        </div>
    )
}