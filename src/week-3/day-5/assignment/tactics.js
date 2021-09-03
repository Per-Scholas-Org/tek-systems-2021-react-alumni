function possibleBonus(a, b) {
  let c = b - a;
  if (c > 0 && c <= 6) {
    return true;
  } else return false;
}

function makePlusFunction(baseNum) {
  const myFunc = (a) => {
    return baseNum + a;
  };
  return myFunc;
}
