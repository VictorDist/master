//import {JS2File} from './JavaScript2';
//JS2File();
//let val = JS2File();
//console.log(val);


var t = myFunction1(4,3);
//anonymous function example
const g = () => {
    console.log("g");
    
    //anonymous funcation that takes a paramater (name)
    const gn = (name) => {
        console.log(name);
    }

    gn("car");
}

//json example
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

//var text = { "employees" : [ + { "firstName":"John" , "lastName":"Doe" }, + { "firstName":"Anna" , "lastName":"Smith" }, + { "firstName":"Peter" , "lastName":"Jones" } ]};
var employeeOjb = JSON.parse(text);
var t = employeeOjb.employees[0].firstName;
console.log(t);
//console.log()

//object example
var car = {type:"fiat", model:"800", color:"blue", MakeAndModel: function() {return this.model + " " + this.type;}};
console.log(car.color);
console.log(car.MakeAndModel());

//array example
var people = ["dave", "mike"];
console.log(people[0]);

//gn("car");
console.log(t);
myFunction2();
g();


function myFunction1(a,b)
{
    //console.log(g);
    return a * b;
}


function myFunction2()
{
    console.log("asdf");
}

