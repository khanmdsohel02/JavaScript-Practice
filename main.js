/*

a = 3;
var a;
console.log(a);

*/


/*

x = 3;
let x;
console.log(x);

*/

// const a ;
// a = 4;

/*

const friNames = ["Ahmed", "Osama", "Sayed"];
console.log(friNames);

friNames[1] = "sohel";
console.log(friNames);

friNames.push('sathi')
console.log(friNames);

*/

/*

const about ={
    name: "Ahmed",
    age: 23,
    job: "Developer" 
}
console.log(about);

about.age = 24;
console.log(about);

about['name'] = "sami";
console.log(about);

about.possition = "web developer";
console.log(about);

*/

/*

const a = 5;

{
    const a = 4;
    console.log(a);
}
console.log(a);

*/

/*
const person = {
    name: "Ahmed",
    age: 23,
    job: "Developer",   
    fullName: function(){
        console.log(this); //this define full person object
        console.log(this.name, this.age);
        console.log(person.name, person.age);
    }
}

person.fullName();

*/




// ****==================***String Methods****==========================*****


// let fullName = 'Khan Muhammad Sohel Khan';

// console.log(fullName);

// console.log(fullName.slice( 0, 4) );

// console.log(fullName.substring(4, 13));


// // substr() Method is Deprecated-BAD //
// console.log(fullName.substr(13, 5)); 

// // replace() Method case-sensitive
// console.log(fullName.replace('Khan', ''));


// // With regular expression [/replace text/i] replace() Method insensitive
// console.log(fullName.replace(/KHAN/i, ''));

// // With regular expression [/replace text/g] or [/replace text/ig] replace all matches
// console.log(fullName.replace(/KHAN/gi, ''));

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());





// // =========Concat() Method=====================

// let a = 'Sohel';
// let b = 'Sathi';

// console.log(a + ' ' + b);
// console.log(a.concat(' ', b)); // two strings concating


// // Strings are immutable: Strings cannot be changed, only replaced.

// let c = 'sohel';
// console.log(c);
// c = 'sami';
// console.log(c);





// //===================trim() Method======================

// // trim() method removes whitespace from both ends of a string

// let d = '      sami       ';
// console.log(d.trim());




// // ============padStart() and padEnd() Method==================

// console.log(c.padStart(10, ' ')); // padStart() method adds padding to the start of a string
// console.log(c.padEnd(8, '0')); // padEnd() method adds padding to the end of a string




// // ===============charAt() Method================
// var n = 'Muhammad sajid';
// console.log(n.charAt(11)); // charAt() method returns the character at the specified index(position) in a string

// console.log(typeof n.charAt(44)); // returns an empty string

// console.log(n[6]); // bracket operator can also be used to access characters in a string

// console.log(n[77]); // returns undefined

// console.log(typeof n[77]); // type of Undefined

// console.log(typeof (typeof n[77])); // type of String









// ****=====================String seaech Methods========================******


// ===============indexOf() method==================

// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.indexOf('Binte')); // indexOf() method searches a string for a specified value and returns its position

// console.log(fName.indexOf('Sohel', 8)); 
 
// console.log(fName.indexOf('Sohel', 20)); // returns -1 if the value is not found




// =============== lastIndexOf() method==================

// console.log(fName.lastIndexOf('Sohel')); // lastIndexOf() method searches a string for a specified value and returns its position

// console.log(fName.lastIndexOf('Binte', 8)); //??????????????



// =============== search() method==================

// console.log(fName.search('Sohel')); // search() method searches a string for a specified value and returns the position of the match

// console.log(fName.search(/binte/g)); 

// console.log(fName.search(/binte/i));



// =============== match() method==================

// console.log(fName.match('Sohel')); // ম্যাচ() পদ্ধতি একটি স্ট্রিং এর বিপরীতে একটি স্ট্রিং মেলানোর ফলাফল ধারণকারী একটি অ্যারে প্রদান করে ...match() will return only the first match in the string.

// console.log(fName.match('sohel')); // returns null, if the value is not found

// console.log(fName.match(/binte/i)); // If you want to search case insensitive, the insensitive flag (i) must be set

