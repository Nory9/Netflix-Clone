import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../modalMovie/ModalMovie';
import { useState } from 'react';
import './Movie.css'
function Movie(props){
  const [isExpanded, setIsExpanded] = useState(false); 
  const [clickedItem, setClickedItem] = useState({});
    const toggleDescription = () => setIsExpanded(!isExpanded);
    const previewText = props.overview.split(' ').slice(0,7).join('\n');
    const [show, setShow] = useState(false);
// console.log(props)
  const handleClose = () => {
    setShow(false)
    setClickedItem(props)
  };
  const handleShow = () => setShow(true);
    // console.log("Preview Text:", previewText);
    // console.log(" Text:", props.overview);
    return(

<div className='card1'>
<Card  className="c" style={{ width: '18rem' ,backgroundColor: '#f3f3f3'}}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.poster}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {isExpanded ? props.overview : previewText + ' ...'}
          {/* {props.overview} */}
        </Card.Text>
        <Button variant="primary" className='btn' onClick={() => { handleShow(props)}}>Add to favorite</Button>
        <Button className='btn' onClick={toggleDescription} variant="primary"> {isExpanded ? 'See Less' : 'See More'}</Button>
      </Card.Body>
    </Card>
    <ModalMovie show={show} handleClose={handleClose} clickedItem={clickedItem}></ModalMovie>
    </div>
    );
}

export default Movie;