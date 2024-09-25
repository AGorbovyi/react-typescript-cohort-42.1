import "./styles.css"

function Homework_06() {

    interface Car {
        brand: string,
        price: number,
        isDiesel: boolean
    };
    
    const cars: Car[] = [ 
        { brand: "BMW", price: 20000, isDiesel: true }, 
        { brand: "Mercedes", price: 22000, isDiesel: false }, 
        { brand: "Porshe", price: 50000, isDiesel: true }, 
        { brand: "Nissan", price: 25000, isDiesel: false }, 
        { brand: "Audi", price: 50000, isDiesel: true } 
    ];

    const listItems = cars.map((car) => {
        return (
            <div className='card-container'>
                <p className='card-title'>Car information:</p>
                <p className='card-info'>Brand: {car.brand}</p>
                <p className='card-info'>Price: {car.price}</p>
                <p className='card-info'>Diesel: {car.isDiesel}</p>
            </div>
        );
      });      

    
return (
    <div className="homework-06-wrapper">
         {listItems}
    </div>
);

}



export default Homework_06;