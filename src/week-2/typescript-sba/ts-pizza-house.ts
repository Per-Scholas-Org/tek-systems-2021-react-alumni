// create String Enum characteristics of our Pizza for strict types

enum Size {
    Small = 'SMALL',
    Medium = 'MEDIUM',
    Large = 'LARGE',
}
enum Topping {
    Pepperoni = 'PEPPERONI',
    Pineapple = 'PINEAPPLE',
    Mushrooms = 'MUSHROOMS',
    Sausage = 'SAUSAGE',
    Onion = 'ONION',
    Cheese = 'CHEESE'
}

enum Sauce {
    Tomato = 'TOMATO',
    Barbeque = 'BARBEQUE',
    None = 'NONE',
}

enum Crust {
    Regular = 'REGULAR',
    Thin = 'THIN',
    Thick = 'THICK',
    Stuffed = 'STUFFED'
}

type address = {street:string, city:string, zip:number};
// create a pizza type and assign it an object who's property values are our Enums
interface Pizza {
    size: Size,
    topping: Topping,
    sauce: Sauce,
    crust: Crust,
    isVegetarian?: boolean,
    quantity: number,
    isOrdered: boolean,
    address: address
}

// create a variable named userPizza of type pizza to create our personal pizza
let userPizza: Pizza;

// Create a function to create the Pizza
const orderUp = (userPizza:Pizza):void => {
    let date = new Date();
    
    if (userPizza.isOrdered) {
        console.log( `Order up! You're ${userPizza.size} ${userPizza.topping} pizza with a ${userPizza.crust} crust and ${userPizza.sauce} sauce base was ordered on ${date} is on its way to ${userPizza.address.street} ${userPizza.address.city} ${userPizza.address.zip}.`);
    } else {
        console.log('Ready to order?');
    }
}



userPizza = {
    size: Size.Large,
    topping: Topping.Pineapple,
    sauce: Sauce.Barbeque,
    crust: Crust.Thick,
    quantity: 5,
    isOrdered: true,
    address: {street:'123 Main St', city:'Bronx, New York', zip: 10453}
}



orderUp(userPizza);