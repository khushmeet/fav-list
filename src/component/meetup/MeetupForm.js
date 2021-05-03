import  * as ReactBootstrap from 'react-bootstrap';
import {useRef} from 'react';
import {useHistory} from 'react-router-dom';

export default function MeetupForm(props) {
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descInputRef = useRef();

    const history = useHistory(); 

    function submitHandler(event) {
        event.preventDefault();
        //console.log(event);
        // get currently entered value
        const enteredTitleValue =  titleInputRef.current.value;
        const enteredImageValue =  imageInputRef.current.value;
        const enteredDescValue =  descInputRef.current.value;

        const meetupData = {
            title : enteredTitleValue,
            image : enteredImageValue,
            description : enteredDescValue
        }

       // console.log(meetupData);
        submitData(meetupData);

    }

    function submitData(meetupData) {
        console.log(meetupData);
        fetch(
            'https://react-demo-838ad-default-rtdb.europe-west1.firebasedatabase.app/meetupData.json',
            {
                method : 'POST',
                body  : JSON.stringify(meetupData)
            }
        ).then( ()=> {history.replace('/')});

    }

    return <ReactBootstrap.Container>
        <ReactBootstrap.Card className='p-5'>
            <h4>{props.heading}</h4>
        <ReactBootstrap.Form className='mt-4'> 
        
            <ReactBootstrap.Form.Group >
                <ReactBootstrap.Form.Label>Title</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control type="text" placeholder="title" ref={titleInputRef} />
            </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group >
                <ReactBootstrap.Form.Label>Image</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control type="text" placeholder="Image url" ref={imageInputRef}  />
            </ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Group controlId="exampleForm.ControlTextarea1">
                <ReactBootstrap.Form.Label>Description</ReactBootstrap.Form.Label>
                <ReactBootstrap.Form.Control type="textarea" ref={descInputRef} rows={3} />
            </ReactBootstrap.Form.Group>
            <ReactBootstrap.Form.Group>
                <ReactBootstrap.Form.Control type="button" onClick={submitHandler} value='Submit' className='btn btn-success btn-lg float-right' />
            </ReactBootstrap.Form.Group>

        </ReactBootstrap.Form>
        </ReactBootstrap.Card>
    </ReactBootstrap.Container>;    
}