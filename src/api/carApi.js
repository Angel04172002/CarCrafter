import requester from "./requester";


const baseUrl = 'http://localhost:5000/cars';


export const getAllCars = () => requester.get(baseUrl);
export const addNewCar = (name, image, description) => requester.post(baseUrl, { name, image, description });


