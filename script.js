let userName = prompt("Please enter your name.", "");

let speciesNumber = prompt("How many species are you shopping for?", "")

if (speciesNumber == 1) {
    window.alert("No problem!");
}   else if (speciesNumber > 1) {
    window.alert("We have options for inhabitants of most systems!");
}   else if ("") {
    window.alert("That's not helpful!");
}

let userType;

if (confirm("Are you a purchasing agent?")) {
    userType = "purchasingAgent";
}   else {
    userType = "notAgent";
};

