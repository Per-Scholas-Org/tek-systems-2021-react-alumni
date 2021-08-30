/** Create the pizza */

interface Toppings {
  [key: string]: boolean;
}

const vegetarianToppings: Toppings = {
  onions: true,
  spinach: true,
  tomato: true,
};

interface PizzaInterface {
  toppings: Array<string>;
  isVegetarian: boolean;
  addTopping: (a: string) => void;
  setIsVegetarian: (a: boolean) => void;
}

class Pizza implements PizzaInterface {
  toppings: string[]
  isVegetarian: boolean;
  size: string;
  constructor() {
    this.toppings = [];
    this.isVegetarian = false;
    this.size = "";
  }

  setSize(size: string) {
    this.size = size;
  }

  addTopping(topping: string) {
    this.toppings.push(topping)
  }

  setIsVegetarian(isVegetarian: boolean) {
    this.isVegetarian = isVegetarian;

    if (isVegetarian) {
      this.toppings = this.toppings.filter((topping: string) => {
        return vegetarianToppings[topping] || false;
      })
    }
  }
}

const myPizza = new Pizza();
console.log('---------------')
myPizza.addTopping("anchovies"); // meat topping
myPizza.addTopping("onions"); // veggie topping
// console.log(myPizza);

// test making pizza vegetarian. should remove the meat topping, not veggie
myPizza.setIsVegetarian(true)
// console.log(myPizza);

/** Create the Order **/

interface Address {
  streetAddress: string;
  city: string;
  zipCode: string;
}

interface OrderInterface {
  customerName: string | null;
  pizzas: Array<PizzaInterface>;
  address: Address | null;
  isSubmitted: boolean;
}

function createOrder(address?: Address, customerName?: string): OrderInterface {
  return {
    address: address || null,
    customerName: customerName || null,
    pizzas: [],
    isSubmitted: false,
  };
}

const myOrder = createOrder();
console.log(myOrder);

const addPizzaToOrder = function(order: OrderInterface, pizza: PizzaInterface) {
  order.pizzas.push(myPizza);
}

function createSafelyModifyOrderFunction(order: OrderInterface, callback: any) {
  const higherOrderFunction = (args: any) => {
    if(order.isSubmitted) {
      console.log('Order submitted, unable to modify!!!');
      return;
    }
    else {
      callback(order, args)
    }
  }

  return higherOrderFunction;
}

// submitOrder(myOrder);
const addPizzaToOrderSafely = createSafelyModifyOrderFunction(myOrder, addPizzaToOrder);
addPizzaToOrderSafely(myPizza);
console.log('order ', myOrder);

function setOrderAddress(order: OrderInterface, address: Address) {
  order.address = address;
}

function submitOrder(order: OrderInterface) {
  order.isSubmitted = true;
}
