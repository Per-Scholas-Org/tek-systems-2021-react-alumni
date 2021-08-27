function diamond(letter) {
    if (letter.length != 1)
        return "Invalid input";
    letter = letter.toUpperCase();
    var returnString = "";
    var numLetters = letter.charCodeAt(0) - 64; // 'A' = ASCII 65
    for (var i = 0; i < numLetters; i++) { // Print a line up to parameter letter
        for (var j = i + 1; j < numLetters; j++)
            returnString += ' '; // Print leading spaces
        returnString += String.fromCharCode(65 + i);
        for (var k = 0; k < (2 * i - 1); k++)
            returnString += ' ';
        if (i != 0)
            returnString += String.fromCharCode(65 + i);
        returnString += '\n';
    }
    for (var i = numLetters - 2; i >= 0; i--) { // Now reverse it
        for (var j = i + 1; j < numLetters; j++)
            returnString += " "; // Print leading spaces
        returnString += String.fromCharCode(65 + i);
        for (var k = 0; k < 2 * i - 1; k++)
            returnString += " ";
        if (i != 0)
            returnString += String.fromCharCode(65 + i);
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
