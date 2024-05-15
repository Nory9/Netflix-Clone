import './Home.css'
import Header from '../header/Header';
import { useEffect, useState } from 'react';
import MovieList from '../movieList/MovieList';
function Home(props){
    const [trendingMovies,setTrendingMovies]=useState([]);
    const sendReq= (async ()=>{
         const serverURL ='https://movies-library-6ldd.onrender.com/trending';
       //  const serverURL ='http://localhost:3001/trending';
        const res= await fetch(serverURL);
        const data= await res.json();
        setTrendingMovies(data)
        console.log(data);
    });
    useEffect(()=>{
        sendReq();
    },[])
return (
<>
<Header/>
<MovieList data={trendingMovies}/> 
</>
);
}
export default Home;