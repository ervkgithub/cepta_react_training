import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class NotFound extends Component{
    render(){
        return(
            <>
                <h1 className="text-danger text-center">Page you are looking for not found</h1>
                <p className="text-center"><a href="/">Go to Home Page</a></p>
                <Navbar expand="lg">
                    <Nav.Link><Link to="/home" className='btn btn-outline-success'>Home</Link></Nav.Link>
                    <Nav.Link><Link to="/counter" className='btn btn-outline-success'>Counter</Link></Nav.Link>
                    <Nav.Link><Link to="/todo" className='btn btn-outline-success'>ToDo List</Link></Nav.Link>
                    <Nav.Link><Link to="/compmodal" className='btn btn-outline-success'>Modal Component</Link></Nav.Link>
                    <Nav.Link><Link to="/compapi" className='btn btn-outline-success'>Fetch API 1</Link></Nav.Link>          
                          
                </Navbar>
            </>
        )
    }
}

export default NotFound;