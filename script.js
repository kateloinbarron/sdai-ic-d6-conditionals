// all code for this lab to be completed in this file
const currentTemperature = 40
console.log("40")

//two possibilities it's either freezing or not
if(currentTemperature<=32) {
    console.log('It is not freezing.') 
    } else {
      console.log("It is freezing BRRR!!!!")
    }

   //CHALLENGE #2
let age1 = 47
let age2 = "47"

//3 possibilities: older, younger, or the same age
// if... else if statement

if (age1 > age2) { //older
    console.log("Respect!")
} else if (age1 < age2) { //younger
    console.log("Whippersnapper")
} else if (age1 === age2) { //same age
    console.log("Cool!")
} else { //capture errors - pro level
    console.log("Error! Try again")
}