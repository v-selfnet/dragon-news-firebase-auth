import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author } = news;
    return (
        <Card className="mb-4">
            <Card.Header>
            {/* <Image src={author.img} roundedCircle /> */}
            header
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</>:
                        <>{details.slice(0,250)}...
                        <Link to={`/news/${_id}`}>Read more</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">footer</Card.Footer>
        </Card>
    );
};
export default NewsCard;