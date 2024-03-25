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

/* **********************

// *******String Methods*********

let fullName = 'Khan Muhammad Sohel Khan';

console.log(fullName);

console.log(fullName.slice( 0, 4) );

console.log(fullName.substring(4, 13));


// substr() Method is Deprecated-BAD //
console.log(fullName.substr(13, 5)); 

// replace() Method case-sensitive
console.log(fullName.replace('Khan', ''));


// With regular expression [/replace text/i] replace() Method insensitive
console.log(fullName.replace(/KHAN/i, ''));

// With regular expression [/replace text/g] or [/replace text/ig] replace all matches
console.log(fullName.replace(/KHAN/gi, ''));

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


// concating

let a = 'Sohel';
let b = 'Sathi';

console.log(a + ' ' + b);
console.log(a.concat(' ', b)); // two strings concating


// **Strings are immutable: Strings cannot be changed, only replaced.**

let c = 'sohel';
console.log(c);
c = 'sami';
console.log(c);

// trim() method removes whitespace from both ends of a string

let d = '      sami       ';
console.log(d.trim());

console.log(c.padStart(10, ' ')); // padStart() method adds padding to the start of a string
console.log(c.padEnd(8, '0')); // padEnd() method adds padding to the end of a string



var n = 'Muhammad sajid';
console.log(n.charAt(11)); // charAt() method returns the character at the specified index(position) in a string

console.log(typeof n.charAt(44)); // returns an empty string

console.log(n[6]); // bracket operator can also be used to access characters in a string

console.log(n[77]); // returns undefined

console.log(typeof n[77]); // type of Undefined

console.log(typeof (typeof n[77])); // type of String

*************************** */


/* ************************

// ****String seaech Methods******

let fName = 'Rufaida Binte Sohel, binte';

console.log(fName.indexOf('Binte')); // indexOf() method searches a string for a specified value and returns its position

console.log(fName.indexOf('Sohel', 8)); 
 
console.log(fName.indexOf('Sohel', 20)); // returns -1 if the value is not found


console.log(fName.lastIndexOf('Sohel')); // lastIndexOf() method searches a string for a specified value and returns its position

console.log(fName.lastIndexOf('Binte', 8)); //??????????????


console.log(fName.search('Sohel')); // search() method searches a string for a specified value and returns the position of the match

console.log(fName.search(/binte/g)); 

console.log(fName.search(/binte/i));


console.log(fName.match('Sohel')); // ম্যাচ() পদ্ধতি একটি স্ট্রিং এর বিপরীতে একটি স্ট্রিং মেলানোর ফলাফল ধারণকারী একটি অ্যারে প্রদান করে ...match() will return only the first match in the string.

console.log(fName.match('sohel')); // returns null, if the value is not found

console.log(fName.match(/binte/i)); // If you want to search case insensitive, the insensitive flag (i) must be set

console.log(fName.match(/Binte/ig)); //  the global flag (g)


console.log(fName.matchAll('binte')); // matchAll() method searches a string for all occurrences of a specified value and returns an iterator object with all results

console.log(Array.from(fName.matchAll('binte'))); // returns an iterator object

console.log(fName.matchAll(/binte/gi)); // the global flag (g) and insensitive flag (i) must be set

console.log(Array.from(fName.matchAll(/binte/gi)));

console.log(fName.includes('binte')); // includes() method returns true if a string contains a specified value, otherwise it returns false

console.log(fName.includes('Rufaida', 10)); // returns true if the value is found, otherwise returns false

*************** */


//Numbers**********


/* ************

let a = 10;
let b = 20;
let c = '5';
let d = '2.5';

console.log(a + b);

console.log(a + c);
console.log(a / c);
console.log(a * c);
console.log((a - c));

console.log(a + d);
console.log(c / d);
console.log(c * d);
console.log((c - d));

console.log(typeof (NaN));

// toString() Method

let num = 10;
console.log(typeof num);

let num2 = num.toString(); // JavaScript automatically converts an array to a comma separated string when a primitive value is expected 
console.log(typeof num2);

// toFixed() Method (Dosomiker pore koiti okkhor bosbe ta nirdaron kore)

let z = 1000;

console.log(z.toFixed(2)); 


// toPrecision() Method (ekti sonkhar total length nirdaron kore)

let num6 = 100.3436457463;
console.log((num6.toPrecision(6)));



// parseInt() Method *******

console.log((parseInt('5.6789'))); // parseInt() method parses a string to Number and returns an integer

console.log(parseInt(5.9789)); // eti sodu dosomiker ager sonkha return kore.


// parseFloat() Method

console.log(parseFloat("4.8ghfg")); // parseFloat() method parses a string to a number and returns a floating-point number 


******************* */


