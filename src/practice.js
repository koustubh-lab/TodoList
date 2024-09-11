// Shallow copy example
let original = {
    name: "John",
    address: {
        city: "Pune",
    },
};

/* let shallow = {...original}
original.address.city = "LA"
console.log(shallow); */

/* let deep = JSON.parse(JSON.stringify(original))
original.address.city = "Mumbai"
console.log(`deep: 3 ${deep}`);
console.log(`original:  ${original}`); */
/* 
// Curry function concept explained
function curryFunction(a) {
    return function (b) {
        let res = a * b
        return function (c) {
            return (res * c)
        }
    }
}

function getFunction(func, b, c) {
    return func(b)(c)
}

let addTwo = curryFunction(10)
console.log(getFunction(addTwo, 10, 10)); 
*/

/* 
// code to merge two string (example: "hello" + "world" => "hweolrllod")
function merge(str1, str2) {
    let resultString = "";
    let largerString = str1.length > str2.length ? str1 : str2;

    for (let i = 0; i < largerString.length; i++) {
        resultString += str1[i] ? str1[i] : "";
        resultString += str2[i] ? str2[i] : "";
    }

    return resultString;
}

let string1 = "hello";
let string2 = "world 123";

console.log(merge(string1, string2)); */

/* 
// Both function calls should have same output
function sum(a, b = null) {
    console.log(typeof a, typeof b);
}

sum(2, 4)
sum((2)(4))
*/
/* 
// Flattening an array
function flattenArray(array) {
    let newArray = [];
    array.forEach((element) => {
        if (element instanceof Array) {
            newArray.push(...element);
        } else {
            newArray.push(element);
        }
    });
    return newArray;
}

let array = [
    [1, 2],
    [2, 3],
    [3, 4],
];
console.log(flattenArray(array));
 */

/* 
function getArg(a, ...b) {
    console.log(b);
}

getArg(3,10,25,2,5,7)
 */

/* 
// Use of the delete keyword
let data = {
    name: "koustubh"
}
console.log(delete data.name1);
console.log(data);
 */

/* 
let data = {
    name: "koustubh"
}

Object.defineProperty(data, 'age', {
    value: 20,
    configurable: false
})

console.log(data);

console.log(delete data.name);
console.log(delete data);
 */

