import requester from "./requester";


const baseUrl = 'http://localhost:5000/cars';


export const getAllCars = () => requester.get(baseUrl);

export const addNewCar = (name, imageUrl, description) =>
    requester.post(baseUrl, { name, imageUrl, description });