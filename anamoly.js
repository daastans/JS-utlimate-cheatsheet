// Created and maintained by Aman Sharma (https://github.com/daastans), any dispute shall be resolved by a appropriate pull request or mail .

//=====================
// 1. Data and Structure types
//=====================


// 1. Primitive : undefined, null(object), boolean, string ,bigint,symbol,number
// 2 Non-Primitive : All objects, Everything other than primitive. 

//=====================
// 2. Coercion 
//=====================
//Coercion simply refers to attempt  to coerce an unexpected value type to the expected type
// primitives are frequently coerced to objects when needed.Example string value is coerced to a string object in order to access the property length
// The string object is only used for a fraction of second after which it is sacrificed to the Gods of garbage collection

// Example 2.1
// String.prototype.returnMe= function() {
//     return this;
// }

// var a = "abc"; 
// var b = a.returnMe();  //Prevents garbage collection as long as it exists

// console.log(typeof a)
// console.log(typeof b)

//object coerced to primitive 
// var Twelve = new Number(12); 
// var fifteen = Twelve + 3; 
// fifteen; //15
// typeof fifteen; // (primitive)
// typeof Twelve; //; (still object)

//a boolean object evaluates to true unless its value is null or undefined. Try this:

// if (new Boolean(false)) {
//     console.log("true???"); 
// }


//=====================
// 3. Falsy and Truthy
//=====================
//Every Javascript value can be coerced into either true or false. Coercion into boolean true means the value is truthy. Coercion into boolean false means the value is falsy.

// There are a handful of values in Javascript that return falsy values, they are:

// false
// 0
// null
// undefined
// ""
// NaN
// -0
// Everything else is truthy,

//=====================
// 4. Value vs. Reference 
//=====================
//Pass by value: Copy of value is passed.
//Pass by reference: Reference of value is passsed

//Primitives values are passed by value.
//Non Primitives ( Array, Function, and Object) are passed by reference.

//This is also a reason why string defined with const keyword is immutable, since it is primitive.

//If reference variable is reassigned a value it takes on to new reference and leaves the previous.

//=====================
// 5. Equality == and ===
//=====================

// == , compares two values, and tries to covnvert diff data type to same data type for conversion.
// === , strong equality, compares two values of same data type

// Example 5.1
// NaN === NaN
// Number.isNaN, beware of global isNaN which coerces value

// Example 5.2
// var arrRef = ['Hi!'];
// var arrRef2 = arrRef;
// console.log(arrRef === arrRef2); // -> guess

// var arr1 = ['Hi!'];
// var arr2 = ['Hi!'];
// console.log(arr1 === arr2); // -> guess

// When equality operators work on Objects they only check a reference, if reference is same they return true else false.

//If we have two distinct objects and want to see if their properties are the same, the easiest way to do so is to turn them both into strings and then compare the strings.

//Example 5.3
// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         nam: 'John',
//         age: 50
//     };

//     return person;
// }
// var personObj1 = {
//     nam: 'Alex',
//     age: 30
// };
// var personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1); // -> ? 
// console.log(personObj2); // -> ? 

//NaN is a special numeric value that is not equal to itself.

//=====================
// 6. JavaScript Functions 
//=====================
//A function is a subprogram designed to perform a particular task.
// Values can be passed into functions and used within the function.
// Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
// Functions are objects.

//Ways to define a function

//Function Declaration : defines a namd function, function definition is hoisted.
//Function expression: defines namd or anynomus function, not hoisted.
//Arrow function : anonymous function, not hoisted, do not create this variable

// console.log(nam)
// Example of function decaration
// function nam(parameters) {
//     statements
// }

// Example of function expression
// let nam = function (parameters) {
//     statements
// }

// Example of arrow function 
// let nam = (parameters) => {
//     statements
// }


//=====================
// 7.Parameters vs. Arguments 
//=====================

//Parameters : used when defining a function, nams created in function definition, limit : 225

