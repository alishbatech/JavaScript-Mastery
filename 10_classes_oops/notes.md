## JavaSCript and Classes

## OOPS

## Objects
-collections of proerties and methods
-tolowercase

## why use objects

## Parts of oops
Object literals

-constructor function
-prototypes
-instances(this, new)
-classes


*********************************************************************************

JavaScript: "this", "prototype", "new", and Arrow Functions (Easy Notes)

1. Functions are also Objects

In JavaScript, both normal functions and arrow functions are objects.

That means we can add our own properties to them.

function normal() {}

const arrow = () => {};

normal.lang = "JS";
arrow.lang = "JS";

---

2. What is a Prototype?

A prototype is an object that stores methods which can be shared by all objects created from a constructor.

function Person() {}

console.log(Person.prototype);

When JavaScript creates a normal function, it automatically creates a prototype object for it.

---

3. Why Do We Need a Prototype?

The prototype helps multiple objects share the same methods instead of creating a new copy for every object.

Person.prototype.sayHi = function () {
  console.log("Hi");
};

If you create 100 objects, there is still only one copy of "sayHi()", and all objects use it.

This saves memory.

---

4. What Does "new" Do?

const p1 = new Person("Alishba");

Behind the scenes, JavaScript does these steps:

1. Creates a new empty object.
2. Connects that object to "Person.prototype".
3. Sets "this" to the new object.
4. Runs the function.
5. Returns the new object.

---

5. What is "this"?

"this" refers to the object that is executing the function.

Example: Object Method

const user = {
  name: "Ali",
  greet() {
    console.log(this.name);
  }
};

user.greet();

Output:

Ali

Here, "this" refers to the "user" object.

Example: Constructor Function

function Person(name) {
  this.name = name;
}

When we write:

new Person("Ali");

"this" refers to the newly created object.

---

6. Why Doesn't an Arrow Function Have Its Own "this"?

An arrow function does not create its own "this".

Instead, it uses the "this" from the surrounding (outer) scope. This is called lexical "this".

const user = {
  name: "Ali",
  show: () => {
    console.log(this.name);
  }
};

user.show();

Output:

undefined

Why?

Because the arrow function did not make "user" its "this". It simply used the outer "this".

---

7. Why Doesn't an Arrow Function Have a Prototype?

Arrow functions are not designed to be constructors.

Because of that, JavaScript:

- Does not create a "prototype" for them.
- Does not give them their own "this".
- Does not allow them to be used with "new".

---

8. Normal Function vs Arrow Function

Feature              | Normal Function | Arrow Function
Is an object         |       ✅       |       ✅
Has "prototype"      |       ✅       |       ❌
Has its own "this"   |       ✅       |       ❌
Can use "new"        |       ✅       |       ❌
Can be a constructor |       ✅       |       ❌

---

9. Important Rule

A normal function doesn't get a prototype because you used "new".

It already has a prototype when it is created, because JavaScript knows it can be used with "new" in the future.

Arrow functions are different.

JavaScript already knows they cannot be constructors, so it never creates a "prototype" for them.

---

Quick Revision

- Functions are also objects.
- A prototype stores shared methods.
- "new" creates a new object, links it to the function's prototype, sets "this" to the new object, runs the function, and returns the object.
- Normal functions have their own "this" and a "prototype".
- Arrow functions don't have their own "this"; they use the outer "this".
- Arrow functions don't have a "prototype" because they cannot be constructors.