// Arrays***********

const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

console.log(arr);

// document.querySelector('#demo').innerHTML = arr.reverse();

// console.log(typeof arr);

// console.log(arr[0]); // first element access

//  let arr2 = arr.length - 1;
// console.log(arr[arr2]); // last element access

// arr.push(55); // push() method adds one or more elements to the end of an array and returns the new length of the array

// arr[arr.length] = 77; 

// arr[13] = 88; // Adding elements with high indexes can create undefined "holes" in an array:

//In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.

// console.log(Array.isArray(arr)); // Array.isArray() পদ্ধতি নির্ধারণ করে যে একটি বস্তু একটি অ্যারে কিনা

// console.log(arr instanceof Array); // instanceof পদ্ধতি নির্ধারণ করে যে একটি বস্তু একটি অ্যারে কিনা



//******Array Methods ****** 

// Array to String******

// console.log(arr.toString()); // toString() method converts an array to a string of (comma separated) array values. 
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected

// All JavaScript objects have a toString() method.

// console.log(arr.join(' - ')); // The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:

// let removed = arr.pop(); // pop() method removes the last element from an array and returns that element.
// console.log(removed);

// console.log(arr.shift()); // The shift() method removes the first array element and "shifts" all other elements to a lower index and returns that removed element.

// console.log(arr.push(99)); // push() method adds one or more elements to the end of an array and returns the new length of the array

// console.log(arr.unshift(11)); // unshift() method adds one or more elements to the beginning of an array and "shifts" all other elements to a higher index and returns the new length of the array

// arr[12] = 15;  // Array elements are accessed using their index number and change the value of that element.

// console.log(delete arr[3]); // delete operator is used to remove the element from an array using index number or property name ???????????


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


// toSpliced() method removes elements from an array and or adds new elements in place of removed elements. It returns an new array containing with the new elements. array toSpliced() পদ্ধতিটি মূল অ্যারে পরিবর্তন না করে একটি অ্যারেকে বিভক্ত করার একটি নিরাপদ উপায় হিসাবে।

// console.log(arr.toSpliced(2, 4, 'sohel', 'sathi')); // removed and added new elements

// console.log(arr.toSpliced(2, 0, 'sohel', 'sathi')); // only added new elements 

// ****Arrays concating******

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


//***** Array Slicing******

// console.log(arr.slice(2, 6)); 
// The slice() method slices out a piece of an array into a new array

// The slice() method creates a new array. It return sliced part of the array without ending index element.

// The slice() method does not remove any elements from the source array.

// The slice() method takes two parameters: 1. the first one is the index at which to begin the slice, 2. the second one is the index at which to end the slice.

// If the 2nd parameter is omitted, the slice() method slices out the rest of the array.



// ****Array at() method *****

// console.log(arr.at(3)); 

// Array at() method returns the element at the specified index

// The at() method returns the same as [].

// The at() method takes one parameter: the index of the element to return.


// ********Array flat() method ***
 const newArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// console.log(newArr.flat()); 

// Array flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// অ্যারে ফ্ল্যাট() পদ্ধতি একটি নতুন অ্যারে প্রদান করে যার মধ্যে নির্দিষ্ট  অ্যারে সমস্ত সাব-অ্যারে উপাদান রয়েছে।



// *******Array copyWithin() method *********

// Array copyWithin() method copies array elements within the array. copyWithin() পদ্ধতি অ্যারের উপাদানকে একটি অ্যারের অন্য অবস্থানে অনুলিপি করে

// The copyWithin() method overwrites the existing values. returns the modified array.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

// target jodi array er length teke boro hoy tahole copy hobe na.

// The copyWithin() method takes three parameters: 1. target, 2. start, and 3. end.

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Avocado"];

// console.log(fruits.copyWithin(6, 0));; 




console.log(arr); 
 
