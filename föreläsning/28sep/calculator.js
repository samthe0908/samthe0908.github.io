const x = parseInt(prompt("skriv ett tal"));
console.log("du skrev" + x);

const y = parseInt(prompt("skriv ett annat tal "));
console.log("du skrev" + y);

const operation = prompt("vad vill du göra +, -, *, /");
console.log("du skrev" + operation);

const addi = x + y;
const subt = x - y;
const multi = x * y;
const divi = x / y;

if (operation === "+") {
    console.log(addi);
}
else if (operation === "-") {
    console.log(subt);

} else if (operation === "*") {
    console.log(multi);

}else if(operation === "/") {
    console.log(divi);
}
    
else {
    console.error("Try again")
}