//Arguments : values the function receives from each parameter when the function is executed (invoked)


//=====================
// 8. var, let and const / function scope and block scope
//=====================


//Example 8.1
// function myFunc() {  
//     var nam = 'Luke'
//     console.log(nam); // guess
//   }

//   myFunc();

//   console.log(nam); //guess

//------pre ES6----- 
//var :  function scoped.
//other types of blocks — like if-statements, loops etc — will not be considered as a scope.

// var nam = 'Luke';

// const func = () => {  
//   var nam = 'Phil';
//   console.log(nam); // guess
// }

// func();

// console.log(nam); // guess  

// var nam = 'Luke';

// if (true) {  
//   var nam = 'Phil';
//   console.log(nam); // guess
// }

// console.log(nam); // guess

//------post ES6-----
//let and const were introduced as alternative ways of declaring variables — both being blocked scoped.

// let nam = 'Luke';

// const func = () => {  
//   let nam = 'Phil';
//   console.log(nam); // guess
// }

// func();

// console.log(nam); // guess  
// let nam = 'Luke';

// if (true) {  
//   let nam = 'Phil';
//   console.log(nam); // guess
// }

// console.log(nam); // guess 


//behaviour in loops
// var printsToBeExecuted = [];

// for (let i = 0; i < 3; i++) {  
//   printsToBeExecuted.push(() => console.log(i));
// }

// printsToBeExecuted.forEach(f => f());  
// Output: undefined,undefined,undefined


// var printsToBeExecuted = [];

// for (var i = 0; i < 3; i++) {  
//   printsToBeExecuted.push(
//     ((ii) => () => console.log(ii))(i));
// }

// printsToBeExecuted.forEach(f => f());  
// // Output: 0,0,0


//=====================
// 9. Scope and context
//=====================

// Fundamentally, scope is function-based while context is object-based. In other words, scope establishes the variables’ accessibility from different scopes during runtime. Context is most often determined by how a function is invoked. Context is generally value of 'this'

//=====================
// 10. Functions & methods
//=====================
// When a function is defined within the scope of an object or class then it is called as a method.
// ‘this’ behaves differently inside a function and a method.

//=====================
// 11. ‘this’ keyword
//=====================
// The ‘this’ keyword may refers to the current object/function/method that we are working with.

// 1. Within a method: ‘this’ refers to the current object/owner the method belongs.
// 2. Within a function: By default, the ‘this’ points to the global object. When invoked using the call() or apply() or bind() function then it refers to whatever argument we have passes to them
// 3. When a function is called as a constructor using the new, then the ‘this’ refers to the new instance.
// 4. Within arrow function :  ‘this’ points to the closest function/method scope. Reason : due to lexical scoping.

// const foo = {
//     language: 'JavaScript',
//     arrowFunc: () => {
//         return this.language
//     },
//     fooMethod: function () {
//         return this.language;
//     }
// };




// console.log(foo.arrowFunc());
// console.log(foo.fooMethod());

// function foo(){
//     this.language ="JavaScript";
//     const arrowFunc =()=>{
//         return this.language;
//     };
//     return {arrowFunc};
// }

// console.log(foo().arrowFunc())

//=====================
//12. call(), apply() or bind()
//=====================
//call,apply : ECMA 3
//bind : ECMA 5

// allows you to execute any function in any desired context

// const cylinder = {
//     pi: 3.14,
//     volume: function(r, h) {
//         return this.pi * r * r * h;
//     }
// };

//  console.log(cylinder.volume(2, 4))

// //apply takes an array of arguments.
// console.log(cylinder.volume.call({pi: 3.14159}, 2, 4));
// console.log(cylinder.volume.apply({pi: 3.14159}, [2, 4]))

// // call() and apply() are invoked immediately, bind() returns a bound function, with new context, which will be invoked later.

// var customVolume = cylinder.volume.bind({pi: 3.14159}); 
// customVolume(2,4); // Now pi is 3.14159

