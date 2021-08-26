// address[street name, city, zip], pizzaCount, pizza[topping, size]
// order[submit - boolean]. if submit==true, add date and time
// pizza topping, optional.
// size, not optional
// mark vegeterian or
// interface - Pizza, Order
// order class method - add topping, rmeove topping, set size, submit, vegetarian - remove meat topping.(“pepperoni”, “sausage”, “ham”, “anchovies”)
// undo topping to remove the most recently added topping
// order() will return all the info(pizza list, client address)
//
type Address = {
  name?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};
type Size = string;
type VegeTopping = string[];
type MeatTopping = string[];
type Topping = {
  vegeTopping: VegeTopping;
  meatTopping: MeatTopping;
};

// Pizza interface
interface Pizza {
  size: Size;
  topping: Topping;
  isVegeterian: boolean;
}
// Order interface
interface Order {
  pizzaList: Pizza[];
  addPizza: (pizza: Pizza) => void;
  removePizza: (index: number) => void;
  setSize: (index: number, size: Size) => void;
  addTopping: (index: number, size: string) => void;
  removeTopping: (index: number, size: string) => void;
  undoTopping: (index: number) => void;
  checkStatus: () => void;
  getNumberOfPizza: () => void;
}
// meat topping selection
const meatToppingList: MeatTopping = [
  "pepperoni",
  "sausage",
  "ham",
  "anchovies",
];
// vege topping selection
const vegeToppingList: VegeTopping = [
  "onions",
  "mushrooms",
  "peppers",
  "pineapple",
  "spinach",
  "garlic",
  "olives",
];
// size option
const sizeList = ["small", "medium", "large"];

class OrderHandler implements Order {
  pizzaList: Pizza[];
  address: Address;
  lastAddedTopping: string = undefined;
  lastModifiedPizza: number = undefined;
  pizzaCount: number = 0;

//   constructor
  constructor(pizzas: Pizza[], address: Address) {
    pizzas.forEach((pizza) => {
      if (pizza.isVegeterian) pizza.topping.meatTopping = [];
    });
    this.pizzaList = pizzas;
    this.address = address;
    this.pizzaCount = pizzas.length;
  }

//   vegeterian validation removed meat kinds topping immideatly
  vegeterianValidation(vegeterianPizza: Pizza): Pizza {
    if (vegeterianPizza.isVegeterian) vegeterianPizza.topping.meatTopping = [];
    return vegeterianPizza;
  }

//   add pizza object
  addPizza(pizza: Pizza) {
    let filteredPizza = this.vegeterianValidation(pizza);
    this.pizzaList.push(filteredPizza);
    this.pizzaCount++;
    console.log("You added a pizza!!\n");
    this.checkStatus();
  }

//   remove pizza object
  removePizza(index: number) {
    if (index >= 0 && index <= this.pizzaList.length - 1) {
      this.pizzaList.splice(index, 1);
      this.pizzaCount--;
      console.log("You removed a pizza!\n");
      this.checkStatus();
    } else {
      console.log("invalid pizza list index");
    }
  }

//   changing pizza size
  setSize(index: number, size: Size): void {
    // add error handling later
    if (sizeList.indexOf(size) >= 0) {
      this.pizzaList[index].size = size;
      console.log("Pizza size updated to " + size);
      this.checkStatus();
    } else {
      console.log("Select a proper size");
    }
  }

//   topping validation returns all the inputs for remove/add toppings
  toppingValidation(index: number, topping: string): any {
    let isToppingMeat: boolean = false;
    let isToppingVege: boolean = false;
    let isToppingInOption: boolean = false;
    let isToppingInMyPizza: boolean = false;
    let toppingIndex: number = -1;
    let isVegeterian: boolean = false;

    isToppingMeat = meatToppingList.indexOf(topping) >= 0 ? true : false;
    isToppingVege = vegeToppingList.indexOf(topping) >= 0 ? true : false;
    isToppingInOption = isToppingMeat || isToppingVege ? true : false;
    isToppingInMyPizza =
      this.pizzaList[index].topping.meatTopping.indexOf(topping) >= 0 ||
      this.pizzaList[index].topping.vegeTopping.indexOf(topping) >= 0
        ? true
        : false;
    isVegeterian = this.pizzaList[index].isVegeterian;

    return {
      isToppingMeat,
      isToppingVege,
      isToppingInOption,
      isToppingInMyPizza,
      toppingIndex,
      isVegeterian,
    };
  }

//   add topping method
  addTopping(index: number, topping: string): void {
    let {
      isToppingMeat,
      isToppingVege,
      isToppingInOption,
      isToppingInMyPizza,
      toppingIndex,
      isVegeterian,
    } = this.toppingValidation(index, topping);

    // get the topping index
    if (isToppingInMyPizza && isToppingMeat) {
      toppingIndex = this.pizzaList[index].topping.meatTopping.indexOf(topping);
    } else if (isToppingInMyPizza && isToppingVege) {
      toppingIndex = this.pizzaList[index].topping.vegeTopping.indexOf(topping);
    }

    // update the last added topping information for undo method
    if (toppingIndex < 0 && isToppingInOption) {
      this.lastAddedTopping = topping;
      this.lastModifiedPizza = index;

      // add meat topping
      if (isToppingMeat) {
        if (isVegeterian)
          console.log(
            "You are a vegeterian. You can't add this meat kinds topping in this pizza!\n"
          );
        else {
          this.pizzaList[index].topping.meatTopping.push(topping);
          console.log(
            "You added " + topping + " on pizza index No." + index + " !!\n"
          );
        }
      }
      // add vege topping
      else {
        this.pizzaList[index].topping.vegeTopping.push(topping);
        console.log(
          "You added " + topping + " on pizza index No." + index + " !!\n"
        );
      }

    //   log check current status
      this.checkStatus();
    } else if (toppingIndex < 0 && !isToppingInOption) {
      console.log("Your topping selection is not an option.\n");
    } else {
      console.log("You alreay added " + topping + " in your pizza\n");
    }
  }

//   remove topping method
  removeTopping(index: number, topping: string): void {
    let {
      isToppingMeat,
      isToppingVege,
      isToppingInOption,
      isToppingInMyPizza,
      toppingIndex,
      isVegeterian,
    } = this.toppingValidation(index, topping);
    // get topping index
    if (isToppingInMyPizza && isToppingMeat) {
      toppingIndex = this.pizzaList[index].topping.meatTopping.indexOf(topping);
    } else if (isToppingInMyPizza && isToppingVege) {
      toppingIndex = this.pizzaList[index].topping.vegeTopping.indexOf(topping);
    }
//  remove topping
    if (toppingIndex >= 0) {
      if (isToppingMeat)
        this.pizzaList[index].topping.meatTopping.splice(toppingIndex, 1);
      if (isToppingVege)
        this.pizzaList[index].topping.vegeTopping.splice(toppingIndex, 1);
      console.log(
        "You removed " + topping + "on pizza index No." + index + " !!"
      );
      this.checkStatus();
    } else {
      console.log("there is no " + topping + " in your pizza");
    }
  }

//   remove the most recently added topping
  undoTopping(): void {
    // console.log(this.lastModifiedPizza, this.lastAddedTopping);
    this.removeTopping(this.lastModifiedPizza, this.lastAddedTopping);
  }

//   print check status including client info and all the pizza list
  checkStatus(): void {
    let idx = 0;
    this.pizzaList.forEach((p) => {
      let toppingAll = p.topping.meatTopping.concat(p.topping.vegeTopping);
      console.log("***Your Pizza No." + idx + "***");
      console.log(
        "Size:" +
          p.size +
          " || Topping:" +
          toppingAll +
          " || Vegeterian:" +
          p.isVegeterian
      );
      idx++;
    });
    console.log("\n***Your Address***");
    console.log("---" + JSON.stringify(this.address) + "---");

    console.log("\n\n\n\n");
  }
// this is order confirming. return pizza list + client object
    order(){
    const orderDetails = Object.assign({}, this.pizzaList,this.address);
    console.log("Order confirmed!");
    
    return orderDetails;
}
//   log count of pizza added
  getNumberOfPizza(): void {
    console.log("Total pizza count is " + this.pizzaCount);
  }


}


