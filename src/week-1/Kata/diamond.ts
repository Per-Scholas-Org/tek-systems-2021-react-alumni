function diamond(letter:string):string {
    if (letter.length != 1) return "Invalid input";
    letter = letter.toUpperCase();
    let returnString:string = "";
    let numLetters:number = letter.charCodeAt(0) -64;      // 'A' = ASCII 65
    for (let i = 0; i < numLetters; i++) {              // Print a line up to parameter letter
        for(let j = i+1; j < numLetters; j++) returnString += ' ';    // Print leading spaces
        returnString += String.fromCharCode(65+i);
        for (let k = 0; k < (2*i-1); k++) returnString += ' ';
        if (i!=0) returnString += String.fromCharCode(65+i);
        returnString += '\n';
    }
    for (let i = numLetters-2; i >= 0; i--) {            // Now reverse it
      for (let j = i + 1; j < numLetters; j++) returnString += " "; // Print leading spaces
      returnString += String.fromCharCode(65 + i);
      for (let k = 0; k < 2 * i - 1; k++) returnString += " ";
      if (i != 0) returnString += String.fromCharCode(65 + i);
      returnString += "\n";
    }
//    console.log(numLetters);
    return returnString;
}
console.log(diamond('A'));
console.log(diamond('B'));
console.log(diamond('C'));
console.log(diamond('D'));
console.log(diamond('Z'));