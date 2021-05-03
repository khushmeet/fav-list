import { Nav, Navbar, Button, Form, FormControl, NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom';

function NavigationMenu() {
    return <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Link  to='/' className='text-white mr-2' >All Meetups</Link>
            <Link  to='/new-meetup' className='text-white mr-2' >Add Meetups </Link>
            <Link  to='/favorites' className='text-white' >Fav Meetups </Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>;

}

export default NavigationMenu;