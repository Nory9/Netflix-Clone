import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Movie.css'
function Movie(props){
    return(

<div className='card1'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.poster} />
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