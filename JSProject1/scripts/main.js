var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello worldjjjj!';
document.getElementById("demo").innerHTML = "Hello JavaScript";

var x = myFunction(4, 3);    // Function is called, return value will end up in x
console.log(x);

function myFunction(a, b) {
    return a * b;            // Function returns the product of a and b
}