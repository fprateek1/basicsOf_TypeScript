export {}   // Exports nothing. Used to avoid error for global scope of "text" variable in code line 3

let text = 'Hi ';  // File is treated as a "script" rather than a "module"
// console.log(text);

// be it "const" or "let", once a variable, say "x" variable has been initialized with some value, "x" can not be re-assigned!
let x = 23;
let y = 45;

let sum;    // "let" can be declared and not initialized a value
const title = 'New Page';     // "const" needs to be initialized with some value while declaration


// ********************************************************************************************************

// defining "type" to variables

let isBeginner: boolean = true;
let total: number = 87;
let name: string = 'Prateek';

let sentence: string = `My name is ${name}`;
// console.log(sentence);

// ***********************************************************************************************************


// NULL and UNDEFINED
let n: null = null;
let m: undefined = undefined;

let myName: string = undefined;
let isName: boolean = null;



// **********************************************************************************************************

// ARRAY Declaration and Initializations
let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4];

// for Arrays of "mixed" type:
let person1: [string, number] = ['Prateek', 22];
let person2: [string, string, number, string, boolean] = ['Prateek', 'Fogat', 22, `Typescript ${title}`, true];
// console.log(person2[3]);

// ***********************************************************************************************************

// "enum" type to give more friendly names to a set of numeric values
enum Color {Red, Purple, Grey};     // index value inside enum begins with 0 by default
let c: Color = Color.Grey;
// console.log(c);

enum Color1 {Red, Purple = 6, Grey};      // here, index values are "0" for Red, "6" for Purple and "7" for Grey
let c1: Color1 = Color1.Red;
// console.log(c1);

// ***********************************************************************************************************


// "any" type for allowing different types of values
   let randomValue: any = 10;
   randomValue = true;
   randomValue = 'Prateek';
   // console.log(randomValue);

   // user-defined type guard
   let myVariable: unknown = 20;
   function hasName(obj: any): obj is { name: string} 
      {
         return !!obj && typeof obj === "object" && "name" in obj
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
      
      let a;
      a = 10;
      a = true;

      let b = 20;
      
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
      
      class Employee {
         empName: string;

         constructor(name: string) {
            this.empName = name;    // constructor is used to initialize employee name
         }

         greet() {
            console.log(`Good Morning ${this.empName}`);
         }
      }

      // Instance of "employee" class
      let emp1 = new Employee('Prateek');
      console.log(emp1.empName);
      emp1.greet();

      class Manager extends Employee {
         constructor(managerName: string) {
            super(managerName);     // to call base employee class constructor
         }
         delegateWork() {
            console.log('Manager delegating tasks')
         }
      }

      let m1 = new Manager('Rajat');
      m1.delegateWork();
      m1.greet();

      console.log(m1.empName);
// ******************************************************************************************************************************
      