// my Pizza sample
const myPizzas: Array<Pizza> = [
  {
    size: "small",
    topping: {
      vegeTopping: [
        "onions",
        "mushrooms",
        "peppers",
        "pineapple",
        "spinach",
        "garlic",
        "olives",
      ],
      meatTopping: ["pepperoni", "sausage", "ham", "anchovies"],
    },
    isVegeterian: false,
  },
  {
    size: "medium",
    topping: { vegeTopping: [], meatTopping: [] },
    isVegeterian: false,
  },
  {
    size: "large",
    topping: { vegeTopping: [], meatTopping: [] },
    isVegeterian: true,
  },
];
// my address sample
const myAddress: Address = {
  name: "Jason",
  street: "50 Station Lndg",
  city: "Medford",
  state: "MA",
  zipCode: "02155",
};


// create a class instance
const myOrder = new OrderHandler(myPizzas, myAddress);
myOrder.addPizza({
  size: "small",
  topping: { vegeTopping: [], meatTopping: [] },
  isVegeterian: false,
});
// checking Count of pizza
myOrder.getNumberOfPizza();

// remove pizza
myOrder.removePizza(1);
myOrder.removePizza(2);
myOrder.getNumberOfPizza();

// invalid pizza list index - do nothing and hit the log
myOrder.removePizza(5);
myOrder.getNumberOfPizza();

myOrder.checkStatus();
// size change test
myOrder.setSize(0, "large");
// invalid size input
myOrder.setSize(0, "madLarge");

// non vegeterian pizza topping test
// invalid topping option
myOrder.addTopping(1, "bacon");
// added meat topping in No.0 pizza
myOrder.addTopping(1, "pepperoni");
// added vege toppingin No.0 pizza
myOrder.addTopping(1, "mushrooms");

myOrder.getNumberOfPizza();

// vegeterian pizza topping test - will removed any meat topping option although its in the option list as long as it marked as vegeterian no matter wt.
// added meat topping in No.1 pizza
myOrder.addTopping(1, "olives");
// added vege toppingin No.1 pizza
myOrder.checkStatus();
// undo option. - will remove olives on No.1
myOrder.undoTopping();
myOrder.checkStatus();

// reject meat topping on vegeterian pizza
myOrder.addTopping(1, "ham");

// This returns final order details in one object
const myFinalOrderDetails = myOrder.order();
// console.log(JSON.stringify(myFinalOrderDetails));
