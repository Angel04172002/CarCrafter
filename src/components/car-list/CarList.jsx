import { useGetAllCars } from '../../hooks/car-hooks';
import styles from './CarList.module.css';

import CarCard from './car-card/CarCard';
import { Row } from 'react-bootstrap';

export default function CarList() {

    const [cars] = useGetAllCars();

    return (
        <>

            <h2 className={styles['title']}>All cars</h2>

            <Row xs={1} md={2} className="g-4">

                {cars.map(car =>
                    <CarCard
                        key={car._id}
                        {...car}
                    />
                )}

            </Row>

            {cars.length == 0 && <h2 style={{ fontSize: '2em' }}>No cars yet</h2>}
        </>
    )

}