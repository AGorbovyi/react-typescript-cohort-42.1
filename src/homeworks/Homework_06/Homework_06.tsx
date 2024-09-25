import { ReactNode } from "react";
import { v4 } from "uuid";
import { Car } from "./types";
import "./styles.css";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const listItems: ReactNode = cars.map((car: Car) => {
    const cardId: string = v4();
    return (
      <div key={cardId} className="card-container">
        <p className="card-title">Car information:</p>
        <p className="card-info">Brand: {car.brand}</p>
        <p className="card-info">Price: {car.price}</p>
        <p className="card-info">Fuel: {car.isDiesel ? "Diesel" : "Petrol"}</p>
      </div>
    );
  });

  return <div className="homework-06-wrapper">{listItems}</div>;
}

export default Homework_06;
