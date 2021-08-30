/** Create the pizza */
var vegetarianToppings = {
    onions: true,
    spinach: true,
    tomato: true
};
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.toppings = [];
        this.isVegetarian = false;
        this.size = "";
    }
    Pizza.prototype.setSize = function (size) {
        this.size = size;
    };
    Pizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    Pizza.prototype.setIsVegetarian = function (isVegetarian) {
        this.isVegetarian = isVegetarian;
        if (isVegetarian) {
            this.toppings = this.toppings.filter(function (topping) {
                return vegetarianToppings[topping] || false;
            });
        }
    };
    return Pizza;
}());
var myPizza = new Pizza();
console.log('---------------');
myPizza.addTopping("anchovies"); // meat topping
myPizza.addTopping("onions"); // veggie topping
// console.log(myPizza);
// test making pizza vegetarian. should remove the meat topping, not veggie
myPizza.setIsVegetarian(true);
function createOrder(address, customerName) {
    return {
        address: address || null,
        customerName: customerName || null,
        pizzas: [],
        isSubmitted: false
    };
}
var myOrder = createOrder();
console.log(myOrder);
var addPizzaToOrder = function (order, pizza) {
    order.pizzas.push(myPizza);
};
function createSafelyModifyOrderFunction(order, callback) {
    var higherOrderFunction = function (args) {
        if (order.isSubmitted) {
            console.log('Order submitted, unable to modify!!!');
            return;
        }
        else {
            callback(order, args);
        }
    };
    return higherOrderFunction;
}
// submitOrder(myOrder);
var addPizzaToOrderSafely = createSafelyModifyOrderFunction(myOrder, addPizzaToOrder);
addPizzaToOrderSafely(myPizza);
console.log('order ', myOrder);
function setOrderAddress(order, address) {
    order.address = address;
}
function submitOrder(order) {
    order.isSubmitted = true;
}
