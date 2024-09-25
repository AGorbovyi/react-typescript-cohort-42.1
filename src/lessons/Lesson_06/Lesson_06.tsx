import "./styles.css";

function Lesson_06() {
    // 1st Type: String - строковый тип("", '', ``)
    let userFullName:  string = "John Johnson";
    userFullName = "Johnny Depp";
    console.log(userFullName);

    let hello = `Hello, ${userFullName}`;
    console.log(hello);


    // 2nd Type: Number - строковый тип("", '', ``)
    let number1: number = 200;
    number1 = 35.365;
    let number2: number = number1 / 0;


    // 3rd Type: Boolean
    let isAdmin: boolean = true;
    isAdmin = false;
    

    // 4th Type: Array
    const animals: string[] = ["tiger", "lion", "cat"];
    animals.push("Dog");
    console.log(animals);

    const numbers: number[] = [1, 2, 3, 4, 5];


    // 5th Type: Tupel
    const userArray: [string, string, string, number, string, string, string, number] =
    ["name", "John", "age", 30, "name", "Pavel", "age", 40];

    userArray.push(100);
    userArray.push("Mark");
    console.log(userArray);


    // 6th Type: Functions
    // 6.1. void function - function don't return anything, just do some operation
    const sayHi = (personName: string): void => {
        console.log(`Hello, ${personName}`);
    };
    sayHi("Mark");


    const makeAlert: (message: string) => void = (message) => {
        alert(message);
    };
    // makeAlert("Warning!");


    // 6.2. function - function don't return anything
    const sum = (a: number, b: number): number => {
        return a + b;
    };
    let result: number = sum(5, 5);
    
    // 7th Object
    // 7.1 Interface

    interface Admin {
        isAdmin: boolean;
    }

    interface UserAnimal {
        pet?: string;
    }

    interface User<CarType> extends Admin, UserAnimal {
        firstName: string;
        lastName: string;
        age: number;
        job: string;
        salary?: number;   // optional key
        // car: undefined | string | string[]
        car: CarType;
    }

    // adding properties for existig interface
    interface User <CarType> {
        isFamily: boolean;
    }

    const user1: User<string> = {
        firstName: "John",
        lastName: "Johnson",
        age: 30,
        job: "QA",
        // salary: 3000,
        isAdmin: true,
        isFamily: true,
        car: "Porsche 911",
    }
    console.log(user1);
    

    // 8. Undefined
    let userData: undefined = undefined;

    // 9. Null
    let emptyVariable: null = null;

    // 10. any
    let someVariable: any = () => {};
    someVariable = "Some string";

    // 11. type
    type Images = undefined | string[];

    let images: Images = undefined;
    images = ["url1", "url2", "url3"];


    type GlobalAnimalProps = {
        isAnimal: boolean;
    }

    type Animal = {
        // isAnimal: boolean;
        type: string;
        age: number;
        color: string;
        isWild: boolean;
    }

    type GlabalAnimal = GlobalAnimalProps & Animal

    const animal: GlabalAnimal = {
        isAnimal: true,
        type: "Tiger",
        age: 12,
        color: "orange",
        isWild: true
    };


    // 12. Generics
    type ArrayGeneration<Type> = Type[];

    // const languages: string[] = ["English", "Russian", "Spanish"];
    // const prices: number[] = [1000, 500, 400];
    const languages: ArrayGeneration<string> = ["English", "Russian", "Spanish"];
    const prices: ArrayGeneration<number> = [1000, 500, 400];
    console.log(languages);
    console.log(prices);



    return (
        <div className="lesson-06-wrapper">
            Lesson 06
        </div>
    );
}

export default Lesson_06;