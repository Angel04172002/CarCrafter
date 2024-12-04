import requester from "./requester";


const baseUrl = 'http://localhost:5000/cars';


export const getAllCars = () => requester.get(baseUrl);

export const addNewCar = (data) =>
    requester.post(baseUrl, data);


export const filterCars = (carName) => {

    const params = new URLSearchParams(`${baseUrl}?name_like=${carName}`);
    return requester.get(`${baseUrl}${params.toString()}`);
}