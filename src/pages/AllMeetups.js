import React from 'react';
import MeetupLists from '../component/meetup/MeetupList';
import  * as ReactBootstrap from 'react-bootstrap';

const DUMMY_DATA = [{
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },];

  function fetchAllMeetups() {
    fetch('https://react-demo-838ad-default-rtdb.europe-west1.firebasedatabase.app/meetupData.json').then( 
        response => { 
            return response.json();
        }
    );

  }


function AllMeetupsPage() {
    return <React.Fragment>
         <section className='mt-5'>
            <ReactBootstrap.Container>
            <ReactBootstrap.Row>
                {DUMMY_DATA.map((meetup) =>   <MeetupLists key={meetup.id} meetup={meetup} image={meetup.image} title={meetup.title} description={meetup.description} />      )} 
            </ReactBootstrap.Row>
            </ReactBootstrap.Container>
           
         </section>

    </React.Fragment>;
}
  
  export default AllMeetupsPage;