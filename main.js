"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var text = 'Hi '; // File is treated as a "script" rather than a "module"
// console.log(text);
// be it "const" or "let", once a variable, say "x" variable has been initialized with some value, "x" can not be re-assigned!
var x = 23;
var y = 45;
var sum; // "let" can be declared and not initialized a value
var title = 'New Page'; // "const" needs to be initialized with some value while declaration
// ********************************************************************************************************
// defining "type" to variables
var isBeginner = true;
var total = 87;
var name = 'Prateek';
var sentence = "My name is ".concat(name);
// console.log(sentence);
// ***********************************************************************************************************
// NULL and UNDEFINED
var n = null;
var m = undefined;
var myName = undefined;
var isName = null;
// **********************************************************************************************************
// ARRAY Declaration and Initializations
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4];
// for Arrays of "mixed" type:
var person1 = ['Prateek', 22];
var person2 = ['Prateek', 'Fogat', 22, "Typescript ".concat(title), true];
// console.log(person2[3]);
// ***********************************************************************************************************
// "enum" type to give more friendly names to a set of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Purple"] = 1] = "Purple";
    Color[Color["Grey"] = 2] = "Grey";
})(Color || (Color = {}));
; // index value inside enum begins with 0 by default
var c = Color.Grey;
// console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Purple"] = 6] = "Purple";
    Color1[Color1["Grey"] = 7] = "Grey";
})(Color1 || (Color1 = {}));
; // here, index values are "0" for Red, "6" for Purple and "7" for Grey
var c1 = Color1.Red;
// console.log(c1);
// ***********************************************************************************************************
// "any" type for allowing different types of values
var randomValue = 10;
randomValue = true;
randomValue = 'Prateek';
// console.log(randomValue);
// user-defined type guard
var myVariable = 20;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
/*  let myVariable: any = 10;

     console.log(myVariable);
     myVariable();
     myVariable.toUpperCase();
*/
// "unknown" type is used to tackle issue of not throwing any error from 68 to 72 code lines
/*   let myVariable: unknown = 10;

   console.log(myVariable.name);
   myVariable();
   myVariable.toUpperCase();
*/
// to get rid of errors in code like above, "type assertion" is implemented in code
/*   let myVariable: unknown = 10;

   console.log(myVariable.name);
   (myVariable as string).toUpperCase();     // treat "myVariable" as a string then apply "toUpperCase()" method
*/
// ******************************************************************************************************************
// "TYPE INFERENCE"
var a;
a = 10;
a = true;
var b = 20;
// "union" type   vs. "any" type
/*
   let multiType: number | boolean;
   multiType = 20;
   multiType = true;
   multiType.     // Intellisense displays suggestion in this scenario

   let anyType: any;
   anyType = 20;
   any.           // Intellisense displays no suggestions in this scenario
*/
// ***************************************************************************************************************************
// "functions" in TS
/*   function add(num1: number, num2: number)
   {
      return num1 + num2;
   }
   add(2,6);
   add(2, "6");      // error thrown   (explicitly specifying the return type in function definition to handle this type of error)
*/
// explicitly specifying the return type in function definition:-
/*   function add(num1: number, num2: number) : number
   {
      return num1 + num2;
   }
   add(2,6);
   //add(2, "6");
   add(5);     // error thrown  (optional parameter is used to tackle with this error)
*/
// OPTIONAL and DEFAULT parameters
// "optional" parameter:-
/*   function add(num1: number, num2?: number) : number
   {
      return num1 + num2;
   }
   add(2,6);
   add(5);
*/
// "default" parameter:-
/*   function add(num1: number, num2: number = 20) : number
   {
      if (num2)
         return num1 + num2;
      else
         return num1;
   }
   add(2,20);  // output will be 22
   add(5);     // 5 is assigned to num1 but second parameter, instead of undefined will be assigned as 20. Out put will be 25
*/
// **********************************************************************************************************************************
// INTERFACES
/*   function fullName(person: {firstName: string, lastName: string})
   {
      console.log(`${person.firstName} ${person.lastName}`);
   }

   let p = {
      firstName: 'Ganesh',
      lastName: 'Kumar'
   };

   fullName(p);
*/
/* having multiple functions that uses same address object as its parameters will make code clumsy and difficult to maintain
   "interfaces" are the solution for such issue  */
/*
   interface Person{
      firstName: string;
      lastName: string;
   }
    function fullName(person: Person) {
   
      console.log(`${person.firstName} ${person.lastName}`);
   }

   let p = {
      firstName: 'Ganesh',
      lastName: 'Kumar'
   };

   fullName(p);
*/
// **************************************************************************************************************************
// CLASSES
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name; // constructor is used to initialize employee name
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.empName));
    };
    return Employee;
}());
// Instance of "employee" class
var emp1 = new Employee('Prateek');
console.log(emp1.empName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Rajat');
m1.delegateWork();
m1.greet();
console.log(m1.empName);
// ******************************************************************************************************************************
// ACCESS MODIFIERS
