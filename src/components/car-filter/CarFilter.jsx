import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useFilterCars } from "../../hooks/cars-hooks";
import { useState } from "react";



export default function CarFilter() {

    const [carName, setCarName] = useState('');
    const filteredCars = useFilterCars(carName);



    const handleSearch = (e) => {
        setCarName(e.target.value);
    };

    return (
        <Form onSubmit={handleSearch} style={{ marginTop: '5em' }}>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter car name" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    )

}





