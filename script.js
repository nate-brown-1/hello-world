// declare global variables
let userName;
let speciesNumber;
let userType;
let pageScore;

// declare function to get user name
// validate for blank entry as "Anonymous", accept any other input
function getUserName() {
    userName = prompt("Please enter your name.");
        if (userName === "") {
            window.alert("Enjoy browsing anonymously!");
            userName = "Anonymous";
            console.log(userName);
        }   else {
            console.log(userName);
        }
        document.write("Welcome to our site, ", userName);
        return userName;
}

// declare function to get species number
// validate for speciesNumber >= 1, else call function again
// function getSpeciesNumber() {
//     speciesNumber = prompt("How many species are you shopping for?");
//         if (speciesNumber == 1) {
//             window.alert("No problem!");
//         } else if (speciesNumber > 1) {
//             window.alert("We have options for inhabitants of most systems!");
//         } else {
//             window.alert("That's not helpful!");
//             getSpeciesNumber();
//         }
//         console.log(speciesNumber);
//         return speciesNumber;
// }

// reimagine this function using a while loop instead of the recursive function from lab 7
// it works but only says "that's not helpful" if input is number outside 1-100
// accepts input of a string (not desired behavior)
// the output of typeof() doesn't work as a condition for the while loop
function getSpeciesNumber() {
     speciesNumber = prompt("How many species are you shopping for? (1-100)");
         while (speciesNumber < 1 || speciesNumber > 100) {
             window.alert("That's not helpful!");
             console.log(speciesNumber);
             speciesNumber = prompt("How many species are you shopping for?");
         }
         window.alert("Thank you for answering!");
         console.log(speciesNumber);
         console.log(typeof(speciesNumber));
         return speciesNumber;
}

// declare function to get user type to show relevant specials
function getUserType() {
    if (confirm("Are you a purchasing agent?")) {
        userType = "purchasingAgent";
        document.write("Pallet quantities of granola bars are 50% off!");
    } else {
        userType = "notAgent"
        document.write("Orders can be air dropped to remote colonies!")
    }
    console.log(userType);
    return userType;
}

// all function calls are in index.html

function rateThisPage() {
    pageScore = prompt("Please rate this page (1-5 octopi)");
    console.log(pageScore);

    for (let i = 0; i < rating && i < 5; i++) {
        console.log(i);
        document.write('<img src="octopus.png" />');
    }
}