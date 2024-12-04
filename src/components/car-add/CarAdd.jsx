import styles from './CarAdd.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import { useAddNewCar } from '../../hooks/cars-hooks';
import { useNavigate } from 'react-router';
import { useState } from 'react';



const initialValues = {
    name: '',
    imageUrl: '',
    description: ''
};


export default function CarAdd() {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const addNewcar = useAddNewCar();

    const formHandler = async (formValues) => {

        try {

            await addNewcar(formValues);
            navigate('/car/all');

        } catch {
            return setError(err);
        }
    };

    const { formValues, changeHandler, submitHandler } = useForm(initialValues, formHandler);


    return (

        <div style={{
            display: 'block',
            width: 700,
            padding: 30,
            margin:'0 auto'
        }}>


            <h2 className={styles['form-title']}>Add New Car</h2>


            {error && (
                <p>{error}</p>
            )}

            <Form onSubmit={submitHandler} className={styles['car-form']}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Name</Form.Label>
                    <Form.Control type="text" value={formValues.name} name="name" onChange={changeHandler} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Image URL</Form.Label>
                    <Form.Control type="text" value={formValues.imageUrl} name="imageUrl" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles['form-label']}>Description</Form.Label>
                    <Form.Control type="text" value={formValues.description} name="description" onChange={changeHandler} />
                </Form.Group>

                <Button className={styles['create-btn']} variant="primary" type="submit">
                    Create Car
                </Button>
            </Form>

        </div>
    )
}