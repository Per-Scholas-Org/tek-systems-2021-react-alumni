type pizzaSizeType = "small" | "medium" | "large";
type toppingType = "pepperoni"|"sausage"|"ham"|"anchovies"|"onions"|"mushrooms"|"peppers"|"pineapple"|"spinach"|"garlic"|"olives";
const PIZZA_TOPPINGS_LIST:Array<toppingType> = ["pepperoni", "sausage", "ham", "anchovies", "onions", "mushrooms", "peppers", "pineapple", "spinach", "garlic", "olives"];
const MEAT_TOPPINGS_LIST:Array<toppingType> = ["pepperoni", "sausage", "ham", "anchovies"];
type pizzaToppingsType = Array<boolean>;    // True/false for each topping in PIZZA_TOPPINGS_LIST

interface iPizza {
    size:pizzaSizeType;
    vegetarian:boolean;
    toppings:pizzaToppingsType;
}

class Pizza implements iPizza {
    size:pizzaSizeType;
    vegetarian:boolean;
    toppings:pizzaToppingsType;

    constructor(size:pizzaSizeType = "medium") {
      this.size = size; // Pizza size given by function parameter. Default to medium
      this.vegetarian = false; // Not vegetarian by default
      this.toppings = new Array(PIZZA_TOPPINGS_LIST.length); // Create toppings array
      for (let i = 0; i < this.toppings.length; i++) this.toppings[i] = false;  // Set all toppings to false as default
    }

    setSize(size:pizzaSizeType) {
        this.size = size;
        console.log(`Size set to ${size}`);
//        this.display();
    }

    addTopping(topping:toppingType) {
//        if (!(topping in PIZZA_TOPPINGS_LIST)) throw new Error("Invalid pizza topping");
        this.toppings[PIZZA_TOPPINGS_LIST.indexOf(topping)] = true;
    }
    
    removeTopping(topping:toppingType) {
        this.toppings[PIZZA_TOPPINGS_LIST.indexOf(topping)] = false;
    }

    toggleTopping(topping:toppingType) {
      let toppingIndex = PIZZA_TOPPINGS_LIST.indexOf(topping);
      let isMeat = toppingIndex in MEAT_TOPPINGS_LIST; // (must specify the index number, not the value at that index)
      this.toppings[toppingIndex] = !this.toppings[toppingIndex];
      console.log(`${topping} toggled to ${this.toppings[toppingIndex]}`);
      console.log(`Is meat: ${isMeat}`);
      if (this.vegetarian && isMeat && this.toppings[toppingIndex]) {
        this.vegetarian = false;
        (<HTMLInputElement>document.getElementById('optionVegetarian')).checked = false;
      }
      this.display();
    }

    toggleVeg() {
        this.vegetarian = !this.vegetarian;
        if (this.vegetarian)       // Toggle off all meat toppings and their checkboxes
            MEAT_TOPPINGS_LIST.forEach((meatTopping) => {
                let toppingIndex = PIZZA_TOPPINGS_LIST.indexOf(meatTopping);
                this.toppings[toppingIndex] = false;    // Set all meat toppings to false
 //               (<HTMLInputElement>document.getElementById(`topping${meatTopping.charAt(0).toUpperCase()+meatTopping.slice(1)}`)).checked = false;
            });
        console.log(`Vegetarian bool toggled to ${this.vegetarian}`);
//        this.display();
    }

    display() {
        let pizzaString = `\n${this.size.charAt(0).toUpperCase() + this.size.toLowerCase().slice(1)} Pizza${this.vegetarian?' (Vegetarian)':''} -- `;
        pizzaString += `Toppings: `;
        let isPlain:boolean = true;
        this.toppings.forEach(hasTopping => {if(hasTopping) isPlain=false;});
        if (isPlain) pizzaString += `Plain`;
        else {
            this.toppings.forEach((toppingFlag, toppingsListIndex) => {
                if (toppingFlag)
                    pizzaString += `${PIZZA_TOPPINGS_LIST[toppingsListIndex]}, `;
            });
            pizzaString = pizzaString.slice(0,-2);     // Remove final comma
        }
        console.log(pizzaString);
    }
}

type address = {
    streetAddress:string;
    city:string;
    zipCode:number;
}

interface iOrder {
    orderItems:Array<Pizza>;
    deliveryAddress:address;
    submitted:boolean;
    timeSubmitted:Date;     // Date and time must be included
}

class Order implements iOrder {
    orderItems:Array<Pizza>;
    deliveryAddress:address;
    submitted:boolean;
    timeSubmitted:Date;

