import MovieCard from '../moviecard/MovieCard'
import React, { useState, useEffect } from 'react';
import '../bodypanel/bodypanelstyle.css'
import { useSelector, useDispatch } from 'react-redux';
import {fetchMovieList} from '../store/action/fetchMovieListAction'

export default function BodyPanel() {
  const dispatch = useDispatch()

  const fetchData = () => {
    var data = [
      {
        id:1,
        name: 'K.G.F: Chapter 2',
        rating: 9.1,
        duration: '2 h 50 min',
        releaseYear: 2022,
        ageLimit: 'U/A 15+',
        des:'K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second instalment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty and Prakash Raj. The film begins as the assassin Raja Krishnappa Bairya “Rocky”, who after establishing himself as the kingpin of the Kolar Gold Fields “K.G.F” also known as El Dorado (in the film), must retain his supremacy over adversaries and government officials and also from Adheera, the youngest brother of Garuda, who is keen to capture K.G.F and Ramika Sen, who later becomes Prime Minister, trying to stop Rocky from reigning his empire over India, while also coming to terms with his past and revolves around how he lives up to the last wish given to his mother.',
        director:'Siddharth',
        staring:'Siddharth, Ritik, Sunny, Shivam',
        genres:'Drama',
        subtiles:'English',
        audioLanguage:'Hindi',
        imgsrc:''
      },
      {
        id:2,
        name: 'K.G.F: Chapter 1',
        rating: 9.1,
        duration: '2 h 50 min',
        releaseYear: 2022,
        ageLimit: 'U/A 15+',
        des:'K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second instalment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty and Prakash Raj. The film begins as the assassin Raja Krishnappa Bairya “Rocky”, who after establishing himself as the kingpin of the Kolar Gold Fields “K.G.F” also known as El Dorado (in the film), must retain his supremacy over adversaries and government officials and also from Adheera, the youngest brother of Garuda, who is keen to capture K.G.F and Ramika Sen, who later becomes Prime Minister, trying to stop Rocky from reigning his empire over India, while also coming to terms with his past and revolves around how he lives up to the last wish given to his mother.',
        director:'Siddharth',
        staring:'Siddharth, Ritik, Sunny, Shivam',
        genres:'Drama',
        subtiles:'English',
        audioLanguage:'Hindi',
        imgsrc:''
      },
    ]
    dispatch(fetchMovieList(data))
  }
  

  useEffect(() => {
    fetchData()
  },[]);

  const movieData = useSelector((state) =>
    state.movieListReducer.movieList
  )


  return (
    <div className='parent'>
      <div className='heading_title'>Trending Movies</div>
      
          {movieData && movieData.map(index => {
            return (
            <MovieCard key = {index.id} data = {index}></MovieCard>
          ) })}

    </div>
  )
}