//changing context means, changing value of this statement.

//=====================
//13. new Operator
//=====================

// When you use new, four things happen:
// 1. It creates a new, empty object.
// 2. It binds this to our newly created object.
// 3. It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.
// 4. It adds a return this to the end of the function, so that the object that is created is returned from the function.

// function Student(nam, age) {
//     this.nam = nam;
//     this.age = age;

//     console.log(this)
// }

// var func=Student('Jack',22);
// var obj=new Student('Jill',22);



//=====================
//14. Stack, Heap, Task Queue 
//=====================
//Stack : records the function calls, basically where in the program we are,limit 16,000 frames
//Heap : Objects are allocated in a heap
//Task Queue : messages are queued in response to external async events(such as a mouse being clicked or receiving the response to an HTTP request), given a callback function has been provided. If, for example a user were to click a button and no callback function was provided — no message would have been enqueued.

//=====================
//15. Execution Context and Execution Stack
//=====================
// const person = {
//     name: 'peter',
//     birthYear: 1994,
//     calcAge: function() {
//       console.log(2018 - this.birthYear);
//     }
//   }
//   person.calcAge(); // guess this
//   const calculateAge = person.calcAge;
//   calculateAge(); // guess this


//Execution context : Environment where js code is evaluated and executed.

//Types of Execution context
// 1. Global Execution context : default execution context, if code that is not inside any function is in the global execution context. It creates global object which is window objects and assigns it to this. There can be only one global execution context in a program
// 2. Functional Execution Context : Every time a function is invoked, a brand new execution context is created for that function, no limit on function execution context.
// 3. Eval Function Execution Context :  Code executed inside an eval function also gets its own execution context


// Execution stack: LIFO  structure, which is used to store all the execution context created during the code execution.

// Once all the code is executed, the JavaScript engine removes the global execution context from the current stack.

// A lexical environment is a structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object and array object] or primitive value)

// The environment record is the place where the variable and function declarations are stored.
// There are also two types of environment record :
// 1. Declarative environment record —  stores variable and function <declarations>. The lexical environment for function code contains a declarative environment record.
// 2. Object environment record — The lexical environment for global code contains a objective environment record. Apart from variable and function declarations, the object environment record also stores a global binding object (window object in browsers). So for each of binding object’s property (in case of browsers, it contains properties and methods provided by browser to the window object), a new entry is created in the record.

// Reference to the outer environment : means it has access to its outer lexical environment. That means that the JavaScript engine can look for variables inside the outer environment if they are not found in the current lexical environment.

// 'this' binding : Tells us how function is called.
// Called from global context? 'this' = window obj
// Called with object reference? 'this' = obj
// Called inside arrow function? 'this' = nearest function scope

// Execution Phase : assignments to all those variables are done and the code is finally executed.

//Execution context
// |
// |-->Creation Phase
// |    |
// |    |-->LexicalEnvironment (let const)
// |    |   |
// |    |   |-->Environment Record
// |    |   |
// |    |   |-->Reference to the outer environment
// |    |   |
// |    |   |-->'this' binding
// |    |   
// |    |-->VariableEnvironment (var)
// |    |   |
// |    |   |-->Environment Record
// |    |   |
// |    |   |-->Reference to the outer environment
// |    |   |
// |    |   |-->'this' binding
// |
// |-->Execution Phase


//Example code

// let a = 20;
// const b = 30;

// var c;
// function multiply(e, f) {
//  var g = 20;
//  return e * f * g;
// }
// c = multiply(20, 30);

//Creation Phase : global context is created
// GlobalExectionContext = {
//     LexicalEnvironment: {
//       EnvironmentRecord: {
//         Type: "Object",
//         // Identifier bindings go here
//         a: < uninitialized >,
//         b: < uninitialized >,
//         multiply: < func >
//       }
//       outer: <null>,
//       ThisBinding: <Global Object>
//     },
//     VariableEnvironment: {
//       EnvironmentRecord: {
//         Type: "Object",
//         // Identifier bindings go here
//         c: undefined,
//       }
//       outer: <null>,
//       ThisBinding: <Global Object>
//     }
//   }


