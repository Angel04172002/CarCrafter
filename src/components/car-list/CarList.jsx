import Row from 'react-bootstrap/Row';
import CarCard from './car-card/CarCard';
import styles from './CarList.module.css';


export default function CarList({ cars }) {

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

            {cars.length == 0 && <h2 style={{ fontSize: '2em' }}>No Cars yet</h2>}
        </>
    )
}