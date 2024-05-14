
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './ModalMovie.css'

function ModalMovie(props){
  console.log('Clicked item:', props.clickedItem);

  const [comment, setComment] = useState('');
  const addToFav = async (movie) => {
    console.log(movie);
    const serverURL = `https://movies-library-6ldd.onrender.com/addMovie`;
    const mov = {
       id: movie.id,
      title: movie.title,
       genre: "",
     overview: movie.overview,
     release_date: movie.date,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster}`,      
      comment: comment
    };
    console.log(movie)
    // try {
      const response = await axios.post(serverURL, mov);
      console.log('Server response:', response.data);
    // } catch (error) {
    //   console.error('Failed to add to favorites:', error);
    // }
};

    return (
    <Modal
    show={props.show}
    onHide={props.handleClose}
  >
    <Modal.Header closeButton>
      <Modal.Title>{props.clickedItem.title}</Modal.Title>
    </Modal.Header>
    {/* <Modal.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.clickedItem.poster}`} /> */}
    
    <Modal.Body>
    <Image className='image' src={`https://image.tmdb.org/t/p/w500${props.clickedItem.poster}`}></Image>
    <textarea
          className="form-control mt-3"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
     {/* {props.clickedItem.overview} */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>addToFav(props.clickedItem)}>
      💗
      </Button>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      {/* <Button variant="primary">Understood</Button> */}
    </Modal.Footer>
  </Modal>
  );
}

export default ModalMovie;