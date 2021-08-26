var order = {
  customer: {
    firstName: "",
    lastName: "",
    address: "",
  },
  pizzas: [],
};

function renderView(order) {
  document.getElementById("confirmation").innerHTML =
    "Customer" +
    order.customer.firstName +
    " " +
    order.customer.lastName +
    " " +
    order.customer.address;

  const ordersTable = document.getElementById("ordersTable");
  const tableBody = ordersTable.getElementsByTagName("tbody")[0];

  tableBody.innerHTML = "";

  var pizzaNum = order.pizzas.length;

  for (var i = 0; i < pizzaNum; i++) {
    var row = tableBody.insertRow(i);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = order.pizzas[i].pizzaTime;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = order.pizzas[i].pizzaType;

    var cell3 = row.insertCell(2);
    cell3.innerHTML = order.pizzas[i].pizzaSize;

    //Button to remove the pizza
    var cell4 = row.insertCell(3);
    cell4.innerHTML =
      '<button onclick="removePizza(this)" id="pizza_' + i + '">Remove</test>';
  }

  document.getElementById("json").innerHTML =
    "<pre>" + JSON.stringify(order, null, " ") + "</pre>";
}

renderView(order);

function createOrder() {
  var firstName = document.getElementById("firstNameInput").value;

  var lastName = document.getElementById("lastNameInput").value;

  var address = document.getElementById("addressInput").value;

  var pizzaType = document.querySelector(
    'input[name="pizzaType"]:checked'
  ).value;

  var pizzaSize = document.querySelector(
    'input[name="pizzaSize"]:checked'
  ).value;

  order.customer.firstName = firstName;
  order.customer.lastName = lastName;
  order.customer.address = address;

  var pizzaNum = order.pizzas.length;

  var newPizza = new Object();

  newPizza = {
    pizzaTime: new Date().toLocaleString(),
    pizzaId: pizzaNum + 1,
    pizzaType: pizzaType,
    pizzaSize: pizzaSize,
  };
  order.pizzas.push(newPizza);

  renderView(order);
}

function removePizza(pizzaIndex) {
  var str = pizzaIndex.id;
  var id = str.replace("pizza_", " ");

  order.pizzas.splice(id, 1);
  renderView(order);
}

//form validation function
function validateForm() {
  var form = document.getElementById("customerInformationForm");
  var isValidForm = form.checkValidity();
  if (isValidForm) {
    createOrder();
  } else {
    alert("Please fill all empty fields before submitting your order");
  }
}

document
  .querySelector("#submitButton")
  .addEventListener("click", validateForm);
