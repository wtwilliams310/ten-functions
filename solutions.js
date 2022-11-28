"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

//#2
function isFalse(input) {
    if (input === false) {
        return true;
    } else {
        return false;
    }
}

//  console.log(isFalse(false));             // true
//  console.log(isFalse(true));              // false
//  console.log(isFalse(0));                 // false
//  console.log(isFalse(null));              // false
//  console.log(isFalse(""));                // false
//  console.log(isFalse("Banana"));          // false
//  console.log(isFalse([1, 2]));            // false

//# 3
function not(input) {
    if (input == !typeof input)  {
        return true;
    } else if (input !== input) {
        return true;
    } else if (input == undefined) {
        return true;
    } else {
        return false;
    }
}

//  console.log(not(false));                  // true
//  console.log(not(0));                      // true
//  console.log(not(""));                     // true
//  console.log(not(null));                   // true
//  console.log(not(NaN));                    // true
//  console.log(not(undefined));              // true
//  console.log(not(true));                   // false
//  console.log(not("something"));            // false
//  console.log(not(Infinity));               // false
//  console.log(not(123));                    // false

//# 4
function addOne(input) {
    if (typeof input == "number") {
        return input + 1;
    } else if (input === true || input === false) {
        input = NaN;
        return input;
    } else {
        return +input +1;
    }
}

// console.log(addOne(0));                    // 1
// console.log(addOne(2));                    // 3
// console.log(addOne(-5));                   // -4
// console.log(addOne(5.789));                // 6.789
// console.log(addOne(Infinity));             // Infinity
// console.log(addOne("2"));                  // 3
// console.log(addOne("0"));                  // 1
// console.log(addOne("banana"));             // NaN
// console.log(addOne(false));                 // NaN
// console.log(addOne(NaN));                  // NaN

//# 5
function isEven(input) {
    let stringNumber = Number(input);
    if (typeof input === "boolean") {
        return false;
    }
        else {
        if(stringNumber % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}



//  console.log(isEven(2));                   // true
//  console.log(isEven(-8));                  // true
//  console.log(isEven(0));                   // true
//  console.log(isEven("42"));                // true
//  console.log(isEven(1));                   // false
//  console.log(isEven("-3"));                // false
//  console.log(isEven(false));               // false
//  console.log(isEven("banana"));            // false

//# 6

 function isIdentical(a, b){
    if (a === b) {
        return true;
    } else {
        return false;
    }
 }

//  console.log(isIdentical(3, 3));                     // true
//  console.log(isIdentical(false, false));             // true
//  console.log(isIdentical("hello", "hello"));         // true
//  console.log(isIdentical(3, 3.0));                   // true
//  console.log(isIdentical(undefined, undefined));     // true
//  console.log(isIdentical(2, "2"));                   // false
//  console.log(isIdentical("javascript", "java"));     // false

// //# 7

function isEqual(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

//#8

function or(a, b){
    return a || b;
}
//  console.log(or(true, true));                    // true
//  console.log(or(true, false));                   // false
//  console.log(or(false, true));                   // false
//  console.log(or(false, false));                  // false
//  console.log(or("hello", "world"));              // "world" (this behavior is non-obvious, research more)

//# 9
 function and(a, b){
    return a && b;
}

//# 10
function concat(a, b){
    return "" + a + b;
}

console.log(concat("code", "up"));                // "codeup"
console.log(concat("connect", 4));                // "connect4"
console.log(concat("hello", "world"));            // "helloworld"
console.log(concat(4, 2));                        // "42"
console.log(concat(true, true));                  // "truetrue"
