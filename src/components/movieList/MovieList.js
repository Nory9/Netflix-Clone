import Movie from "../movie/Movie";
import './MovieList.css'
function MovieList(props){
    // const arr=props;
    return(
        <>
        <div className="cardd">
      { props.data.map(i => (
        <Movie title={i.title||i.name} id={i.id} poster={i.poster} date={i.date||i.first_air_date} overview={i.overview} />
       ))
       }</div>
        {/* <p>{arr[0].title}</p> */}
        </>
    );
}

export default MovieList;