    constructor() {
        this.orderItems = [];
        this.deliveryAddress = null;
        this.submitted = false;
        this.timeSubmitted = null;
    }

    addPizza(newPizza:Pizza) {
        this.orderItems.push(newPizza);
        currentPizza = new Pizza();
        console.log(`\nPizza added`);
 //       this.display();
    }

    removePizza(pizza:Pizza) {
        if (this.submitted) console.log('\nSorry, an order can not be changed once submitted!\n');
        else {
            this.orderItems.splice(this.orderItems.indexOf(pizza), 1);
            console.log("\nPizza removed\n");
        }
    }

    submit() {
        this.timeSubmitted = new Date(Date.now());
        this.submitted = true;
    }

    display() {
        console.log("Order:");
        for (let i = 0; i < this.orderItems.length; i++) {
            let pizzaString = `\t${this.orderItems[i].size.charAt(0).toUpperCase() + this.orderItems[i].size.toLowerCase().slice(1)} Pizza ${i+1}${this.orderItems[i].vegetarian?' (Vegetarian)':''} -- `;
            pizzaString += `Toppings: `;
            let isPlain:boolean = true;
            this.orderItems[i].toppings.forEach(hasTopping => {if(hasTopping) isPlain=false;});
            if (isPlain) pizzaString += `Plain`;
            else {
                this.orderItems[i].toppings.forEach((toppingFlag, toppingsListIndex) => {
                    if (toppingFlag) pizzaString += `${PIZZA_TOPPINGS_LIST[toppingsListIndex]}, `;
                });
                pizzaString = pizzaString.slice(0,-2);     // Remove final comma
            }
            console.log(pizzaString);
        }
        if (this.deliveryAddress) console.log(`\nDelivery Address:`+
                    `\n\t${this.deliveryAddress.streetAddress}`+
                    `\n\t${this.deliveryAddress.city}\t${this.deliveryAddress.zipCode}`);
        console.log(`\nOrder ${this.submitted ?
                        'Submitted at '+this.timeSubmitted.toTimeString()+' '+this.timeSubmitted.toDateString()
                        : `not submitted.`}`);
    }
}

// HTML page action functions
let currentPizza = new Pizza();
let currentOrder = new Order();

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
        let elapsedTime = new Date().getTime() - timeStart;
        if (elapsedTime > milliseconds) {
            break;
        }
    }
}

// Let's run some tests
let newPizza = new Pizza();
for (let i = 0; i < 50; i++) console.log();
console.log('\n\nCreated new plain pizza with no arguments (medium size default)..');
sleep(1000);
newPizza.display();
sleep(2000);
console.log('\n\nAdded pepperoni, ham, sausage, pineapple, and onions to pizza..');
newPizza.addTopping('pepperoni');
newPizza.addTopping('ham');
newPizza.addTopping('sausage');
newPizza.addTopping(`pineapple`);
newPizza.addTopping(`onions`);
sleep(1000);
newPizza.display();
sleep(5500);
console.log(`\n\nLet's make it a large instead..`);
newPizza.setSize("large");
sleep(1000);
newPizza.display();
sleep(5500);
console.log(`\n\nLet's remove the sausage..`);
newPizza.removeTopping('sausage');
sleep(1000);
newPizza.display();
sleep(5500);
console.log(`\n\nLet's make it vegetarian now (remove meat toppings)..`);
newPizza.toggleVeg();
sleep(1000);
newPizza.display();
sleep(7000);

console.log(`\n\nOk, now let's create an order...\n`);
let newOrder = new Order();
newOrder.addPizza(new Pizza('medium')); // Add a plain medium pizza
let anotherPizza = new Pizza('small');  // Add a small pizza with anchovies
anotherPizza.addTopping('anchovies');
newOrder.addPizza(anotherPizza)
newOrder.addPizza(newPizza);            // Add our larege pizza with toppings
newOrder.deliveryAddress = {streetAddress:"123 Main St", city:"Doylestown", zipCode:18901};
//newOrder.submit();
sleep(2000);
newOrder.display();
sleep(10000);

console.log(`\n\nNow let's remove the vegetarian pizza...`);
newOrder.removePizza(newPizza);
sleep(2000);
newOrder.display();
sleep(10000);

console.log(`\n\nOk now let's submit the order.`);
newOrder.submit();
sleep(2000);
newOrder.display();
sleep(10000);

console.log(`\n\nAnd now let's try to remove another pizza`);
sleep(2000)
newOrder.removePizza(anotherPizza);
sleep(4001);
newOrder.display();
console.log('\n\nEND');