// console.log(fName.match(/Binte/ig)); //  the global flag (g)





// =============== matchAll() method==================

// console.log(fName.matchAll('binte')); // matchAll() method searches a string for all occurrences of a specified value and returns an iterator object with all results

// console.log(Array.from(fName.matchAll('binte'))); // returns an iterator object

// console.log(fName.matchAll(/binte/gi)); // the global flag (g) and insensitive flag (i) must be set




// =============== from() method==================

// console.log(Array.from(fName.matchAll(/binte/gi)));




// =============== includes() method==================

// console.log(fName.includes('binte')); // includes() method returns true if a string contains a specified value, otherwise it returns false

// console.log(fName.includes('Rufaida', 10)); // returns true if the value is found, otherwise returns false











//**********==========================Numbers=====================**********


// let a = 10;
// let b = 20;
// let c = '5';
// let d = '2.5';

// console.log(a + b);

// console.log(a + c);
// console.log(a / c);
// console.log(a * c);
// console.log((a - c));

// console.log(a + d);
// console.log(c / d);
// console.log(c * d);
// console.log((c - d));

// console.log(typeof (NaN));




//============== toString() Method================

// let num = 10;
// console.log(typeof num);

// let num2 = num.toString(); // JavaScript automatically converts an array to a comma separated string when a primitive value is expected 
// console.log(typeof num2);



//============== toFixed() Method================

// // toFixed() Method (Dosomiker pore koiti okkhor bosbe ta nirdaron kore)

// let z = 1000;

// console.log(z.toFixed(2)); 




//============== toPrecision() Method================

// // toPrecision() Method (ekti sonkhar total length nirdaron kore)

// let num6 = 100.3436457463;
// console.log((num6.toPrecision(6)));




// ===============parseInt() Method============

// console.log((parseInt('5.6789'))); // parseInt() method parses a string to Number and returns an integer

// console.log(parseInt(5.9789)); // eti sodu dosomiker ager sonkha return kore.





// ===============parseFloat() Method============

// console.log(parseFloat("4.8ghfg")); // parseFloat() method parses a string to a number and returns a floating-point number 











// *****************==================Arrays==============================***********

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr);

// document.querySelector('#demo').innerHTML = arr.reverse();

// console.log(typeof arr);

// console.log(arr[0]); // first element access

//  let arr2 = arr.length - 1;
// console.log(arr[arr2]); // last element access


//============push() method================

// arr.push(55); // push() method adds one or more elements to the end of an array and returns the new length of the array

// arr[arr.length] = 77; 

// arr[13] = 88; // Adding elements with high indexes can create undefined "holes" in an array:

//In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.




//==================Array.isArray() ========================

// console.log(Array.isArray(arr)); // Array.isArray() পদ্ধতি নির্ধারণ করে যে একটি বস্তু একটি অ্যারে কিনা

// console.log(arr instanceof Array); // instanceof পদ্ধতি নির্ধারণ করে যে একটি বস্তু একটি অ্যারে কিনা





//******=====================Array Methods=========================== ****** 


// ==================toString()=========================

// console.log(arr.toString()); // toString() method converts an array to a string of (comma separated) array values. 
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected

// All JavaScript objects have a toString() method.




//===================== join() method =====================


// console.log(arr.join(' - ')); // The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator




//=============pop() method======================

// let removed = arr.pop(); // pop() method removes the last element from an array and returns that element.
// console.log(removed);




//=============shift() method======================

// console.log(arr.shift()); // The shift() method removes the first array element and "shifts" all other elements to a lower index and returns that removed element.



// =================push() method================

// console.log(arr.push(99)); // push() method adds one or more elements to the end of an array and returns the new length of the array





// =================unshift() method================

// console.log(arr.unshift(11)); // unshift() method adds one or more elements to the beginning of an array and "shifts" all other elements to a higher index and returns the new length of the array

// arr[12] = 15;  // Array elements are accessed using their index number and change the value of that element.




// ==================delete operator=================

// console.log(delete arr[3]); // delete operator is used to remove the element from an array using index number or property name ???????????




