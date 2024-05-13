import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Movie.css'
function Movie(props){
    return(

<div className='card1'>
<Card  classNmae="c" style={{ width: '18rem' ,backgroundColor: '#f3f3f3'}}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.poster}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.overview}
        </Card.Text>
        <Button variant="primary">3</Button>
      </Card.Body>
    </Card>
    </div>
    );
}

export default Movie;