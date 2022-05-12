
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    return (
        <>
            <div className='bg-info'>
                <Navbar expand="lg">
                    <Nav.Link><Link to="/home" className='btn btn-outline-success'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/counter" className='btn btn-outline-success'>Counter</Link></Nav.Link>
                    <Nav.Link><Link to="/todo" className='btn btn-outline-success'>ToDo List</Link></Nav.Link>
                    <Nav.Link><Link to="/compmodal" className='btn btn-outline-success'>Modal Component</Link></Nav.Link>
                    <Nav.Link><Link to="/compapi" className='btn btn-outline-success'>Fetch API 1</Link></Nav.Link>
                    <Nav.Link><Link to="/fetchapi" className='btn btn-outline-success'>Fetch API 2</Link></Nav.Link>
                    <Nav.Link><Link to="/accordemo" className='btn btn-outline-success'>Accordion Demo</Link></Nav.Link>
                    <Nav.Link><Link to="/funtodolist" className='btn btn-outline-success'>Functional ToDOLIst</Link></Nav.Link>
                    <Nav.Link><Link to="/digiclock" className='btn btn-outline-success'>Digital Clock Functional</Link></Nav.Link>
                    <Nav.Link><Link to="/digiclockclass" className='btn btn-outline-success'>Digital Clock Class</Link></Nav.Link>
                    <Nav.Link><Link to="/formfn" className='btn btn-outline-success'>Form Fn</Link></Nav.Link>
                    <Nav.Link><Link to="/emicalc" className='btn btn-outline-success'>EMI Calculator Class</Link></Nav.Link>
                    <Nav.Link><Link to="/contextdemo" className='btn btn-outline-success'>Context DEmo</Link></Nav.Link>
                    <Nav.Link><Link to="/expensetracker" className='btn btn-outline-success'>Expense Tracker</Link></Nav.Link>
                    <Nav.Link><Link to="/currencyconverter" className='btn btn-outline-success'>Currency Converter</Link></Nav.Link>
                    <Nav.Link><Link to="/hoc1" className='btn btn-outline-success'>HOC1</Link></Nav.Link>
                    <Nav.Link><Link to="/hoc2" className='btn btn-outline-success'>HOC2</Link></Nav.Link>

                </Navbar>
            </div>
        </>
    )
}

export default Menu;