// =================splice() method================

// console.log(arr); 

// console.log(arr.splice(2, 2)); // only removed elements

// ****splice has 3 parameters**** 

// 1. The first parameter defines the position where new elements should be added (spliced in).

// 2. The second parameter defines how many elements should be removed.

// 3. The rest of the parameters define the new elements to be added.

// The splice() method returns an array with the deleted items:


// splice() method removes elements from an array and or adds new elements in place of removed elements. It returns an array containing the deleted elements.

// console.log(arr.splice(2, 2 , 'sohel', 'sathi')); / removed and added new elements

// console.log(arr.splice(2, 0 , 'sohel', 'sathi')); // only added new elements 





// ================toSpliced() method================

// toSpliced() method removes elements from an array and or adds new elements in place of removed elements. It returns an new array containing with the new elements. array toSpliced() পদ্ধতিটি মূল অ্যারে পরিবর্তন না করে একটি অ্যারেকে বিভক্ত করার একটি নিরাপদ উপায় হিসাবে।

// console.log(arr.toSpliced(2, 4, 'sohel', 'sathi')); // removed and added new elements

// console.log(arr.toSpliced(2, 0, 'sohel', 'sathi')); // only added new elements 










// ****=================Arrays concating================******

// The concat() method creates a new array by merging (concatenating) existing arrays

// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.

const arr6 = [1, 2, 3, 4, 5];
const arr7 = [6, 7, 8, 9, 10];
const arr8 = [11, 12, 13, 14, 15];


// console.log(arr6.concat(arr7, arr8, 20, '21', 22, 23));

let nam = 'sohel';
let nam2 = 'sathi';
let nam3 = 'rufaida';

// console.log(nam.concat(' ', nam2, ' ', nam3), 33, '44', 55);








//***** =============Array Slicing===============******

// console.log(arr.slice(2, 6)); 
// The slice() method slices out a piece of an array into a new array

// The slice() method creates a new array. It return sliced part of the array without ending index element.

// The slice() method does not remove any elements from the source array.

// The slice() method takes two parameters: 1. the first one is the index at which to begin the slice, 2. the second one is the index at which to end the slice.

// If the 2nd parameter is omitted, the slice() method slices out the rest of the array.






// ****==================Array at() method==================== *****

// console.log(arr.at(3)); 

// Array at() method returns the element at the specified index

// The at() method returns the same as [].

// The at() method takes one parameter: the index of the element to return.






// ********===========Array flat() method==================== ***

 const newArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// console.log(newArr.flat()); 

// Array flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// অ্যারে ফ্ল্যাট() পদ্ধতি একটি নতুন অ্যারে প্রদান করে যার মধ্যে নির্দিষ্ট  অ্যারে সমস্ত সাব-অ্যারে উপাদান রয়েছে।






// *******===============Array copyWithin() method ===============*********

// Array copyWithin() method copies array elements within the array. copyWithin() পদ্ধতি অ্যারের উপাদানকে একটি অ্যারের অন্য অবস্থানে অনুলিপি করে

// The copyWithin() method overwrites the existing values. returns the modified array.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

// target jodi array er length teke boro hoy tahole copy hobe na.

// The copyWithin() method takes three parameters: 1. target, 2. start, and 3. end.

// By Default, Starting index is 0 and ending index is array length - 1.

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Avocado"];

// console.log(fruits.copyWithin(6, 0));; 








// *******==============Array sort() method =============*****

// By default, the sort() function sorts values as strings.

// The sort() method sorts an array alphabetically

// jodi kono element er first letter capital hoy tahole otai age bosbe

// const nams = ['sohel', 'sathi', 'rufaida', 'masum', 'osman'];
// console.log(nams.sort());






// *******===========Array reverse() method =================*****

// The reverse() method reverses the elements in an array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());





// ===============Numeric Sorting==============*********

// const newNum = [23, 53, 3, 46, 4, 1, 45]
// console.log(newNum.sort(function(a, b){return a - b}));




// =================Sorting an Array in Random Order============

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return 0.5 - Math.random()});
// console.log(points);





// ==============Find the Lowest (or Highest) Array Value================********

