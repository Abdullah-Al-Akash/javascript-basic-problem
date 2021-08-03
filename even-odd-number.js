//Check Odd Number Function

function isOddNumber(n) {
        if (n % 2 == 1) {
                return ("is ODD Number");
        }
        else {
                return ("is not and ODD Number");
        }
}

//Example for testing purposes
var number = 56;
console.log(number, isOddNumber(number))