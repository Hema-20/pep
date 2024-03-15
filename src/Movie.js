import React, { useState } from 'react'
// import image from "./vikram.jpg";
import Counter from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TopBar from './TopBar'
import './App.css';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Movie({movieTake,getMovies}) {

  const navigate = useNavigate();

    const ratingStyles={

    }
    const[show,setShow]=useState(true);

    const deleteMovie = (id) =>{
      fetch(`https://65f16b7c034bdbecc762705b.mockapi.io/movie/${id}`,{
        method:"DELETE",
      })
      .then(()=>getMovies())
      .then(()=>alert("Do you want to delete this movie?"))
    } 
  return (
    <Card className="movie-container">
        <img className="movie-poster" src={movieTake.poster}/>
        <CardContent>
            <div className='movie-spec'>
        <h2 className='movie-name'>{movieTake.name}
            <IconButton color="primary" aria-label="Toggle-Description" onClick={()=> setShow(!show)}>
                {show ? <ExpandLessIcon fontSize='large'/> : <ExpandMoreIcon fontSize='large'/>}
            </IconButton>

            <IconButton color="primary" aria-label="Movie-Info" onClick={()=> navigate(`/portal/view/${movieTake.id}`)}>
               <InfoIcon fontSize='medium'/>
            </IconButton>
      </h2>
            <h3 className='movie-rating'>⭐ {movieTake.rating}</h3>
            </div>
        </CardContent>
        
        
          {show ? <p className='movie-summary'>{movieTake.summary}</p>: null }

        
        <CardActions>
         <Counter/> 
        <IconButton 
          sx={{marginLeft:"auto"}}
          aria-label="editMovie"
          onClick={()=> navigate(`/portal/edit/${movieTake.id}`)}
          >
            <EditIcon color="secondary"/>
          </IconButton>
          <IconButton 
          sx={{marginLeft:"auto"}}
          aria-label="deleteMovie"
          onClick={()=> deleteMovie(movieTake.id)}>
            <DeleteIcon color="secondary"/>
          </IconButton>
        </CardActions>
        
    </Card>
  )
}