// Sort the array and read the first or last element
// Use Math.min() or Math.max()

// console.log(Math.max.apply(null, arr));
// console.log(Math.min.apply(null, arr));







// ===========================Sorting Object Arrays==================********

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];


// cars.sort(function(a, b){return a.year - b.year});
// cars.sort(function(a, b){return b.year - a.year});
// console.log(cars);





// *******================Array toSorted() Method ==================*****

// the toSorted() method as a safe way to sort an array without altering the original array.

// toSorted() এবং sort() এর মধ্যে পার্থক্য হল যে toSorted() পদ্ধতিটি মূল অ্যারেটিকে অপরিবর্তিত রেখে একটি নতুন অ্যারে তৈরি করে, যখন sort() পদ্ধতিটি মূল অ্যারেটিকে পরিবর্তন করে।

// console.log(arr.toSorted());
// console.log(arr.sort());







// =====================Array toReversed() Method ==================*****

// the toReversed() method as a safe way to reverse an array without altering the original array.

// toReversed() এবং reverse() এর মধ্যে পার্থক্য হল যে toReversed() পদ্ধতিটি একটি নতুন অ্যারে তৈরি করে, মূল অ্যারেটিকে অপরিবর্তিত রেখে, যখন reverse() পদ্ধতিটি মূল অ্যারেটিকে পরিবর্তন করে।

// console.log(arr.toReversed());
// console.log(arr.reverse());








//****================ Array Iteration ====================***** 



// ===============forEach() method===========****

// The forEach() method calls a function (a callback function) once for each array element.

// Note that the function takes 3 arguments:1. value, 2. index, 3. array

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//   console.log(value, index, array);
// }

// arrNumbers.forEach(myFunction);





//  =============Array map() method================****

// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// The map() method returns the new array.

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// When a callback function uses only the value parameter, the index and array parameters can be omitted

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
// //   console.log(value, index, array);
//   return value + 1;
// }

// const newArrNumbers = arrNumbers.map(myFunction);
// console.log(newArrNumbers);






// ==================Array filter() method============****

// The filter() method creates a new array with array elements that pass a test

// এটি ফাংশনের শর্ত অনুসারে মূল অ্যারে থেকে এলিমেন্ট নিয়ে নতুন আরে রিটার্ন করে

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

//  const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
// //   console.log(value, index, array);
//   return  value > 9;
// }

// const newArrNumbers = arrNumbers.filter(myFunction);
// console.log(newArrNumbers);






// ==================Array reduce() method=============****

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method does not reduce the original array.

// The reduce() method reduces the array to a single value.

// এটি array এর  সকল উপাদান কে একত্র করে টোটাল হিসেবে একটা সিঙ্গেল ভ্যালু রিটার্ন করে (এটি যোগ মতো কাজ করে)

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.


// Note that the function takes 4 arguments: 1. The total (the initial value / previously returned value), 2. currentValue, 3. currentIndex, 4. array


// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array) {
//     // console.log(total, value, index, array);
//     // console.log(index);
//   return total + index;
// }

// const newArrNumbers = arrNumbers.reduce(myFunction);
// console.log(newArrNumbers);



