
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    return (
        <>
            <div className='bg-info'>
                <div className='container'>
                    <Navbar expand="lg">
                        <Nav.Link><Link to="/home" className='btn btn-outline-success'>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/counter" className='btn btn-outline-success'>Counter</Link></Nav.Link>
                        <Nav.Link><Link to="/todo" className='btn btn-outline-success'>ToDo List</Link></Nav.Link>
                        <Nav.Link><Link to="/compmodal" className='btn btn-outline-success'>Modal Component</Link></Nav.Link>
                        <Nav.Link><Link to="/compapi" className='btn btn-outline-success'>Fetch API 1</Link></Nav.Link>
                        <Nav.Link><Link to="/fetchapi" className='btn btn-outline-success'>Fetch API 2</Link></Nav.Link>
                        <Nav.Link><Link to="/accordemo" className='btn btn-outline-success'>Accordion Demo</Link></Nav.Link>
                    </Navbar>

                </div>
            </div>
        </>
    )
}

export default Menu;