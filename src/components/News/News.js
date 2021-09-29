import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./News.css"

const News = (props) => {

    const { title, author, urlToImage } = props.newspaper
    let { description } = props.newspaper;
    description = description.slice(0, 200);
    description += " ...."

    return (
        <Col>
            <Card className="card-height">
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <h5>Author:{author}</h5>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;