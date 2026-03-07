let input=require('prompt-sync')()

let num=parseInt(input("Enter Number:"))
//verify given number is 3 digit or not
if (num>=100 && num<=999) {
        console.log("give number is 3 Digit Number")
} else {
        console.log("Not a 3 Digit Number")
}