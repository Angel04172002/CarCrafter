import { useState, useEffect } from 'react';
import * as carApi from '../api/carApi';

export function useGetAllCars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {

        carApi.getAllCars()
            .then(carResult => {
                
                setCars(carResult);
            });
    }, []);

    return [cars];
}


export function useAddNewCar() {
    return carApi.addNewCar;
}