// 2.. ইনিশিয়াল(প্রথম টোটাল ভ্যালু) ভ্যালু রিডিউসার এর প্যারামিটার হিসেবে পাস করা যায় //////

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array) {
//     // console.log(total, value, index, array);
//     // console.log(index);
//   return total;
// }

// const newArrNumbers = arrNumbers.reduce(myFunction, 5);
// console.log(newArrNumbers);








// ===============reduceRight() method===================*=******

// The reduceRight() method is similar to reduce(), but reduces the array to a single value from the right side.

// এটা ডান দিক থেকে বাম দিকের দিকে কাজ করে

// it look like reduce() method

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array) {
//     // console.log(total, value, index, array);
//     // console.log(total);
//   return total;
// }

// const newArrNumbers = arrNumbers.reduceRight(myFunction);
// // console.log(newArrNumbers);







// *****================array every() method===============*******

// The every() method checks if all array values pass a test

// The every() method returns true if all elements pass the test, false otherwise.

// এখানে প্রত্যেকটা এলিমেন্ট কে শর্ত অনুসারে চেক করে আউটপুট রিটার্ন করে, আউটপুট হচ্ছে true or false, যদি সমস্ত সংখ্যা হয় ।

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//     // console.log(value, index, array);
//     // console.log(value < 50);
//     // console.log(value > 50);
// //   return value < 50;
// }

// const newArrNumbers = arrNumbers.every(myFunction);
// // console.log(newArrNumbers);







// *****===============array some() method======================*******

// The some() method checks if some array values pass a test

// The some() method returns true if at least one element passes the test, false otherwise.

// কমপক্ষে একটি উপাদান পরীক্ষায় উত্তীর্ণ হলে some() পদ্ধতি true রিটার্ন করে দেখায়, অন্যথায় false রিটার্ন করে দেখায়

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//     // console.log(value, index, array);
//     // console.log(value < 50);
//     // console.log(value > 50);
//     // console.log(value == 45);
// //   return value < 50;
// }

// const newArrNumbers = arrNumbers.some(myFunction);
// // console.log(newArrNumbers);







// ==================Array indexOf() method================*******

// The indexOf() method searches an array for an element value and returns its index position.

// The indexOf() method returns -1 if the value is not found.

// it has two argument: 1...(Required) which is item search and 2...(optional) where the search start {Negative values will start at the given position counting from the end, and search to the end.}

// নেতিবাচক মান প্রদত্ত অবস্থানে শুরু হবে শেষ থেকে গণনা করা হবে এবং শেষ পর্যন্ত অনুসন্ধান করা হবে।

// const arrNumbers = [45, 4, 16, 16, 25, 16];

// console.log(arrNumbers.indexOf(16)); 
// console.log(arrNumbers.indexOf(16, -8)); 







// ===================lastIndexOf() method=============*******

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

// The lastIndexOf() method searches an array for an element value and returns its last index position.

// The lastIndexOf() method returns -1 if the value is not found.

// it has two argument: 1...(Required) which is item search and 2...(optional) where the search start {Negative values will start at the given position counting from the end, and search to the end.}

// // নেতিবাচক মান প্রদত্ত অবস্থানে শুরু হবে শেষ থেকে গণনা করা হবে এবং শেষ পর্যন্ত অনুসন্ধান করা হবে।


// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// // console.log(arrNumbers.lastIndexOf(16)); 

// // console.log(arrNumbers.lastIndexOf(16, -3)); 






// ==============Array includes() method================*******   

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// The includes() method is case-sensitive.

// Array.includes() allows to check for NaN values. Unlike Array.indexOf().

// it return true if the value is found, otherwise returns false

// it has one argument: 1...(Required) which is item search

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// // console.log(arrNumbers.includes(16)); 







//  ==================Array find() method=================****

// The find() method returns the value of the first array element that passes a test function

// The find() method returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// 

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// এটি শর্তের সাথে মিলে যাওয়ার সাথে সাথেই প্রথম উপাদানটা রিটার্ন করে দেয়

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
// //   return value > 5;
// //   return value > 55;
// }

// let newArrNumbers = arrNumbers.find(myFunction);

// // console.log(newArrNumbers);







// ==================Array findIndex() method===================****

//এটি array এর ইনডেক্স নাম্বার রিটার্ন করে

// The findIndex() method returns the index of the first array element that passes a test function

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.

// it return the index of the first element in the array that satisfies 


// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
// //   return value > 55;
// //   return value > 5;
// }

// let newArrNumbers = arrNumbers.findIndex(myFunction);

// // console.log(newArrNumbers);







// =============Array findLast() Method================*******

// এটি শেষের দিক থেকে খোঁজা শুরু করে

// এটি fine() methoad এর মতন কাজ করে

// the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

// the findLast() method returns the value of the last element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
// //   return value > 55;
// //   return value > 5;
// }

// let newArrNumbers = arrNumbers.findLast(myFunction);

// // console.log(newArrNumbers);







// ==============Array findLastIndex() Method============*******

// এটি শেষের দিক থেকে খোঁজা শুরু করে

// এটি fineIndex() methoad এর মতন কাজ করে

// the findLastIndex() method that will start from the end of an array and return the index of the first element that satisfies a condition.

// the findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
// //   return value > 55;
// //   return value > 5;
// }

// let newArrNumbers = arrNumbers.findLastIndex(myFunction);

// // console.log(newArrNumbers);







// ==============Array.from() method===============********

// The Array.from() method returns an Array object from any object with a length property or any iterable object

// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

// The Array.from() method can take any number of arguments, or an array-like object
// Array.from() পদ্ধতি যেকোন সংখ্যক আর্গুমেন্ট বা অ্যারের মত বস্তু নিতে পারে
// এটি একটি নতুন array তৈরি করে, রিটার্ন কর এবং মূল array ke কোন পরিবর্তন করে না

// let nams9 = 'Rufaida';
// // console.log(Array.from(nams9));
// // console.log(nams9);







// ================Array keys() method=============********  

// The keys() method returns a new Array Iterator object that contains the keys for each index in the array

// The keys() method returns an object with a specified array's index as the key and the index as the value.

// এটি এটারেবল অবজেক্ট এর ভিতর ইনডেক্স নাম্বার রিটার্ন করে পরে, যে কোন arrar er, কোন পরিবর্তন করে না

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// // console.log(keys);

// for (let x of keys) {
// //   console.log(x);
// }







// ===============Array entries() method=================********

// Create an Array Iterator, and then iterate over the key/value pairs

// The entries() method does not change the original array.


// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// এটি প্রত্যেকটা এলিমেন্ট এবং এলিমেন্টের ইনডেক্স নাম্বার নিয়ে একত্রে একটি একটি করে রিটার্ন করে

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// // console.log(f);

// for (let x of f) {
// //   console.log(x);
// }







// =================Array with() Method=================********

// The with() method creates a new object with the specified properties.

// Array with() method as a safe way to update elements in an array without altering the original array.

// এটি মূলাকে array কে পরিবর্তন করে না, একটি নতুন array তৈরি করে


// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");

// // console.log(myMonths);
// // console.log(months);








// =================Array Spread (...) Operator============********


// The spread operator (...) can be used to expand an array or an object into multiple values

// The (...) operator expands an iterable (like an array) into more elements

// ডট চিহ্ন তিনটির বেশি দেওয়া যাবে না

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...arr,...q1, ...q2, ...q3, ...q4];

