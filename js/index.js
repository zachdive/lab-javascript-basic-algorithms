// Iteration 1: Names and Input
const hacker1 = "Zach"
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Kélian"
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if(hacker1.length >hacker2.length) {
    console.log(`The driver has the longest name, he has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, he has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

let uppercaseNameWithSpaces = ''
    
for (let i=0; i<hacker1.length; i++) {
    uppercaseNameWithSpaces = uppercaseNameWithSpaces + hacker1[i].toUpperCase() + ' ' ;
}

console.log(uppercaseNameWithSpaces)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let navNameBackwards = '' ;

for (let i = hacker2.length -1; i>=0; i--){
    navNameBackwards = navNameBackwards + hacker2[i];
}
console.log(navNameBackwards);

// 3.3 Depending on the lexicographic order of the strings, print:

if (hacker1<hacker2) {
    console.log("The driver's name goes first.");
}
else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

 const genericText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
 
 wordCounter = 1;
 etCounter = 0;

 for (let i=0; i <genericText.length; i++) {
     if (genericText[i] === ' ') {
         wordCounter++;
     }
     else if (genericText[i-1] === " " && genericText[i] === "e" && genericText[i+1] === "t") {
         etCounter++
     }
    }

    console.log(wordCounter)
    console.log(etCounter)


 



