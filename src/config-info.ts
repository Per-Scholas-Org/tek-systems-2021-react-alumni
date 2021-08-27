
const PORT = 9999;

// same as getPort - but this is a function expression
const getPortAlternate = function() {
  return PORT;
}

// arrow function
const getPort = () => {
  return PORT;
}

export { 
  getPort,
}