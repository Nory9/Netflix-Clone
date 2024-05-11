import './Home.css'
// import Header from '../components/header/Header'
import Header from '../header/Header';
import { useEffect } from 'react';
function Home(props){

    const sendReq= (async ()=>{
        const serverURL ='https://movies-library-6ldd.onrender.com/trending'
        const res= await fetch(serverURL);
        const trendingMovies= await res.json();
        console.log(trendingMovies);
    });
    useEffect(()=>{
        sendReq();
    },[])
return (
<>
<Header/>
</>
);
}
export default Home;