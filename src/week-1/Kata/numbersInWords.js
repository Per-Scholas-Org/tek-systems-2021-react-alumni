function numberToWords(amount) {
    var digitWords = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var teensWords = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tensWords = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var suffixes = ["", "thousand ", "million ", "billion ", "trillion ", "quadrillion "];
    var numberWord = "";
    var amountAsString = String(amount); //String.format("%.2f", amount); // Turn the double into a String with two decimal places 
    //		System.out.println(amountAsString);
    var dollarAmountAsString = "";
    var centsAmountAsString = "00";
    var decimalIndex = amountAsString.indexOf('.');
    if (decimalIndex == -1)
        decimalIndex = amountAsString.length; // No decimal found in number, so set it to the end
    dollarAmountAsString = amountAsString.substring(0, decimalIndex); // Part before decimal
    centsAmountAsString = amountAsString.substring(decimalIndex + 1, decimalIndex + 3); // Ending index is non-inclusive, so we grab the two cents digits
    // Process the dollar portion, then later the cents portion
    var numSections = dollarAmountAsString.length / 3 + 1; // Get count of thousands divisions ($x,xxx,xxx,xxx etc) (integer division truncates fractional part)
    var numLeftoverDigits = dollarAmountAsString.length % 3; // Get the # of front-end digits if not a triplet
    if (numLeftoverDigits === 0) {
        numSections--;
        numLeftoverDigits = 3;
    }
    var leftoverNumsStr = dollarAmountAsString.substring(0, numLeftoverDigits); // Get those front-end digits as a String (empty if none)
    var digitSection = parseInt(leftoverNumsStr); // Turn that string back into a number
    // Start with the front-end digits, because they may not be a triplet. We don't break the case statements as we want them to fall through to next
    switch (numLeftoverDigits) {
        case 3:
            var firstDigit = digitSection / 100;
            numberWord = numberWord.concat(digitWords[firstDigit] + " ");
            if (firstDigit != 0)
                numberWord = numberWord.concat("hundred ");
        case 2:
            digitSection %= 100; // Drop the 100s part
            if (digitSection > 9 && digitSection < 20) {
                numberWord = numberWord.concat(teensWords[digitSection - 10] + " "); // Will get words  from "ten" to "nineteen"
                break; // Don't need to parse hyphenated number (twenty-one thru ninety-nine) or single digit, so break out of switch
            }
            else { // If value remaining is 20 or greater, it needs to be hyphenated between the tens and ones words unless divisible by 10
                if (digitSection > 19)
                    numberWord = numberWord.concat(tensWords[(digitSection / 10)]); // Again, integer division, so result will be tens place digit
                if (digitSection % 10 == 0)
                    numberWord = numberWord.concat(digitSection / 10 == 0 ? "" : " ");
                else
                    numberWord = numberWord.concat(digitSection < 10 ? "" : "-");
            } // Hopefully the else statement will drop through to "case 1:"
        case 1:
            digitSection %= 10; // Drop the 10s part
            if (digitSection != 0)
                numberWord = numberWord.concat(digitWords[digitSection] + " "); // concat "one" through "nine" ("zero" is blank as it should be)
            break;
        case 0: break;
        default: break;
    }
    numberWord = numberWord.concat(suffixes[numSections - 1]); //.concat(" ");
    // Now for the rest of the word, for which we can loop through each 3-digit section, almost the same as above
    if (numLeftoverDigits == 3)
        numLeftoverDigits = 0;
    for (var i = 0; i < numSections - 1; i++) {
        var currentSectionStr = (i == numSections - 1) ? // Grab next section from amount string
            dollarAmountAsString.substring(numLeftoverDigits + i * 3)
            : dollarAmountAsString.substring(numLeftoverDigits + i * 3, numLeftoverDigits + i * 3 + 3);
        digitSection = parseInt(currentSectionStr); // Turn that string back into a number
        // Start with the front-end digits, because they may not be a triplet. We don't break the case statements as we want them to fall through to next
        var numDigits = String(digitSection).length;
        switch (numDigits) {
            case 3:
                var firstDigit = digitSection / 100;
                numberWord = numberWord.concat(digitWords[firstDigit] + " ");
                if (firstDigit != 0)
                    numberWord = numberWord.concat("hundred ");
            case 2:
                digitSection %= 100; // Drop the 100s part
                /*if (digitSection < 10) numberWord = numberWord.concat(" ");
                else*/ if (digitSection > 9 && digitSection < 20) {
                    numberWord = numberWord.concat(teensWords[digitSection - 10] + " "); // Will get words  from "ten" to "nineteen"
                    break; // Don't need to parse hyphenated number (twenty-one thru ninety-nine) or single digit, so break out
                }
                else { // If value remaining is 20 or greater, it needs to be hyphenated between the tens and ones words
                    if (digitSection > 19)
                        numberWord = numberWord.concat(tensWords[(digitSection / 10)]); // Again, integer division, so result will be tens place digit
                    if (digitSection % 10 == 0)
                        numberWord = numberWord.concat(digitSection / 10 == 0 ? "" : " ");
                    else
                        numberWord = numberWord.concat(digitSection < 10 ? "" : "-");
                } // Hopefully the else statement will drop through to "case 1:"
            case 1:
                digitSection %= 10; // Drop the 10s part
                if (digitSection != 0)
                    numberWord = numberWord.concat(digitWords[digitSection] + " "); // concat "one" through "nine" ("zero" is blank as it should be)
                break;
            case 0: break;
            default: break;
        }
        numberWord = numberWord.concat(suffixes[numSections - i - 2]); // +" ");
    }
    numberWord = numberWord.concat("and " + centsAmountAsString + "/100");
    return numberWord.toString();
}
for (var i = 1; i < 500; i++) {
    console.log(i + ": " + numberToWords(i));
}
