
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './ModalMovie.css'

function ModalMovie(props){
  console.log('Clicked item:', props.clickedItem);

  const [comment, setComment] = useState('');
  const [flag,setFlag]=useState(false);
  const addToFav = async () => {
    // console.log(movie); https://movies-library-6ldd.onrender.com
   // const serverURL = `http://localhost:3001/addMovie`;
     const serverURL = `https://movies-library-6ldd.onrender.com/addMovie`;
    const mov = {
       id: props.clickedItem.id,
      title: props.clickedItem.title,
       genre: "",
     overview: props.clickedItem.overview,
     release_date: props.clickedItem.date,
      poster: `https://image.tmdb.org/t/p/w500${props.clickedItem.poster}`,      
      comment: comment
       };
    // console.log(movie)
      try {
       const response = await axios.post(serverURL, mov);
       console.log('Server response:', response.data);
       props.handleClose();
       setFlag(true);
      }
      catch (error) {
       console.error('the Movie is already in Fav list ', error);
     }
    //  props.handleClose()
      };
      const handleCloseFlagModal = () => {
        setFlag(false);
      };

    return (
      <>
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
      <Button variant="secondary" onClick={()=>addToFav()}>
      💗
      </Button>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      {/* <Button variant="primary">Understood</Button> */}
    </Modal.Footer>
  </Modal>
  {flag && (
        <Modal show={flag} onHide={handleCloseFlagModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p>The movie is added to favorites.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseFlagModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
  </>
  );
}

export default ModalMovie;