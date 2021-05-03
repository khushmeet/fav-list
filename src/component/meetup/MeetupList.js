import { Card, Button, Col } from 'react-bootstrap';
import MeetupModal from './MeetupModal';

function MeetupLists(props) {

    function MeetupModalNew(e) {
        console.log(e);
    }

    return <div className='col-md-4'><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{ props.title }</Card.Title>
      <Card.Text>
        { props.description }
      </Card.Text>
      <Button variant="primary" onClick={MeetupModalNew}>Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>;
}

export default MeetupLists;