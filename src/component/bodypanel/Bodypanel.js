import MovieCard from '../moviecard/MovieCard'
import React, { useState, useEffect } from 'react';
import '../bodypanel/bodypanelstyle.css'
import { useSelector, useDispatch } from 'react-redux';
import {fetchMovieList} from '../store/action/fetchMovieListAction'
import axios from "axios";

export default function BodyPanel(props) {
  const dispatch = useDispatch()

  console.log("BodyPanel", props.userName)

  const fetchData = async () => {
    await axios({
      method: "post",
      url: `http://localhost:8080/MovieGo/MovieDetail`,
      data : {}

    })
      .then(function (response) {
        if (response.data.length > 0) {
          
          dispatch(fetchMovieList(response.data))
          console.log("esponse.data",response.data)
          
        } else {
         
        }
      })
      .catch(function (response) {
        console.log(response);
      });

  
  }
  

  useEffect(() => {
    fetchData()
  },[]);

  const movieData = useSelector((state) =>
    state.movieListReducer.movieList
  )
  console.log("movieData",movieData)


  return (
    <div className='parent'>
      <div className='heading_title'>Trending Movies</div>
      
          {movieData && movieData.map(index => {
            return (
            <MovieCard key = {index.id} data = {index} userName = {props.userName}></MovieCard>
          ) })}

    </div>
  )
}
