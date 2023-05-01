import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const RightNav = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <>
            <h3>Login with</h3>
            <div className='d-grid gap-2 mx-auto'>
                <Button variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-primary"><FaGithub /> Login with Github</Button>
            </div>

            <h3 className='mt-5'></h3>
            <div>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>Find with us</ListGroup.Item>
                    <ListGroup.Item as="li"><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item as="li" disabled><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item as="li"><FaInstagram/> Instagramc</ListGroup.Item>
                </ListGroup>
            </div>

            <QZone></QZone>
        </>
    );
};

export default RightNav;