// console.log(year);





//=========JavaScript Array Constant(const)==========

// it is very common practice to declare using const

// Elements can be reassigned

// const একসাথে ডিক্লেয়ার এবং এসাইন করতে হবে

// an array declare with constant has Block Scoop

// আলাদা আলাদা স্কোপের মধ্যে একই কনস্ট ভেরিয়েবল ডিক্লেয়ার করা যাবে





//===========JavaScript Date Objects============

// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// Date objects are created with the new Date() constructor.

// let date = new Date();
// // console.log(date);


// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year

// console.log(new Date(2018, 12, 24, 10, 33, 30, 0));

// Specifying a day higher than max, will not result in an error but add the overflow to the next month

// console.log(new Date(2018, 11, 32, 10, 33, 30, 0));


// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

// One and two digit years will be interpreted (Previous Century)

// console.log(new Date(99, 11, 24));
// console.log(new Date(9, 11, 24));
 
// JavaScript stores dates as number of milliseconds since January 01, 1970.

// One day (24 hours) is 86 400 000 milliseconds.


// new Date(milliseconds) creates a new date object as milliseconds plus zero time
// console.log(new Date(200000000000));


// Zero time is January 01, 1970 00:00:00 UTC.
// console.log(new Date(0));

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

// console.log(new Date());
// console.log((new Date()).toString());


// The toDateString() method converts a date to a more readable format

// console.log((new Date()).toDateString());


// The toUTCString() method converts a date to a string using the UTC standard

// console.log((new Date()).toUTCString());


// The toISOString() method converts a date to a string using the ISO standard

// console.log((new Date()).toISOString());





//=====new Date()=====

