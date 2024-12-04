import { useState, useEffect } from "react";
import * as carApi from '../api/carApi';


export function useGetAllCars() {

    const [cars, setCars] = useState([]);

    useEffect(() => {

        carApi.getAllCars()
            .then(result => {

                setCars(result);
            });
    }, []);

    return [cars];
}