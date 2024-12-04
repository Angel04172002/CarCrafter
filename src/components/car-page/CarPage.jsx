import CarFilter from "../car-filter/CarFilter";
import CarAdd from "../car-add/CarAdd";
import { useGetAllCars } from "../../hooks/cars-hooks";
import CarList from "../car-list/CarList";


export default function CarPage() {

    const [cars] = useGetAllCars();


    return (
        <>
            <CarFilter />
            <CarList cars={cars} />

        </>
    )
}