import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { createUser } = useContext(AuthContext)
    // console.log(createUser);

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <h3>Please Login!</h3>
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="d-grid">
                    <Button variant="primary" type="submit">Signin</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;