// create String Enum characteristics of our Pizza for strict types
var Size;
(function (Size) {
    Size["Small"] = "SMALL";
    Size["Medium"] = "MEDIUM";
    Size["Large"] = "LARGE";
})(Size || (Size = {}));
var Topping;
(function (Topping) {
    Topping["Pepperoni"] = "PEPPERONI";
    Topping["Pineapple"] = "PINEAPPLE";
    Topping["Mushrooms"] = "MUSHROOMS";
    Topping["Sausage"] = "SAUSAGE";
    Topping["Onion"] = "ONION";
    Topping["Cheese"] = "CHEESE";
})(Topping || (Topping = {}));
var Sauce;
(function (Sauce) {
    Sauce["Tomato"] = "TOMATO";
    Sauce["Barbeque"] = "BARBEQUE";
    Sauce["None"] = "NONE";
})(Sauce || (Sauce = {}));
var Crust;
(function (Crust) {
    Crust["Regular"] = "REGULAR";
    Crust["Thin"] = "THIN";
    Crust["Thick"] = "THICK";
    Crust["Stuffed"] = "STUFFED";
})(Crust || (Crust = {}));
// create a variable named userPizza of type pizza to create our personal pizza
var userPizza;
// Create a function to create the Pizza
var orderUp = function (userPizza) {
    var date = new Date();
    if (userPizza.isOrdered) {
        console.log("Order up! You're " + userPizza.size + " " + userPizza.topping + " pizza with a " + userPizza.crust + " crust and " + userPizza.sauce + " sauce base was ordered on " + date + " is on its way to " + userPizza.address.street + " " + userPizza.address.city + " " + userPizza.address.zip + ".");
    }
    else {
        console.log('Ready to order?');
    }
};
userPizza = {
    size: Size.Large,
    topping: Topping.Pineapple,
    sauce: Sauce.Barbeque,
    crust: Crust.Thick,
    quantity: 5,
    isOrdered: true,
    address: { street: '123 Main St', city: 'Bronx, New York', zip: 10453 }
};
orderUp(userPizza);
