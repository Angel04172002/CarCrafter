import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function CarCard({ name, imageUrl, description }) {

    return (
        <Card style={{ width: '35rem', marginRight: '2em' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {/* <Link to=""></Link> */}
            </Card.Body>
        </Card>
    )
}