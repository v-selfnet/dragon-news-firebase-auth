import React from 'react';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url } = news;
    return (
        <Card className="mb-4">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>{details}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">footer</Card.Footer>
        </Card>
    );
};
export default NewsCard;