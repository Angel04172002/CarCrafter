import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import { Link, useNavigate } from 'react-router-dom';

export default function CarCard({ name, imageUrl, description }) {

    return (

        <Card style={{ width: '35rem', marginRight: '2em' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

                {/* <Link to='/cars/>Delete car</Link> */}
            </Card.Body>
        </Card>
    )
}