// new Date() creates a date object with the current date and time

// console.log(new Date());





// ===========Date Formats===============

// There are generally 3 types of JavaScript date input formats:

// ISO Date	     "2015-03-25" (The International Standard)
// Short Date	 "03/25/2015"
// Long Date	 "Mar 25 2015" or "25 Mar 2015"

// The ISO format follows a strict standard in JavaScript.

// The other formats are not so well defined and might be browser specific.


// ISO 8601 is the international standard for the representation of dates and times.

// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format

// const d = new Date("2015-03-25");

// Date and time is separated with a capital T.

// UTC time is defined with a capital letter Z.

// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

// Omitting T or Z in a date-time string can give different results in different browsers.

// Long dates are most often written with a "MMM DD YYYY" syntax (Example: "Mar 25 2015")

// Short dates are written with an "MM/DD/YYYY" syntax (Example: "03/25/2015")

// month can be written in full (January), or abbreviated (Jan)

// Month and day can be in any order









// ===Time Zones===

// When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.

// When getting a date, without specifying the time zone, the result is converted to the browser's time zone.

// In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.




//=======Date Input - Parsing Dates=========
// f you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

// Date.parse() returns the number of milliseconds between the date and January 1, 1970
// console.log(Date.parse(new Date()));

// You can then use the number of milliseconds to convert it to a date object







// ==============Get Date Methods=============
// Get methods return Local time
// Universal time (UTC) is documented at the bottom of this page.



// getFullYear()	    Get year as a four digit number (yyyy)

// The getFullYear() method returns the year of a date as a four digit number:

// console.log(new Date().getFullYear());
// console.log(new Date().getUTCFullYear());
// console.log(new Date("2021-03-25").getFullYear());
// console.log(new Date("1998-02-25").getUTCFullYear());



//=====================

// getMonth()	        Get month as a number (0-11)
// The getMonth() method returns the month of a date as a number (0-11).


// console.log(new Date().getMonth());
// console.log(new Date().getUTCMonth());
// console.log(new Date("2021-03-25").getMonth());
// console.log(new Date("1998-01-25").getUTCMonth());
// console.log(new Date("1998-02-25").getUTCMonth());


// You can use an array of names to return the month as a name:

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date("2021-06-25");
// let month = months[d.getMonth()];
// // console.log(month);


//=====================

// getDate()	        Get day as a number (1-31)
// The getDate() method returns the day of a date as a number (1-31):

// console.log(new Date().getDate());
// console.log(new Date().getUTCDate());
// console.log(new Date("2021-03-25").getDate());
// console.log(new Date("1998-02-25").getUTCDate());


//============================

// getDay()	            Get weekday as a number (0-6)

// The getDay() method returns the weekday of a date as a number (0-6).

// In JavaScript, the first day of the week (day 0) is Sunday.

// Some countries in the world consider the first day of the week to be Monday


// console.log(new Date().getDay());
// console.log(new Date().getUTCDay());
// console.log(new Date("2021-03-25").getDay());
// console.log(new Date("1998-02-25").getUTCDay());


// You can use an array of names, and getDay() to return weekday as a name

// const days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

// const dy = new Date("2021-03-25");
// let day = days[dy.getDay()];
// console.log(day);




//==============================

// getHours()	        Get hour (0-23)
// The getHours() method returns the hours of a date as a number (0-23):

// console.log(new Date().getHours());
// console.log(new Date().getUTCHours());
// console.log(new Date("2021-03-25").getHours());
// console.log(new Date("1998-02-25").getUTCHours());




//==============================

// getMinutes()	        Get minute (0-59)
// The getMinutes() method returns the minutes of a date as a number (0-59):

// console.log(new Date().getMinutes());
// console.log(new Date().getUTCMinutes());
// console.log(new Date("2021-03-25").getMinutes());
// console.log(new Date("1998-02-25").getUTCMinutes());




//==================================

// getSeconds()	        Get second (0-59)
// The getSeconds() method returns the seconds of a date as a number (0-59):

// console.log(new Date().getSeconds());
// console.log(new Date().getUTCSeconds());
// console.log(new Date("2021-03-25").getSeconds());
// console.log(new Date("1998-02-25").getUTCSeconds());