//Execution Phase : assignments are done
// GlobalExectionContext = {
//     LexicalEnvironment: {
//         EnvironmentRecord: {
//           Type: "Object",
//           // Identifier bindings go here
//           a: 20,
//           b: 30,
//           multiply: < func >
//         }
//         outer: <null>,
//         ThisBinding: <Global Object>
//       },
//     VariableEnvironment: {
//         EnvironmentRecord: {
//           Type: "Object",
//           // Identifier bindings go here
//           c: undefined,
//         }
//         outer: <null>,
//         ThisBinding: <Global Object>
//       }
//     }

// a new function execution context is created to execute multpily(20,30)

//Creation Phase
// FunctionExectionContext = {
//     LexicalEnvironment: {
//         EnvironmentRecord: {
//           Type: "Declarative",
//           // Identifier bindings go here
//           Arguments: {0: 20, 1: 30, length: 2},
//         },
//         outer: <GlobalLexicalEnvironment>,
//         ThisBinding: <Global Object or undefined>,
//       },
//     VariableEnvironment: {
//         EnvironmentRecord: {
//           Type: "Declarative",
//           // Identifier bindings go here
//           g: undefined
//         },
//         outer: <GlobalLexicalEnvironment>,
//         ThisBinding: <Global Object or undefined>
//       }
//     }

//Execution Phase
// FunctionExectionContext = {
//     LexicalEnvironment: {
//         EnvironmentRecord: {
//           Type: "Declarative",
//           // Identifier bindings go here
//           Arguments: {0: 20, 1: 30, length: 2},
//         },
//         outer: <GlobalLexicalEnvironment>,
//         ThisBinding: <Global Object or undefined>,
//       },
//     VariableEnvironment: {
//         EnvironmentRecord: {
//           Type: "Declarative",
//           // Identifier bindings go here
//           g: 20
//         },
//         outer: <GlobalLexicalEnvironment>,
//         ThisBinding: <Global Object or undefined>
//       }
//     }

// After the function completes, the returned value is stored inside c. So the global lexical environment is updated. After that, the global code completes and the program finishes.



// ========================
// Practice problems
// ========================


// Problem 1

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// console.log(foo1())
// console.log(foo2())

//Problem 2
// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

//Problem 3
// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]===a[c]);
// console.log(a[b]);
// console.log(a[c]);
// console.log(a);


//Problem 4
//{} + 1
//{2} + 2
//{2+2} + 3
//{2+2} -3 

//=====================
//16. EventLoop
//=====================
//Normal programming languages use multithreading, to do multitaksing. Thread is basically a path of execution,it resides in a process, it has its own memory. Threads are of two types : Hardware and Software threads. Hardware threads are equal to no. of cores in you cpu. OS threads are limited by the stack size, they can be in 1000s, OS threads share Hardware threads by using a technique called time slicing.

//Resources are needed to manage a thread, hence more number of threads can make an application heavy.
//JS being lightweight, got a workaround with concept of event loop.

// Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
// The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
// The event loop allows us to use callbacks and promises.
// The event loop executes the tasks starting from the oldest first.

//JS-Runtime
// |
// |-->Stack
// |    |
// |    |-->GlobalExecutionContext
// |    |   
// |    |-->FunctionExecutionContext 
// |
// |-->Heap
// |
// |-->Task Queue
// |    |
// |    |-->Micro Tasks (process.nextTick | Promise callback | queueMicrotask)
// |    |   
// |    |-->Macro Tasks (setTimeout | setInterval | setImmediate)

// The event loop gives a different priority to the tasks:
// 1. functions get executed and popped off the stack.
// 2. microtasks  get executed! (Microtasks themselves can also return new microtasks, effectively creating an infinite microtask loop 😬)
// 3. macro task queue. The tasks get popped onto the callstack, executed, and popped off!

