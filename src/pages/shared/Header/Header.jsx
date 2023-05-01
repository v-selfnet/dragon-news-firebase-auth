import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism without fear or favor </p>
                <p className='fs-3'>{moment().format('H:mm')}</p>
                <p>{moment().format('ddd, DD MMMM YYYY')}</p>
            </div>
            <div className='bg-danger d-flex'>
                <Button className='btn btn-danger'>Breaking News</Button>
                <Marquee speed={50}>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur sunt obcaecati animi assumenda odio debitis delectus nesciunt. Sequi, magnam?</p>
                </Marquee>
            </div>
            
            <div className='d-flex justify-content-between my-5'>
                <Nav variant="tabs" defaultActiveKey="/home" >
                    <Nav.Item>
                        {/* <Nav.Link to='/'>Home</Nav.Link> */}
                        <Link to='/'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <Nav.Link to='/about'>About</Nav.Link> */}
                        <Link to='/about'>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <Nav.Link to='/career'>Career</Nav.Link> */}
                        <Link to='/career'>Career</Link>
                    </Nav.Item>
                </Nav>
                    
                        <Link to='/login'><button className='btn btn-primary'>Login</button></Link>
                    
            </div>

        </Container >
    );
};

export default Header;