
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import './ModalMovie.css'
function ModalMovie(props){
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
     {/* {props.clickedItem.overview} */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      {/* <Button variant="primary">Understood</Button> */}
    </Modal.Footer>
  </Modal>
  );
}

export default ModalMovie;