// console.log('start') 

// setTimeout(() => {
//     console.log('Timeout')
// })

// Promise.resolve('Promise')
//     .then(res => console.log(res)); 

// console.log('end') 

//=====================
// 17. Promises
//=====================


// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object you attach callbacks to, instead of passing callbacks into a function.

//Promise has three state : pending (initial), resolve or reject

// console.log("1");
// setTimeout(function(){console.log("2");},3000);
// console.log("3");
// setTimeout(function(){console.log("4");},1000);


// var promise = new Promise(function (resolve, reject) {

//   if (false) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("Something broke"));
//   }
// });


// promise.then(function (result) {
//   console.log("Done", result);
// }).catch( function (err) {
//   console.log("Reason ", err);
// });

//=====================
// 18. async/await
//=====================

// An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result.

//Goal of async function was to make asynchronous code look like synchronous code.

// var asyncTask = async function () {
//   console.log('here')
//   if (true) {
//     return "Stuff worked!";
//   }
//   else {
//     return Error("Something broke");
//   }
// }

// const wrapper = document.querySelector('.wrapper');

// var asyncTaskValue = async () => {
//   const value = await asyncTask();
//   wrapper.innerHTML = value
// }

// asyncTaskValue()
// console.log(value)
// console.log(asyncTaskValue())

// // -------
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log('Success 1');
//   })
//   .then(function () {
//     console.log('Success 2');
//   })
//   .then(function () {
//     console.log('Success 3');
//   })
//   .catch(function () {
//     console.log('Error 1');
//   })
//   .then(function () {
//     console.log('Success 4');
//   })

//--------------------
// function job(state) {
//   return new Promise(function(resolve, reject) {
//       if (state) {
//           resolve('success');
//       } else {
//           reject('error');
//       }
//   });
// }

// let promise = job(true);

// promise
// .then(function(data) {
//   console.log(data);

//   return "fob"

// })

// .catch(function(error) {
//   console.log(error);

//   return job(true);
// })

// .then(function(data) {
//   console.log(data);
//   return job(true);
// })

// .catch(function(error) {
//   console.log(error);
// });

// 1. dont call then after catch, because catch returns a fullfilled promise.
// 2. handler functions (then and catch), they always return a promise.
// 3. If a value is returned by handler functions they get wrapped inside a resolved promise.

//=====================
// 19. JavaScript Objects
//=====================

//Every object have three major parts: 1) properties 2) prototype 3) constructor

// const cart_item_literal = {
//     nam: 'spaghetti',
//     price: 50,
//     quantity: 20,
//     totalPrice:function(){
//         console.log(this.price*this.quantity)
//     }
// };


// // cart_item_literal.totalPrice() 

// //There are three ways of defining Objects : 1) Object literal 2) Object.create 2) new Operator 3) Class

// function CartItem(name, price, quantity) {
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;

// }

// CartItem.prototype.totalPrice= function () {
//     console.log(this.price * this.quantity)
// }

// // prototypes

// cart_item_new =new CartItem('spaghetti', 50, 20);
// // cart_item_new_2 = new CartItem('potato chips', 52, 22);


// // cart_item1.totalPrice();


// // -----------------

// class Cart_Item {
//     name;
//     price;
//     quantity;

//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     totalPrice () {
//         console.log(this.price * this.quantity)
//     }

// }

// cart_item_class = new Cart_Item('spaghetti', 50, 20)

// -----------------------
// var a = 1
// var foo =function(){
//  var a = 2
//  console.log(a)
// }
// foo()
// console.log(a);

// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
  
//   foo();
//   console.log(typeof a); // => ???
//   console.log(typeof b); // => ???
  
//   ---------

// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;

// clothes[0]; // => ???

// -----------

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }

// console.log(numbers); // => ???

// ----------------
// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);//async
// }
// // S (3)
// T - >3 3 3