//==================================

// getMilliseconds()	Get millisecond (0-999)
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

// console.log(new Date().getMilliseconds());
// console.log(new Date().getUTCMilliseconds());
// console.log(new Date("2021-03-25").getMilliseconds());
// console.log(new Date("1998-02-25").getUTCMilliseconds());




//===============================

// getTime()	        Get time (milliseconds since January 1, 1970)
// The getTime() method returns the number of milliseconds since January 1, 1970

// console.log(new Date().getTime());
// console.log(new Date("2021-03-25").getTime());



//===============================

// Date.now() Method   ===
// The syntax is always Date.now().

// console.log(Date.now());


// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / year);
// console.log(years);



//===================
// getTimezoneOffset() Method===
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time

// console.log(new Date().getTimezoneOffset());



//========================================
//============UTC Date Get Methods============

// getUTCDate()	           getDate()	        Returns the UTC date
// getUTCFullYear()	       getFullYear()	    Returns the UTC year
// getUTCMonth()	       getMonth()	        Returns the UTC month
// getUTCDay()	           getDay()	            Returns the UTC day
// getUTCHours()	       getHours()	        Returns the UTC hour
// getUTCMinutes()	       getMinutes()	        Returns the UTC minutes
// getUTCSeconds()	       getSeconds()	        Returns the UTC seconds
// getUTCMilliseconds()	   getMilliseconds()	Returns the UTC milliseconds

//====================================================





// ===============================Set Date Methods=====================================

// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object

//=====================================================

// setDate()	        Set the day as a number (1-31) 

// The setDate() method sets the day of a date object (1-31)

// const day = new Date();
// day.setDate(15);
// // console.log(day);

// // console.log(new Date(new Date().setDate(11)));



//>>>The setDate() method can also be used to add days to a date
// const d = new Date();

// // console.log(d.getDate());
// // console.log(d.getDate() + 50);
// // console.log(d.setDate(d.getDate() + 50));

// d.setDate(d.getDate() + 50);
// // console.log(d);




//============================================================

// setFullYear()	    Set the year (optionally month and day)
// The setFullYear() method sets the year of a date object


// console.log( new Date(new Date().setFullYear(2020))); OR

// const d = new Date();
// d.setFullYear(2020);
// // console.log(d);

// const date = new Date();
// date.setFullYear(2020, 8, 3);
// // console.log(date);




// ========================================================

// setHours()	        Set the hour (0-23)
// The setHours() method sets the hours of a date object (0-23)

// const h = new Date();
// h.setHours(8);
// // console.log(h);

// console.log(new Date(new Date().setHours(11)));
// console.log(new Date(new Date().setHours(11, 11, 11)));




//============================================================

// setMilliseconds()	Set the milliseconds (0-999)

// console.log(new Date().setMilliseconds(15));

// console.log(new Date().setTime(Date.now()));



//================================================================

// setMinutes()	        Set the minutes (0-59)
// The setMinutes() method sets the minutes of a date object (0-59)

// const m = new Date();
// m.setMinutes(20)
// // console.log(m);

// console.log(new Date(new Date().setMinutes(11)));
// console.log(new Date(new Date().setMinutes(11, 11)));




//==============================================================

// setMonth()	        Set the month (0-11)
// The setMonth() method sets the month of a date object (0-11)
// const month = new Date();
// month.setMonth(10);
// // console.log(month);

// // console.log(new Date(new Date().setMonth(1)));





//=============================================================

// setSeconds()	        Set the seconds (0-59)
// The setSeconds() method sets the seconds of a date object (0-59)

// const s = new Date();
// s.setSeconds(25);
// // console.log(s);

// console.log(new Date(new Date().setSeconds(11)));





//===============================================

// setTime()	        Set the time (milliseconds since January 1, 1970)

// console.log(new Date().setTime(Date.now()));





//=============new Date(date string)======================

// new Date(date string) creates a date object from a date string

// console.log(new Date("October 13, 2014 11:13:00"));

// console.log(new Date("1998-02-25"));

