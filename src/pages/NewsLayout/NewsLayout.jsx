import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import RightNav from '../shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
       
       <Container>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                </Col>
                
                <Col lg={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
        
        <Footer></Footer>
        
    </div>
    );
};

export default NewsLayout;