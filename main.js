// "use strict";


/////////////////////////////////////////

// JS default behaviour is synchronous, which means that the code runs line by line. But JS default behaviour can be changed to Asynchronous behaviour, In asynchronous way, it will run in parallel.

///////////////////////////////////////////


// a = 3;
// var a;
// console.log(a);




// let x;
// x = 3;
// // let x;
// console.log(x);



// // const a = 2;
// // const a;
// // a = 4;
// console.log(a);


// const friNames = ["Ahmed", "Osama", "Sayed"];
// console.log(friNames);

// friNames[1] = "sohel";
// console.log(friNames);

// friNames.push('sathi')
// console.log(friNames);





// const about ={
//     name: "Ahmed",
//     age: 23,
//     job: "Developer" 
// }
// console.log(about);

// about.age = 24;
// console.log(about);

// about['name'] = "sami";
// console.log(about);


// অবজেক্টের যদি কোন প্রপার্টির মান চেঞ্জ করতে চাই, আর সেখানে যদি প্রপার্টি টা না পাওয়া যায়, তাহলে সেটি নতুন প্রপার্টি হিসেবে Add করে দেওয়া হয়
// about.possition = "web developer";
// console.log(about);





// const a = 5;
// let b = 7;
// // let b = 8;

// {
//     const a = 4;
//     console.log(a);
//     let b = 8;
//     console.log(b);
// }
// console.log(a);




// const person = {
//     name: "Ahmed",
//     age: 23,
//     job: "Developer",   
//     fullName: function(){
//         console.log(this); //this define full person object
//         console.log(this.name, this.age);
//         console.log(person.name, person.age);
//     }
// }

// person.fullName();





// ****==================***String Methods****==========================*****


// let fullName = 'Khan Muhammad Sohel khan';

// console.log(fullName);
//
// console.log(fullName.slice(0, 5)); // The slice() method returns the extracted part in a new string || Return Value: A string containing the extracted characters
// console.log(fullName);


// console.log(fullName.substring(0, 5)); // The substring() method extracts characters from start to end (exclusive) || Return Value: The extracted part of the string
// console.log(fullName);


// substr() Method is Deprecated-BAD //
// console.log(fullName.substr(13, 5)); 


// // replace() Method case-sensitive
// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.
// By default  replace method change the first match
// console.log(fullName.replace('khan', ''));
// console.log(fullName);


// // With regular expression [/replace text/i] replace() Method insensitive
// console.log(fullName.replace(/KHAN/i, ''));

// // With regular expression [/replace text/g] or [/replace text/ig] replace all matches
// console.log(fullName.replace(/KHAN/gi, ''));

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());





// // =========Concat() Method=====================
// concat means connected between or among

// The concat() method creates a new array by merging (concatenating) existing arrays

// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number, arrays, Objects or primitive values of array arguments.

// const arr6 = [1, 2, 3, 4, 5];
// const arr7 = [6, 7, 8, 9, 10];
// const arr8 = [11, 12, 13, 14, 15];

// let nam = 'sohel';
// let nam2 = 'sathi';
// let nam3 = 'rufaida';

// const obj = { name : 'sohel' , age : 23};

// console.log(arr6.concat(arr7, arr8, obj));

// console.log(nam.concat(' ', nam2, ' ', nam3), ...arr6, ...arr7, arr8, obj);


// let items = (nam.concat(' ', nam2, ' ', nam3), arr6, arr7, arr8, obj)

// console.log(typeof items);


//==================
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

// let d = '      sami       ';
// console.log(d.trim()); // trim() method removes whitespace from both ends of a string

// console.log(d.trimStart()); //  trimStart() method removes whitespace from the beginning of a string

// console.log(d.trimEnd()); // trimEnd() method removes whitespace from the end of a string.






// // ============padStart() and padEnd() Method==================

// padStart() and padEnd() Method are a string method.
// To pad a number, convert the number to a string first.(toString())

// let c = "5";
// console.log(c.padStart(10, ' ')); // padStart() method adds padding to the start of a string
// console.log(c.padStart(10, '0')); // padStart() method adds padding to the start of a string


// console.log(c.padEnd(8, '0')); // padEnd() method adds padding to the end of a string
// console.log(c.padEnd(8, ' ')); // padEnd() method adds padding to the end of a string





// // ===============charAt() Method================
// var n = 'Muhammad sajid';

// console.log(n.charAt(11)); // charAt() method returns the character at the specified index(position) in a string
// console.log(n.charAt(11.5)); // charAt() method returns the character at the specified index(position) in a string

// console.log(n.at(12)); // at() method returns the character at the specified index(position) in a string
// console.log(n.at(12.9)); // at() method returns the character at the specified index(position) in a string

// console.log(n.charAt(77)); // returns an empty string
// console.log(typeof(n.charAt(77))); // returns string

// console.log(n.at(77)); // returns an undefined string
// console.log(typeof (n.at(77))); // returns an undefined 

// console.log(n[11]); // bracket operator can also be used to access characters in a string

// console.log(n[77]); // returns undefined

// console.log(typeof n[77]); // type of Undefined

// console.log(typeof (typeof n[77])); // type of String









// ****=====================String seaech Methods========================******


// ===============indexOf() method==================
// The indexOf() method is case sensitive.

// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.indexOf('n')); // indexOf() method searches a string for a specified value and returns its position

// console.log(fName.indexOf('S', 8));  // প্রথম প্যারামিটার হচ্ছে আমি কি অনুসন্ধান করছি দ্বিতীয় প্যারামিটার হচ্ছে কোথা থেকে বা কততম ইনডেক্সে অনুসন্ধান শুরু হবে
 
// console.log(fName.indexOf('S', 15)); // returns -1 if the value is not found




// =============== lastIndexOf() method==================

//এটা ইনডেক্স অফ এর মতনই কাজ করে কিন্তু পার্থক্য আছে শুধু শেষের দিক দিয়ে খোঁজা শুরু করে

// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.lastIndexOf('S')); // lastIndexOf() method searches a string for a specified value and returns its position

// console.log(fName.lastIndexOf('B', 9)); 
// console.log(fName.lastIndexOf('B', 7)); // returns -1 if the value is not found



// =============== search() method==================


// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.search('S')); // search() method searches a string for a specified value and returns the position of the first match

// console.log(fName.search(/b/g)); 
// console.log(fName.search(/b/i));
// console.log(fName.search(/i/ig));



// =============== match() method==================
// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.match('Sohel')); // ম্যাচ() পদ্ধতি একটি স্ট্রিং এর বিপরীতে একটি স্ট্রিং মেলানোর ফলাফল ধারণকারী একটি অ্যারে প্রদান করে ...match() will return only the first match in the string.

// console.log(fName.match('sohel')); // returns null, if the value is not found

// console.log(fName.match(/binte/i)); // If you want to search case insensitive, the insensitive flag (i) must be set

// console.log(fName.match(/Binte/ig)); //  the global flag (g)





// =============== matchAll() method==================
// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.matchAll('binte')); // matchAll() method searches a string for all occurrences of a specified value and returns an iterator object with all results

// console.log(Array.from(fName.matchAll('binte'))); // returns an  Array with all results

// console.log(fName.matchAll(/binte/gi)); // the global flag (g) and insensitive flag (i) must be set

// console.log(Array.from(fName.matchAll(/binte/gi))); // the global flag (g) and insensitive flag (i) must be set



// =============== from() method==================
// let fName = 'Rufaida Binte Sohel, binte';

// console.log(Array.from(fName.matchAll(/binte/gi)));





// =============== includes() method(string)==================
// The includes() method is case sensitive.
// এটা দুইটা প্যারামিটার থাকে প্রথমটা হচ্ছে কি অনুসন্ধান করছি এবং দ্বিতীয়টা হচ্ছে ইনডেক্স নাম্বার যে ইন্ডেস থেকে অনুসন্ধান করা শুরু হবে( Default value is 0)

// let fName = 'Rufaida Binte Sohel, binte';

// console.log(fName.includes('b')); // includes() method returns true if a string contains a specified value, otherwise it returns false

// The position to start from. Default value is 0

// console.log(fName.includes('S', 5)); // returns true if the value is found, otherwise returns false

// console.log(fName.includes('R', 3)); // returns true if the value is found, otherwise returns false










//**********==========================Numbers=====================**********

// let a = 10;
// let c = '5';

// console.log(a + c); // return 105
// console.log(a + +c); // return 15
// console.log(a + Number(c)); // return 15
// console.log(a / c);
// console.log(a * c);
// console.log((a - c));

// console.log(typeof (NaN));




//============== toString() Method================
// The toString() method returns a string as a string.
// The toString() method does not change the original string

// let num = 10;
// console.log(typeof num);

// let num2 = num.toString(); // JavaScript automatically converts an array to a comma separated string when a primitive value is expected 
// console.log(typeof num2);



//============== toFixed() Method================

// // toFixed() Method (Dosomiker pore koiti okkhor bosbe ta nirdaron kore)

// let z = 1000;

// console.log(z.toFixed(2)); 




//============== toPrecision() Method================

// // toPrecision() Method (ekti sonkhar total length nirdaron kore)[দশমিকের আগে ও পরে সহ]

// toPrecision() argument must be between 1 and 100

// let num6 = 1000000; // Return 100000
// let num6 = 100.3436457463;
// console.log((num6.toPrecision(6)));





// ===============parseInt() Method============
// The parseInt method parses a value as a string and returns the first integer.

// If the first character cannot be converted, NaN is returned.

// Only the first integer found is returned

// it has two parameters: 1.(Required) The value to be parsed and 2.(Optional[Default is 10]) A number (2 to 36) specifying the number system

// The second parameter is the radix (base) of the number. It is optional. If not specified, JavaScript assumes the base is 10.

// console.log((parseInt('5.6789'))); // parseInt() method parses a string to Number and returns an integer

// console.log(parseInt(5.9789)); // eti sodu dosomiker ager sonkha return kore.





// ===============parseFloat() Method============
// The parseFloat() method parses a value as a string and returns the first number(Only Number).

// If the first character cannot be converted, NaN is returned.

// Only the first number found is returned

// Parameters: (Required) The value to parse.

// console.log(parseFloat("45.8ghfg")); // parseFloat() method parses a string to a number and returns a floating-point number 








// *****************==================Arrays==============================***********

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr);

// document.querySelector('#demo').innerHTML = arr.reverse();

// console.log(typeof arr);

// console.log(arr[0]); // first element access

//  let arr2 = arr.length - 1;
// console.log(arr[arr2]); // last element access



//******=====================Array Methods=========================== ****** 


//============push() method================
// push() method adds one or more elements to the end of an array and returns the new length of the array

// The push() method adds new items to the end of an array.

// The push() method changes the length of the array.

// The push() method returns the new length.


//In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

// Arrays are a special kind of objects, with numbered indexes.

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// arr.push(55); 

// console.log(arr.push(99)); // return new length

// arr[arr.length] = 77; 

// arr[13] = 88; // Adding elements with high indexes can create undefined "holes" in an array:

// console.log(arr);
// console.log(arr[12]);





//===================Array.isArray() ==================

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];


// console.log(Array.isArray(arr)); // Array.isArray() পদ্ধতি নির্ধারণ করে যে একটি বস্তু একটি অ্যারে কিনা

// console.log(arr instanceof Array); // instanceof পদ্ধতি নির্ধারণ করে যে একটি বস্তু একটি অ্যারে কিনা






// ==================toString()=========================
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected

// All JavaScript objects have a toString() method.


// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.toString()); // toString() method converts an array to a string of (comma separated) array values. 

// console.log(typeof arr.toString()); // type string





//===================== join() method =====================
// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];


// console.log(arr.join()); 
// console.log(arr.join(' ')); 
// console.log(arr.join(' - ')); 




//=============pop() method======================
// pop() method removes the last element from an array and returns that element.

// The pop() method changes the original array.

// The pop() method returns the removed element.

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.pop());
// console.log(arr);






//=============shift() method======================
// The shift() method removes the first array element and "shifts" all other elements to a lower index and returns that removed element.

// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.shift()); 
// console.log(arr);






// =================unshift() method================
// unshift() method adds one or more elements to the beginning of an array and "shifts" all other elements to a higher index and returns the new length of the array

// The unshift() method overwrites the original array.

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.unshift(11)); 

// arr[8] = 15;  // Array elements are accessed using their index number and change the value of that element.

// arr[12] = 15;  // Array elements are accessed using their index number and change the value of that element.

// arr[15] = 15;  // Array elements are accessed using their index number and change the value of that element.

// console.log(arr);





// ==================delete operator=================
// delete operator is used to remove the element from an array using index number or property name

// এটি মূলকে পরিবর্তন করে

// Using delete() leaves undefined holes in the array.

// The delete operator deletes both the value of the property and the property itself.


// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];
// const obj = { name : "sohel" , age : 23};

// console.log(delete arr[0]); 
// console.log(delete obj.name); 
// // console.log(delete obj.job); // property not found 

// console.log(arr);
// console.log(obj);




// =================splice() method================

// ****splice has 3 parameters**** 
// 1. The first parameter defines the position where new elements should be added (spliced in).
// 2. The second parameter defines how many elements should be removed.
// 3. The rest of the parameters define the new elements to be added.

// The splice() method returns an array with the deleted items:

// splice() method removes elements from an array and or adds new elements in place of removed elements. It returns an array containing the deleted elements.

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr); 

// console.log(arr.splice(2, 2)); // only removed elements, return removed elements array

// console.log(arr.splice(2, 2 , 'sohel', 'sathi')); // removed and added new elements

// console.log(arr.splice(2, 2 , [2, 3, 6])); // removed and added new elements

// console.log(arr.splice(arr.length, 0 , [2, 3, 6])); // only added new elements

// console.log(arr.splice(0, 0 , 'sohel', 'sathi')); // only added new elements 

// console.log(arr);





// ================toSpliced() method================

// toSpliced() method removes elements from an array and or adds new elements in place of removed elements. It returns an new array containing with the new elements. 

// array toSpliced() পদ্ধতিটি মূল অ্যারে পরিবর্তন করে না।

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.toSpliced(2, 4, 'sohel', 'sathi')); // removed and added new elements{returns an new array containing with the new elements.}

// console.log(arr.toSpliced(2, 0, 'sohel', 'sathi')); // only added new elements {returns an new array containing with the new elements.}

// console.log(arr);







// ****=================Arrays concating(onject, string)================******

// The concat() method creates a new array by merging (concatenating) existing arrays

// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number, arrays, Objects or primitive values of array arguments.

// const arr6 = [1, 2, 3, 4, 5];
// const arr7 = [6, 7, 8, 9, 10];
// const arr8 = [11, 12, 13, 14, 15];

// let nam = 'sohel';
// let nam2 = 'sathi';
// let nam3 = 'rufaida';

// const obj = { name : 'sohel' , age : 23};

// console.log(arr6.concat(arr7, arr8, obj));

// console.log(nam.concat(' ', nam2, ' ', nam3), ...arr6, ...arr7, arr8, obj);


// let items = (nam.concat(' ', nam2, ' ', nam3), arr6, arr7, arr8, obj)

// console.log(typeof items);








//***** =============Array Slicing===============******
// The slice() method slices out a piece of an array into a new array

// The slice() method creates a new array. It return sliced part of the array without ending index element.

// The slice() method does not remove any elements from the source array.

// The slice() method takes two parameters: 1. the first one is the index at which to begin the slice, 2. the second one is the index at which to end the slice.

// If the 2nd parameter is omitted, the slice() method slices out the rest of the array.

// দ্বিতীয় প্যারামিটারের যে ইনভেক্সটা আছে ওটার এলিমেন্ট বাদ দিয়ে বাকিগুলা রিটার্ন করে

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.slice(2, 6)); // 3, 4, "5", 6
// console.log(arr);







//==================Array at() method==================== 

// Array at() method returns the element at the specified index

// The at() method returns the same as [].

// The at() method takes one parameter: the index of the element to return.


// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.at(3)); 
// console.log(arr[3]);






// ===========Array flat() method====================

// Array flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// অ্যারে ফ্ল্যাট() পদ্ধতি একটি নতুন অ্যারে প্রদান করে যার মধ্যে নির্দিষ্ট  অ্যারে সমস্ত সাব-অ্যারে উপাদান রয়েছে।

// It work like concating.

//  const newArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// console.log(newArr.flat()); 






// ===============Array copyWithin() method ===============

// Array copyWithin() method copies array elements within the array. (copyWithin() পদ্ধতি অ্যারের উপাদানকে একটি অ্যারের অন্য অবস্থানে অনুলিপি করে)

// The copyWithin() method copies array elements to another position in an array.

// The copyWithin() method overwrites the existing values. returns the modified array.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

// target jodi array er length teke boro hoy tahole copy hobe na.

// The copyWithin() method takes three parameters: 1. target index(it is replaced by copy elements), 2. start index(কত তম ইনডেক্স থেকে কপি শুরু হবে), and 3. end index(কত তম ইনডেক্সে কপি শেষ হবে).

// কপিকৃত এলিমেন্ট ও রেস্ট(বাকি) এলিমেন্ট এর length যদি মূল এলিমেন্ট এর length থেকে বড় হয়, তাহলে কপিকৃত এলিমেন্ট থেকে এলিমেন্ট বাদ পরবে (শেষের দিক থেকে)

// By Default, Starting index is 0 and ending index is array length - 1.

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Avocado"];


// console.log(fruits[1]);
// console.log(fruits[3]);
// console.log(fruits[2]);
// console.log(fruits.copyWithin(6, 0));; 

// console.log(fruits.copyWithin(1, 0));;  // console.log(fruits.copyWithin(1));; 

// console.log(fruits.copyWithin(3, 2, 3));; 

// console.log(fruits.copyWithin(3, 2, 4));; 

// console.log(fruits.copyWithin(2, 1, 3));; 










// ==============Array sort() method ===================

// By default, the sort() function sorts values as strings.

// The sort() method sorts an array alphabetically

// jodi kono element er first letter capital hoy tahole otai age bosbe

// by default প্রথম অক্ষর বা বর্ণনা অনুযায়ী sort করে

// const nams = ['sohel', 'sathi', 'rufaida', 'masum', 'osman'];

// console.log(nams.sort());




// ===============Numeric Sorting==============*********
// by default প্রথম অক্ষর বা বর্ণনা অনুযায়ী sort করে

// const newNum = [23, 53, 3, 46, 4, 1, 45]

// console.log(newNum.sort(function(a, b){return a - b}));

// console.log(newNum.sort()); // নাম্বারের ক্ষেত্রে ভুল sorting



// =================Sorting an Array in Random Order============

// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function(){return .3 - Math.random()}); // রিটার্নের ভিতর দশমিকের পরের মান যত বেশি হবে, তত তাড়াতাড়ি এলোমেলো সর্টিং হবে 
// console.log(points);





// =============Array reverse() method ====================

// The reverse() method reverses the elements in an array

// মূল Array বিপরীতভাবে সাজানো

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse()); // মূল Array বিপরীতভাবে সাজানো

// console.log(fruits.sort().reverse()); // মূল ARRAY শর্ট করে বিপরীতভাবে সাজানো --->> By combining sort() and reverse(), you can sort an array in descending order:







// ==============Find the Lowest (or Highest) Array Value================ ??

// Sort the array and read the first or last element using Math.min() or Math.max()

// Array টি যদি এলোমেলো হয়, তাহলে প্রথমে sort করে সাজিয়ে নিতে হবে

// null represent 0

// const arr = [null, 1, 2, 3, 4, "5", 6, 7, 8, 9, "10"]; 
// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(Math.max.apply(null, arr)); // Old way
// console.log(Math.min.apply(null, arr)); // Old way

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));







// ===========================Sorting Object Arrays==================********

// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// sorti by year(numerically)
// cars.sort(function(a, b){return a.year - b.year});
// cars.sort(function(a, b){return b.year - a.year});
// console.log(cars);


// string properties in alphabetical order sorting???????





// *******================Array toSorted() Method ==================*****

// the toSorted() method as a safe way to sort an array without altering the original array.

// toSorted() এবং sort() এর মধ্যে পার্থক্য হল যে toSorted() পদ্ধতিটি মূল অ্যারেটিকে অপরিবর্তিত রেখে একটি নতুন অ্যারে তৈরি করে, যখন sort() পদ্ধতিটি মূল অ্যারেটিকে পরিবর্তন করে।

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.toSorted());
// console.log(arr.sort());







// =====================Array toReversed() Method ==================*****

// the toReversed() method as a safe way to reverse an array without altering the original array.

// toReversed() এবং reverse() এর মধ্যে পার্থক্য হল যে toReversed() পদ্ধতিটি একটি নতুন অ্যারে তৈরি করে, মূল অ্যারেটিকে অপরিবর্তিত রেখে, যখন reverse() পদ্ধতিটি মূল অ্যারেটিকে পরিবর্তন করে।

// const arr = [1, 2, 3, 4, "5", 6, 7, 8, 9, "10"];

// console.log(arr.toReversed());
// console.log(arr.reverse());








//****================ Array Iteration ====================***** 


// ===============forEach() method===========****
// যদি কোন Array er প্রত্যেকটা এলিমেন্টের এক্সেস পেতে চাই, তাহলে forEach() মেথড ব্যবহার করতে হবে

// Syntax: array.forEach(function(currentValue, index, arr), thisValue)

// The forEach() method calls a function (a callback function) once for each array element.

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// Note that the function takes 3 arguments:1. value(currentValue), 2. index, 3. array

// const arrNumbers = [45, 4, 9, 16, 25];
// let values = 0;
// function myFunction(value, index, array) {
// //   console.log(value, index, array);
// //   console.log(value < 50);
// //   console.log(value > 50);
// //   console.log(value + 50);
// //   console.log(value - 50);
// //   console.log(value * 5);
// //   console.log(value / 5);
// //   console.log(value % 5);
//      values = values + value;
    
// }

// arrNumbers.forEach(myFunction);
// // console.log(values);





//  =============Array map() method================****
// শর্ত অনুসারে যদি Array থেকে নতুন Array তৈরি করতে হয়, তাহলে Array map() method ইউজ করতে হবে || এছাড়া যদি কোন Array er প্রত্যেকটা এলিমেন্টের এক্সেস পেতে চাই, তাহলে Array map() মেথড ব্যবহার করতে হবে


// The map() method creates a new array by performing a function on each array element.

//map() creates a new array from calling a function for every array element.


// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// The map() method returns the new array.

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// When a callback function uses only the value parameter, the index and array parameters can be omitted

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
// //   console.log(value, index, array);
// //   return value > 1;
// //   return value + 1;
//   return value ;
// }

// const newArrNumbers = arrNumbers.map(myFunction);
// console.log(newArrNumbers);






// ==================Array filter() method============****
// মূল Array থেকে শর্ত অনুসারে ফিল্টারিং এর মাধ্যমে নির্দিষ্ট কিছু মান রিটার্ন করে

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

//  const arrNumbers2 = [45, 4, 9, 16, 25];

// function myFunction2(value, index, array) {
// //   console.log(value, index, array);
//   return  value < 10;
// //   return  value > 10;
// }

// const newArrNumbers2 = arrNumbers2.filter(myFunction2);
// console.log(newArrNumbers2);






// ==================Array reduce() method=============****

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method does not reduce the original array.

// The reduce() method reduces the array to a single value.

// এটি array এর  সকল উপাদান কে একত্র করে টোটাল হিসেবে একটা সিঙ্গেল ভ্যালু রিটার্ন করে (এটি যোগ মতো কাজ করে)

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Note that the function takes 4 arguments: 1. The total (the initial value / previously returned value), 2. currentValue, 3. currentIndex, 4. array


// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array) {
//     console.log(total, value, index, array);
//     // console.log(index);
//   return total + value;
// //   return total + index;
// }

// const newArrNumbers = arrNumbers.reduce(myFunction);
// console.log(newArrNumbers);



// 2.. ইনিশিয়াল(প্রথম টোটাল ভ্যালু) ভ্যালু রিডিউসার এর প্যারামিটার হিসেবে পাস করা যায় //////

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array) {
//     console.log(total, value, index, array);
//     // console.log(index);
//     //  return total + value;
// }

// const newArrNumbers = arrNumbers.reduce(myFunction, 5);
// // console.log(newArrNumbers);








// ===============reduceRight() method===================*=******

// The reduceRight() method is similar to reduce(), but reduces the array to a single value from the right side.

// Kintu এটা ডান দিক থেকে বাম দিকে কাজ করে

// It Work look like reduce() method

// const arrNumbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array) {
//     // console.log(total, value, index, array);
//     // console.log(total);
// //   return total;
//   return total + value;
// }

// // const newArrNumbers = arrNumbers.reduceRight(myFunction);

// // const newArrNumbers = arrNumbers.reduceRight(myFunction, 3);
// // console.log(newArrNumbers);







// *****================array every() method===============*******

// The every() method checks if all array values pass a test

// The every() method returns true if all elements pass the test, false otherwise.

// এখানে প্রত্যেকটা এলিমেন্ট কে শর্ত অনুসারে চেক করে আউটপুট রিটার্ন করে, আউটপুট হচ্ছে true or false, যদি সবগুলো সংখ্যা হয় ।

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// const arrNumbers = [45, 4, 9, 16, 25];
// // const arrNumbers = [45, 4, 9, 16, 25, 'sohel'];

// function myFunction(value, index, array) {
//     // console.log(value, index, array);
//     // console.log(value < 50);
//     // console.log(value > 50);
//     // console.log(value == 16);
// //   return value < 50 && array[3] == 16;
// //   return value > 50 ;
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
// //     console.log(value < 20);
// //     console.log(value > 40);
// //     console.log(array[4] == 25);
// //   return value < 20;
// }

// const newArrNumbers = arrNumbers.some(myFunction);
// // console.log(newArrNumbers);







// ==================Array indexOf() method================*******

// The indexOf() method searches an array for an element value and returns its index position.

// The indexOf() method returns -1 if the value is not found.

// it has two argument: 1...(Required) which is item search and 2...(optional) where the search start(index number) {Negative values will start at the given position counting from the end, and search to the end.}

// নেতিবাচক শুরু মান শেষ উপাদান থেকে গণনা করা হয় (তবে এখনও বাম থেকে ডানে অনুসন্ধান করে)।

// const arrNumbers = [45, 4, 16, 26, 25, 16, 36];

// console.log(arrNumbers.indexOf(16)); 
// console.log(arrNumbers.indexOf(16, -0)); 
// console.log(arrNumbers.indexOf(16, 2)); 
// console.log(arrNumbers.indexOf(25, -3)); 
// console.log(arrNumbers.indexOf(16, 7)); 
// console.log(arrNumbers.indexOf(16, -7)); 
// console.log(arrNumbers.indexOf(16, 8)); 







// ===================lastIndexOf() method=============*******

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

// The lastIndexOf() method searches an array for an element value and returns its last index position.

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() method searches the string from the end to the beginning.(ডান থেকে বাম দিকে অনুসন্ধান করে)

// lastIndexOf() পদ্ধতি শেষ(ending index) থেকে শুরু (0 index)পর্যন্ত স্ট্রিং অনুসন্ধান করে।

// The lastIndexOf() method returns the index from the beginning (position 0).

// it has two argument: 1...(Required) which is item search and 2...(optional) where the search start {Negative values will start at the given position counting from the end, and search to the end.}

// নেতিবাচক শুরু মান শেষ উপাদান থেকে গণনা করা হয় (তবে এখনও ডানে থেকে বাম অনুসন্ধান করে)।

// কিন্তু ইনডেক্স নাম্বার গণনা করা হবে বাম দিক থেকে ডান দিকের দিকে

// const arrNumbers = [45, 4, 16, 9, 22, 16, 33, 25, 20, 16, 50];

// console.log(arrNumbers.lastIndexOf(16)); 

// console.log(arrNumbers.lastIndexOf(4, 3));

// console.log(arrNumbers.lastIndexOf(22, 5)); 
// console.log(arrNumbers.lastIndexOf(33, 8)); 
// console.log(arrNumbers.lastIndexOf(22, -8)); 
// console.log(arrNumbers.lastIndexOf(16, -4)); 
// console.log(arrNumbers.lastIndexOf(33, -5)); 
// console.log(arrNumbers.lastIndexOf(16, -6)); 
// console.log(arrNumbers.length); 





// ==============Array includes() method================*******   

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// The includes() method is case-sensitive.

// Array.includes() allows to check for NaN values. Unlike Array.indexOf().

// it return true if the value is found, otherwise returns false

// এটা দুইটা প্যারামিটার থাকে | প্রথমটা হচ্ছে কি অনুসন্ধান করছি এবং দ্বিতীয়টা হচ্ছে ইনডেক্স নাম্বার, যে ইন্ডেস থেকে অনুসন্ধান করা শুরু হবে( Default value is 0)

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// console.log(arrNumbers.includes(16)); 
// console.log(arrNumbers.includes(15)); 
// console.log(arrNumbers.includes(25)); 
// console.log(arrNumbers.includes(25, 6)); 
// console.log(arrNumbers.includes(25, -3)); 
// console.log(arrNumbers.includes(9, -4)); 
// console.log(arrNumbers.includes(9, -5));
// console.log(arrNumbers.length); 







//  ==================Array find() method=================****

// The find() method returns the value of the first array element that passes a test function

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

//The find() method does not change the original array.

// এটি শর্তের সাথে মিলে যাওয়ার সাথে সাথেই প্রথম উপাদানটা রিটার্ন করে দেয়

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array


// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
//     return value > 45;
//    // return value > 55;
// }

// let newArrNumbers = arrNumbers.find(myFunction);

// // console.log(newArrNumbers);







// ==================Array findIndex() method===================****

//এটি array এর ইনডেক্স নাম্বার রিটার্ন করে

// The findIndex() method returns the index of the first array element that passes a test function

// The findIndex() method executes a function for each array element.

// The findIndex() method returns -1 if no match is found.

// The findIndex() method does not execute the function for empty array elements.

// The findIndex() method does not change the original array.

// এটি শর্তের সাথে মিলে যাওয়ার সাথে সাথেই উপাদানটার ইনডেক্স নাম্বার রিটার্ন করে দেয়

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
//   return value > 55;
// //   return value > 5;
// }

// let newArrNumbers = arrNumbers.findIndex(myFunction);

// console.log(newArrNumbers);







// =============Array findLast() Method================*******

// এটি শেষের দিক থেকে খোঁজা শুরু করে

// এটি fine() methoad এর মতন কাজ করে

// The findLast() method returns the value of the last element that passes a test.

// The findLast() method executes a function for each array element.

// The findLast() method returns undefined if no elements are found.

// The findLast() method does not execute the function for empty elements.

// The findLast() method does not change the original array.

// এটি শর্তের সাথে মিলে যাওয়ার সাথে সাথেই প্রথম উপাদানটা রিটার্ন করে দেয়

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array


// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
// //   return value > 55;
//   return value < 10;
// }

// let newArrNumbers = arrNumbers.findLast(myFunction);

// console.log(newArrNumbers);







// ==============Array findLastIndex() Method============*******

// এটি শেষের দিক থেকে খোঁজা শুরু করে

// এটি fineIndex() method এর মতন কাজ করে

// The findLastIndex() method executes a function for each array element.

// The findLastIndex() method returns the index (position) of the last element that passes a test.

// The findLastIndex() method returns -1 if no match is found.

// The findLastIndex() method does not execute the function for empty array elements.

// The findLastIndex() method does not change the original array.

// এটি শর্তের সাথে মিলে যাওয়ার সাথে সাথেই উপাদানটার ইনডেক্স নাম্বার রিটার্ন করে দেয়

// Note that the function takes 3 arguments: 1. value, 2. index, 3. array

// const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

// function myFunction(value, index, array) {
//     // console.log(value);
//     // console.log(index);
//     //   return value > 55;
//       return value < 5;
// }

// let newArrNumbers = arrNumbers.findLastIndex(myFunction);

// console.log(newArrNumbers);







// ==============Array.from() method===============********

// The Array.from() method returns an Array from any object with a length property or any iterable object

// The Array.from() method returns an array from any iterable object.

// The Array.from() method can take any number of arguments, or an array-like object

// Array.from() is a static property of the JavaScript Array object.

// You can only use it as Array.from().

// Array.from() পদ্ধতি যেকোন সংখ্যক আর্গুমেন্ট বা অ্যারের মত বস্তু নিতে পারে

// এটি একটি নতুন array তৈরি করে, রিটার্ন কর এবং মূল array ke কোন পরিবর্তন করে না

// let nams9 = 'Rufaida Sohel';
// console.log(Array.from(nams9));
// console.log(nams9);







// ================Array keys() method=============********  

// The keys() method returns a new Array Iterator object that contains the keys for each index in the array

// The keys() method returns an object with a specified array's index as the key and the index as the value.

// The keys() method does not change the original array.

// এটি এটারেবল অবজেক্ট এর ভিতর ইনডেক্স নাম্বার রিটার্ন করে পরে, যে কোন arrar er, কোন পরিবর্তন করে না

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(keys);

// for (let x of keys) {
//   console.log(x);
// }







// ===============Array entries() method=================********

// Create an Array Iterator, and then iterate over the key/value pairs

// The entries() method does not change the original array.

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// এটি প্রত্যেকটা এলিমেন্ট এবং এলিমেন্টের ইনডেক্স নাম্বার নিয়ে একত্রে একটি একটি Array রিটার্ন করে

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// // console.log(f);

// for (let x of f) {
// //   console.log(x);
// }







// =================Array with() Method=================********

// The with() method creates a new object with the specified properties.

// Array with() method as a safe way to update elements in an array without altering the original array.

// The with() method updates a specified array element.

// The with() method returns a new array.

// The with() method does not change the original array.

// এটি মূলাকে array কে পরিবর্তন করে না, একটি নতুন array তৈরি করে

// এটি দুইটি প্যারামিটার গ্রহণ করে: প্রথমটি হচ্ছে (ইনডেক্স নাম্বার) যে ইন্ডেক্স এর মান পরিবর্তন করতে হবে এবং দ্বিতীয়টি হচ্ছে পরিবর্তন করে কোন মানটি বসাতে হবে (সেই মান)

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(1, "March");

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

// it is very common practice to declare using 'const'

// Value cannot be reassigned and redeclared

// const একসাথে declare এবং assigne করতে হবে

// an array declare with constant has Block Scoop

// আলাদা আলাদা স্কোপের মধ্যে একই 'const' ভেরিয়েবল declare করা যাবে





//===========JavaScript Date Objects============

// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

// If adding days shifts the month or year, the changes are handled automatically by the Date object.

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









// ======Time Zones======

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

// If adding days shifts the month or year, the changes are handled automatically by the Date object.

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



// <<<<<<<<<<Compare Dates>>>>>>>>>>>>>
// let text = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   text = "Today is before January 14, 2100.";
// } else {
//   text = "Today is after January 14, 2100.";
// }
// // console.log(text);





//=============new Date(date string)======================

// new Date(date string) creates a date object from a date string

// console.log(new Date("October 13, 2014 11:13:00"));

// console.log(new Date("1998-02-25"));







// ================Math Object=======================

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// The Math object is static.

//<<<<<<<<<<<<<Math Properties >>>>>>>>>>>>>>

// The syntax for any Math property is : Math.property.

// JavaScript provides 8 mathematical constants that can be accessed as Math properties

// Math.E              // returns Euler's number


// Math.PI             // returns PI
// // Get PI value
//    console.log(Math.PI);



// Math.SQRT2          // returns the square root of 2


// Math.SQRT1_2        // returns the square root of 1/2


// Math.LN2            // returns the natural logarithm of 2


// Math.LN10           // returns the natural logarithm of 10


// Math.LOG2E          // returns base 2 logarithm of E


// Math.LOG10E         // returns base 10 logarithm of E










//================Math Methods=====================

// The syntax for Math any methods is : Math.method(number)

// (Number to Integer) There are 4 common methods to round a number to an integer:


// =======
// Math.round(x)	        Returns x rounded to its nearest integer

// Math.round(x) returns the nearest integer of x

// The Math.round() method rounds a number to the nearest integer.

// console.log(Math.round(2.5));
// console.log(Math.round(3.4));
// console.log(Math.round(-5.7));
// console.log(Math.round(-5.3));





//===============================================
// Math.ceil(x)	            Returns x rounded up to its nearest integer

// Math.ceil(x) returns the value of x rounded up to its nearest integer

// The Math.ceil() method rounds a number rounded UP to the nearest integer.

// console.log(Math.ceil(2.9));
// console.log(Math.ceil(5.3));
// console.log(Math.ceil(-5.7));  
// console.log(Math.ceil(-5.3));  

// console.log(-5.3 < -5);





//================================================
// Math.floor(x)	        Returns x rounded down to its nearest integer

// Math.floor(x) returns the value of x rounded down to its nearest integer

// The Math.floor() method rounds a number DOWN to the nearest integer.

// console.log(Math.floor(2.9));
// console.log(Math.floor(5.3));
// console.log(Math.floor(-5.7)); 
// console.log(Math.floor(-5.3)); 

// console.log( -5.3 > -6);





//=============================================

//Math.min() and Math.max()

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments

// console.log(Math.min(9, 5, 6, 7, 8));
// console.log(Math.max(9, 5, 6, 7, 8));

// const numbers9 = [2, 5, 6, 7, 8];

// console.log(numbers9); // get array
// console.log(...numbers9); // get array elements using spread(...) operator
// console.log(Math.min(...numbers9));
// console.log(Math.max(...numbers9));

// console.log(Math.min(numbers9)); // return NaN
// console.log(Math.max(numbers9)); // return NaN






//=============================================
// Math.random()

// The Math.random() method returns a random floating point number between 0 (inclusive - অন্তর্ভুক্ত) and 1 (exclusive - বাদ ).


// 0 এবং 1 এর মধ্যে 0 সহ & 1  বাদে যেকোনো নাম্বার রিটার্ন করে

// Math.random() always returns a number lower than 1.

// console.log(Math.random());


//<<<<<<Random Integers>>>>>>>>>
// Math.random() used with Math.floor() can be used to return random integers

// Returns a random integer from 0 to 9
// console.log(Math.floor(Math.random() * 10));

// Returns a random integer from 1 to 10
// console.log((Math.floor(Math.random() * 10) + 1));


// Returns a random integer from 0 to 10
// console.log(Math.floor(Math.random() * 11));

// Returns a random integer from 1 to 11
// console.log((Math.floor(Math.random() * 11) + 1));



// <<<<Get Random Integer Using Function>>>>>

//This JavaScript function always returns a random number between min (included - অন্তর্ভুক্ত) and max (excluded - বাদ)

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
//   // এই ফাংশনটা 1 সহ এবং 10 ছাড়া এদের মধ্যে সকল integer number রিটার্ন করবে
// }

// let random = getRndInteger(1, 10);
// console.log(random);


//------------------------------

// This JavaScript function always returns a random number between min and max (both included)

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
//   // এই ফাংশনটা 1 এবং 10 সহ এদের মধ্যে সকল integer সংখ্যা রিটার্ন করবে
// }

// let random = getRndInteger(1, 10);
// console.log(random);





// ===============================================
// Math.trunc(x)	        Returns the integer part of x

// Math.trunc(x) returns the integer part of x

// The Math.trunc() method returns the integer part of a number.

// The Math.trunc() method removes the decimals (does NOT round the number).

// console.log(Math.trunc(2.9));
// console.log(Math.trunc(5.3));
// console.log(Math.trunc(-5.7));
// console.log(Math.trunc(-5.3));





// ===============================================
// Math.sign()

// Math.sign(x) returns if x is negative, null or positive

// The Math.sign() method retuns whether a number is negative, positive or zero.

// If the number is positive, this method returns 1.
// If the number is negative, it returns -1.
// If the number is zero, it returns 0.

// এটার আর্গুমেন্ট যদি 0 হয় অথবা -0 হয় তাহলে, সেটাই রিটার্ন করে  এবং আর্গুমেন্ট যদি ধনাত্মক সংখ্যা হয় তাহলে 1 রিটার্ন করে ও আর্গুমেন্ট যদি ঋনাত্মক সংখ্যা হয় তাহলে -1 রিটার্ন করে

// console.log(Math.sign(5));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));
// console.log(Math.sign(-5));






//==========================================
// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y

// It has two arguments: 1...(Required) which is base(কোন সংখ্যার উপর পাওয়ার প্রয়োগ করতে হবে) and 2...(Required) which is exponent(পাওয়ার কত হবে)

// console.log(Math.pow(5, 2));
// console.log(Math.pow(4, 2));
// console.log(Math.pow(2, 2));
// console.log(Math.pow(2, 5));
// console.log(Math.pow(5, 5));





//=========================================
// Math.sqrt()
// Math.sqrt(x) returns the square root of x
// The Math.sqrt() method returns the square root of a number.

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(4));





//=====================================
// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x
// ধনাত্মক সংখ্যা রিটার্ন করে

// console.log(Math.abs(-5));
// console.log(Math.abs(5));
// console.log(Math.abs(-0));
// console.log(Math.abs(-5.7));





//=======================================
// Math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

// The Math.sin() method returns the sine of a number.

// The Math.sin() method returns a number between -1 and 1.


// The Math.sin() method expects the number in radians.

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180

// console.log(Math.sin(0));

// let pi = 90 * Math.PI;
// console.log(pi);
// console.log(Math.sin( pi / 180));





//===============================
// Math.cos()

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

// If you want to use degrees instead of radians, you have to convert degrees to radians:

// Angle in radians = Angle in degrees x PI / 180

// console.log(Math.cos(0));

// console.log(Math.cos(0 * Math.PI / 180));






//=============================================
// The Math.log() Method

// Math.log(x) returns the natural logarithm of x

// console.log(Math.log(1));
// console.log(Math.log(2));
// console.log(Math.log(10));
// console.log(Math.E * Math.log(10));






//========================================
// Math.log2() Method

// Math.log2(x) returns the base 2 logarithm of x

// console.log(Math.log2(8));
// console.log(Math.log2(5));
// console.log(Math.log2(2));
// console.log(Math.log2(10));
// console.log(Math.log2(100));





//=======================================
// Math.log10() Method

// Math.log10(x) returns the base 10 logarithm of x.

// console.log(Math.log10(8));
// console.log(Math.log10(10));
// console.log(Math.log10(20));





//<<<<<<<<<<JavaScript(ALL) Math Methods>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<>>>>>>>>>>>>>>

// abs(x)	                  Returns the absolute value of x
// acos(x)	                  Returns the arccosine of x, in radians
// acosh(x)	                  Returns the hyperbolic arccosine of x
// asin(x)	                  Returns the arcsine of x, in radians
// asinh(x)	                  Returns the hyperbolic arcsine of x
// atan(x)	                  Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	              Returns the arctangent of the quotient of its arguments
// atanh(x)	                  Returns the hyperbolic arctangent of x
// cbrt(x)	                  Returns the cubic root of x
// ceil(x)	                  Returns x, rounded upwards to the nearest integer
// cos(x)	                  Returns the cosine of x (x is in radians)
// cosh(x)	                  Returns the hyperbolic cosine of x
// exp(x)	                  Returns the value of Ex
// floor(x)	                  Returns x, rounded downwards to the nearest integer
// log(x)	                  Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	      Returns the number with the highest value   // console.log(Math.min.apply(null, [1,2,3]));
// min(x, y, z, ..., n)	      Returns the number with the lowest value   // console.log(Math.max.apply(null, [1,2,3]));
// pow(x, y)	              Returns the value of x to the power of y
// random()	                  Returns a random number between 0 and 1
// round(x)	                  Rounds x to the nearest integer
// sign(x)	                  Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	                  Returns the sine of x (x is in radians)
// sinh(x)	                  Returns the hyperbolic sine of x
// sqrt(x)	                  Returns the square root of x
// tan(x)	                  Returns the tangent of an angle
// tanh(x)	                  Returns the hyperbolic tangent of a number
// trunc(x)	                  Returns the integer part of a number (x)






//===============JavaScript Booleans=========================
// A JavaScript Boolean represents one of two values: true or false.

// Comparing two JavaScript objects always return false.

// console.log(10 > 9);
// console.log('10' > 9);
// console.log('10' == 10);
// console.log('10' === 10);






//=======Comparison Operators==========

// Comparison operators are used to test for true or false.

// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// দুইটা string alphabetically compare করা হয়


//***Operators***

// ==     Equal to   
// compares two values and checks if they are equal

// let x = 10;
// let y = '10';
// let a = 18;
// let b = 15;

// console.log(x == y); // true
// console.log(a == b); // false




// -------------------------------

// ===    Strict equal to   
// compares two values and checks if they are equal value and equal type

// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x === z); // true
// console.log(a === b); // false
// console.log(x === y); // false



// ------------------------------

// !=     Not equal to   
// compares two values and checks if they are not equal

// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x != y); // false
// console.log(x != z); // false
// console.log(x != b); // true



//--------------------------------

// !==    Strict not equal to   
//compares two values and checks if they are not equal value or not equal type

// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x !== z); // false
// console.log(x !== y); // true
// console.log(a !== b); // true



//-----------------------------------

//   >    Greater than   
//compares two values and checks if the left value is greater than the right value

// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x > z); // false
// console.log(x > y); // false
// console.log(a > b); // true



//----------------------------------

//   <    Less than  
// compares two values and checks if the left value is less than the right value

// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x < z); // false
// console.log(x < y); // false
// console.log(a < b); // false
// console.log(x < b); // true



//--------------------------------------

//   >=   Greater than or equal to   
// compares two values and checks if the left value is greater than or equal to the right value

// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x >= z); // true
// console.log(x >= y); // true
// console.log(a >= y); // true
// console.log(b >= a); // false



//-----------------------------

// <=    Less than or equal to   
// compares two values and checks if the left value is less than or equal to the right value


// let x = 10;
// let y = '10';
// let z = 10;
// let a = 18;
// let b = 15;

// console.log(x <= z); // true
// console.log(x <= y); // true
// console.log(a <= b); // false
// console.log(b <= a); // true
// console.log(x <= a); // true






// ================Logical Operators=============
// Logical operators are used to test for true or false
// Logical operators are used to determine the logic between variables or values.

// ***Operator***

//    ' && '   Logical AND
// and অপারেটরের দুইপাশের শর্তই পূরণ করলে true রিটার্ন করবে অথবা false রিটার্ন করবে।

// let x = 10;
// let y = 10;
// let a = 18;

// console.log(x > y && a > x); // false
// console.log(x == y && a > x); // true
// console.log(x > y && y == x); // false




// -------------------

//    ' || '   Logical OR
// or অপারেটরের দুই পাশের যে কোন এক পাশ শর্ত পূরণ করলেই true রিটার্ন করবে অথবা false রিটার্ন করবে

// let x = 10;
// let y = 10;
// let a = 18;

// console.log(x > y || a > x); // true
// console.log(x == y || a < x); // true
// console.log(x == a || a < x); // false

//----------------------

//   ' ! '   Logical NOT
// যদি কোন রিটার্ন true অথবা রিটার্ন false এর বিপরীত ফলাফল পেতে চাই তাহলে not অপারেটর ব্যবহার করতে হবে

// let x = 10;
// let y = 10;
// let a = 18;


// console.log(x == y); // true
// console.log(!(x == y)); // false
// console.log(x <= y); // true
// console.log(!(x <= y)); // false
// console.log(x === y); // true
// console.log(!(x === y)); // false
// console.log(x !== y); // false
// console.log(x !== a); // true
// console.log(!(x !== a)); // false






// ===========Conditional (Ternary) Operator=====================
// JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

// Syntax: variablename = (condition) ? value1:value2 

// কন্ডিশন true হলে কোলন চিহ্নের বাম পাশেরটা  আর  কন্ডিশন false হলে কোলন চিহ্নের ডান পাশেরটা রিটার্ন করে

// let age = 20;

// console.log(5 > 10);
// console.log(5 > 10 ? "true" : "false");

// console.log(age < 28)
// console.log(age < 28 ? "Too young":"Old enough");






// ===========Nullish Coalescing Operator (??)=================

// The Nullish Coalescing Operator (??) returns the first argument if it is not nullish (null or undefined).

// Nullish Coalescing Operator (??) প্রথম আর্গুমেন্ট ফেরত দেয় যদি এটি নালিশ না হয় (নাল বা অনির্ধারিত)।

// Syntax: first argument ?? second argument


// let first = undefined;
// let first = null;
// let first = 'sohel';
// let first = [];
// let first = {};
// let second = 5;
// let result = first ?? second;
// // console.log(result);
// // console.log(typeof result);






//===========Optional Chaining Operator (?.)====================

// The Optional Chaining Operator (?.) returns undefined if an object is undefined or null (instead of throwing an error).

// ঐচ্ছিক চেইনিং অপারেটর (?.) undefined রিটার্ন করে যদি কোনো বস্তু undefined or null থাকে (একটি ত্রুটি নিক্ষেপ করার পরিবর্তে)। এছাড়া যদি যে উপাদানটি খুজছি সেটি পাওয়া যায় তাহলে সেই উপাদানটি রিটার্ন করে


// const car = {type:"Fiat", model:"500", color:"white"};

// console.log(car?.type);
// console.log(car?.company);
// console.log(car?.company?.name);






//==========JS Conditions====================

// Conditional statements are used to perform different actions based on different conditions.

// Use ' if ' to specify a block of code to be executed, if a specified condition is true

// Use ' else ' to specify a block of code to be executed, if the same condition is false

// Use ' else if ' to specify a new condition to test, if the first condition is false

// Use ' switch ' to specify many alternative blocks of code to be executed


//--------------------------------
//*** ' if ' Statement***
// Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.


// Syntax: if (condition) {block of code to be executed if the condition is true}

// if ( new Date().getHours() <= 23 ) {
//     console.log("Good Night");
// }

// if ( new Date().getFullYear() == 2024 ) {
//     console.log("Year is 2024");
// }

// if ( 18 >= 18 && 18 <= 20 ) {
//     console.log("Both conditions are true");
// }


// let math = 95;
// if ( math >= 85 ) {
//     console.log('You Are Good in Mathmetic');
// }





//--------------------------------

//**** ' else ' Statement ****
// Use the else statement to specify a block of code to be executed if the condition is false.


// Syntax:
// if (condition) {
//   //  block of code to be executed if the condition is true
// } else {
//   //  block of code to be executed if the condition is false
// }


// let Eighteen = (new Date(new Date().setHours(18))).getHours();

// let six = (new Date(new Date().setHours(6))).getHours();

// if (new Date().getHours() > Eighteen || new Date().getHours() < six ) {
//   console.log("This is Night");
// } else {
//   console.log("This is Day");
// }





//--------------------------------

// **** ' else if ' Statement ****
// Use the else if statement to specify a new condition if the first condition is false.


// Syntax:
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }



// let Eighteen = (new Date(new Date().setHours(18))).getHours();
// // let Eighteen = 18;

// let six = (new Date(new Date().setHours(6))).getHours();
// // let six = 6;

// let zero = (new Date(new Date().setHours(0))).getHours();
// // let zero = 0;

// console.log(Eighteen, six, zero);
// console.log(new Date().getHours());

// if (new Date().getHours() > Eighteen && new Date().getHours() < six ) {
//   console.log("This is Night");
// } else if(new Date().getHours() == zero){
//   console.log("This is Mid-Night");
// } else {
//   console.log("This is Day");
// }






// ========' Switch ' Statement===================
// Use the switch statement to select one of many code blocks to be executed.

// Switch cases use strict comparison (===)[value and type must be same as ' case ' value and type]

// Syntax:=
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }


// The switch expression is evaluated once.

// The value of the expression is compared with the values of each case.

// If there is a match, the associated block of code is executed.

// If there is no match, the default code block is executed.



// If you omit the break statement, the next case will be executed even if the evaluation does not match the case

// When JavaScript reaches a ' break ' keyword, it breaks out of the switch block.

// ' break ' will stop the execution inside the switch block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

// The ' default ' keyword specifies the code to run if there is no case match

// The ' default ' case does not have to be the last case in a switch block

// If ' default ' is not the last case in the switch block, remember to end the default case with a break.



// If multiple cases matches a case value, the first case is selected.

// If no matching cases are found, the program continues to the default label.

// If no default label is found, the program continues to the statement(s) after the switch.



// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(new Date().getDay());
// console.log(day);



// ' default ' Keyword
// switch (new Date().getDay()) {
//   case 4:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }

// console.log(text);



// break Keyword
// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     console.log("Soon it is Weekend");
//     break;
//   case 6:
//     text = "It is Weekend";
//     console.log("It is Weekend");
//   case 6:
//     text = " Weekend";
//     console.log('Weekend');
//   case 5:
//     text = " Weekend2";
//     console.log('Weekend2');
//     break;
//   default:
//     text = "Looking forward to the Weekend";
//     console.log("Looking forward to the Weekend");
// }


// console.log(text);



// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);


// let a = 0;
// switch (a) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);







// ===========JavaScript Loops===============================
// Loops can execute a block of code a number of times.

// There are three different types of loops:
// ' for ' - loops through a block of code a number of times

// ' for/in ' - loops through the properties of an object

// ' for/of ' - loops through the values of an iterable object

// ' while ' - loops through a block of code while a specified condition is true

// ' do/while ' - also loops through a block of code while a specified condition is true



//***' For ' Loop**** 

//syntax
// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }


//Example of 'For' loop:
// for (let i = 0; i < 10; i++) {
// //   console.log(i);
// }

// const numbers = [45, 4, 9, 16, 25];

// for (let i = 0; i < numbers.length; i++) {
// //   console.log(i); // return index
// //   console.log(numbers[i]); // return value
// }


// Expression 1:----->
// (optional) Expression 1 is executed (one time) before the execution of the code block.(initialization)
//[Expression 1 এর মধ্যে কমা(,) ব্যবহার করে একাধিক variable  লেখা যাবে]

// Expression 1 বাদ দিয়ে
// let i = 0;
// let length = 7;
// for (; i <= length; i++) {
// //   console.log(i);
// }



// Expression 2:----->
//(optional) Expression 2 defines the condition for executing the code block.(condition)
// If you omit Expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser.
// If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

// Expression 2 বাদ দিয়ে
// let i = 0;
// let length = 7;
// for (let i = 0, length = 7; ; i++) {
//     if(i > length){
//         break;
//     }
// //   console.log(i);
// }



// Expression 3:----->
//(optional) Expression 3 is executed (every time) after the code block has been executed.(increment/decrement)
// Expression 3 can also be omitted (like when you increment your values inside the loop)

// Expression 3 বাদ দিয়ে
// let i = 0;
// let length = 7;
// for (let i = 0, length = 7; i <= length; ) {
// //   console.log(i);
//   i++;
// }



// Expression 1, 2 & 3 বাদ দিয়ে
// let i = 0;
// let length = 7;
// for ( ; ; ) {
//     if(i > length){
//         break;
//     }
// //   console.log(i);
//   i++;
// }







//***' For/in ' Loop**** 

// The JavaScript ' for in ' statement loops through the properties of an Object:

// Syntax:-->
// for (key in object) {
//   // code block to be executed
// }


// Example of 'For/in' loop:
// const person = {fname:"John", lname:"Doe", age:25};

// for (let x in person) {
// //   console.log(x); // return property Name
// //   console.log(person.x); // return undefined
// //   console.log(person[x]); // return value
// }


// The for in loop iterates over a person object

// Each iteration returns a key (x)

// The key is used to access the value of the key

// The value of the key is person[x]


//-------------

// The JavaScript ' for in ' statement can also loop over the properties of an Array:

// Syntax:-->
// for (variable in array) {
//   // code block to be executed
// }

// Example of 'For/in' loop:
// const numbers = [45, 4, 9, 16, 25];

// for (let x in numbers) {
// //   console.log(x); // return index
// //   console.log(numbers[x]); // return value
// }

// Note: Do not use 'for in' over an Array if the index order is important. It is better to use a 'for' loop, a 'for of' loop, or 'Array.forEach()' when the order is important.





// ***' For/of ' Loop****
// The JavaScript for of statement loops through the values of an iterable object.

// iterable - An object that has iterable properties.

// An object that has iterable properties, such as Array, Map, Set, String, TypedArray, or any other object that defines a @@iterator method.

// Syntax:-->
// for (variable of iterable) {
//   // code block to be executed
// }

// Example of 'For/of' loop:

// --**Looping over a String**--
// let nam = 'muhammad';

// for (let x of nam) {
//     // console.log(x); // return value
// }


// --**Looping over an Arrays**--

// const numbers = [45, 4, 9, 16, 25];

// for (let number of numbers) {
// //   console.log(number); // return value
// }

// const names = ['abul', 'babul', 'kabul', 'sabul', 'habul'];

// for (let name of names) {
//     // console.log(name); // return value
// }



//***objects are not iterable**** 
// const obj = {
//     name : 'abul',
//     age : 25,
//     country : 'Bangladesh'
// }

// for (let x of obj) {
//     // console.log(x); // obj is not iterable
// }




//***' while ' Loop****
// Loops can execute a block of code as long as a specified condition is true.

// The while loop loops through a block of code as long as a specified condition is true.

// The while loop executes the code block once, before checking if the condition is true, then executes it again, and so on, until the condition is false.


// Syntax:-->
// while (condition) {
    // code block to be executed
// }

// Example of 'While' loop:

// let i = 0;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = 0;
// while (i < arr.length) {
//     // console.log(arr[i]); // return value
//     i++;
// }





// ***' do/while ' Loop****
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


// Syntax:-->
// do {
    // code block to be executed
// }
// while (condition);


// Example of 'do/while' loop:

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = 10;

// do {
//     // console.log(i);
//     // console.log(arr[i]); // return undefined if not found
//     i++;
// } while (i < arr.length)



// while (i < arr.length) {
//     console.log(arr[i]); // return value
//     i++;
// }


// A ' while ' loop is much the same as a ' for ' loop, if  ' for ' loop expression 1 and expression 3 omitted.

// একটি 'while' লুপ অনেকটা একটি 'for' লুপের মতই, যদি 'for' লুপের এক্সপ্রেশন 1 এবং এক্সপ্রেশন 3 বাদ দেওয়া হয়।


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;

// for (;cars[i];) {
// //  console.log(i); // return index
// //  console.log(cars[i]); // return value
//   i++;
// }


// while (cars[i]) {
//  console.log(cars[i]); // return value
//   i++;
// }






//==============Break and Continue====================

// *** ' break ' Statement***
// The break statement "jumps out" of a loop.

// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

// The break statement can also be used to jump out of a loop based on a specified condition.

// 'break' সম্পূর্ণভাবে loop থেকে বের হওয়ার জন্য ব্যবহার করা হয়

// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   console.log(i);}

// for (let i = 0; ; i++) {
//   if (i === 3) { break; }
//   console.log(i);}





// *** ' continue ' Statement***
// The continue statement "jumps over" one iteration in the loop.

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// The continue statement can also be used to skip an iteration in a loop based on a specified condition.

// 'continue' একটি loop এর মধ্যে নির্দিষ্ট কন্ডিশন skip করা অথবা এড়ানোর জন্য ব্যবহার করা হয়

// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   console.log(i);
// }







//==========JavaScript Sets====================
// A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.

// A Set can hold any value of any data type.



//^^^^^Create a Set^^^^^^^^
// Passing an Array to 'new Set()'
// Create a new Set and use 'add()' to add values
// Create a new Set and use 'add()' to add variables



// **Set Methods**

// new Set(iterable)	    
// Creates a new Set object
// new Set()	           
//  Creates a new Set

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num);


// console.log(num instanceof Set);

// const mySet = new Set(num);
// const mySet = new Set(['red', 'green', 'blue', 'yellow']);
// console.log(mySet);


// console.log(mySet instanceof Set); // return true



// ---------------------------------------
// add()	                
//Adds one or more elements to the Set

// mySet.add(11);




//------------------------------------
// delete()	                
// Removes one or more elements from the Set

// mySet.delete('red'); // delete the value
// console.log(mySet.delete('red')); // return true 
// console.log(mySet.delete(11)); // return false
// console.log(mySet);





//------------------------------------
// clear()	                
//Removes all elements from the Set

// mySet.clear(); // clear the set
// console.log(mySet);





//------------------------------------
// has()	                
//Returns a Boolean indicating whether an element is in the Set

// console.log(mySet.has('green')); // return false
// console.log(mySet.has(10)); // return true





//------------------------------------
// forEach()	            
// Executes a provided function once for each Set element






//------------------------------------
// values()	                
// Returns a new Iterator object containing the values for each element in the Set

// console.log(mySet.values()); // [object Set Iterator]






//------------------------------------
// keys()	                
// Returns a new Iterator object containing the keys for each element in the Set

// console.log(mySet.keys()); // [object Set Iterator]





//------------------------------------
// entries()	            
// Returns a new Iterator object containing the [key, value] for each element in the Set

// console.log(mySet.entries()); // [object Set Iterator]




//--------------------------
// [Symbol.iterator]()	    
// Returns a new Iterator object that contains the values for each element in the Set




//--------------------------
// [Symbol.toStringTag]	    
// Returns a string that contains all the elements in the Set




//--------------------------
// toString()	            
// Returns a string that contains all the elements in the Set




//--------------------------
// toJSON()	                
// Returns a JSON representation of the Set




//--------------------------
// valueOf()	            
// Returns the Set itself 

// console.log(mySet.valueOf());




// Property---->
// size	                    
//Returns the number of elements in a Set
 
// console.log(mySet.size); // return length of set






// Example:----->
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num);

// const mySet = new Set(num);
// console.log(mySet);

// mySet.add(11);

// mySet.clear(); // clear the set
// console.log(mySet);

// mySet.delete(4); // delete the value
// console.log(mySet.delete(4)); // return true 
// console.log(mySet.delete(11)); // return false
// console.log(mySet);


// console.log(mySet.entries()); // [object Set Iterator]

// console.log(mySet.has(11)); // return false
// console.log(mySet.has(10)); // return true

// console.log(mySet.keys()); // [object Set Iterator]

// console.log(mySet.size); // return length of set


// console.log(mySet.values()); // [object Set Iterator]


// console.log(mySet.valueOf()); // return the set itself















 

// =================JavaScript Maps=================
// The Map object holds key-value pairs and remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.

// The Map object is iterable, which means you can loop through it using a for..of loop.



//^^^^^Create a Map^^^^^^^^
// Passing an Array to new Map()
// Create a Map and use Map.set()



// **Map Methods**

// __new Map()__	
// new Map(iterable)	    
// Creates a new Map object           
// Creates a new Map object
// The new Map() constructor creates an empty map and also creates a new Map object.


// const fruit1 = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);


// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// // console.log(fruits);

// const myMap = new Map(fruits);
// // console.log(myMap);


// console.log(fruits instanceof Map); // return false

// console.log(myMap instanceof Map); // return true





//---------------------------------------------
//____set()____	    
// Sets the value for a key in a Map

// The set() method can also be used to add new key/value pairs to a Map.

// Create a Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);


// console.log(fruits);

//**The set() method can also be used to change existing Map values.

// fruits.set("apples", 600);

// console.log(fruits);







//-------------------------------------------
// ____get()____	                
// Returns the value of the specified key in a Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.get(50));
// console.log(myMap.get('apples'));






//-------------------------------------------
// ____has()____	                
// Returns true if a key exists in a Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.has('kiwi')); // return true
// console.log(myMap.has(50)); // return true
// console.log(myMap.has('50')); // return false






//-------------------------------------------
// ____delete()____	            
// Removes a Map element specified by a key

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.delete(50)); // return true
// console.log(myMap.delete('50')); // return false




//-------------------------------------------
// ____clear()____	            
// Removes all elements from a Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.clear()); // return undefined
// console.log(myMap); // return empty map






//-------------------------------------------
// ____forEach()____	        
// Executes a provided function once for each Map element







//-------------------------------------------
// ____entries()____	        
// Returns a new Iterator object containing the [key, value] for each element in the Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.entries()); 




//-------------------------------------------
// ____keys()____	            
// Returns a new Iterator object containing the keys for each element in the Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.keys()); 






//-------------------------------------------
// ____values()____	        
// Returns a new Iterator object containing the values for each element in the Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.values()); 






//-------------------------------------------
// ____toString()____	        
// Returns a string that contains all the elements in the Map







//-------------------------------------------
// ____[Symbol.iterator]()____	
// Returns a new Iterator object that contains the values for each element in the Map







//-------------------------------------------
// ____[Symbol.toStringTag]____	
// Returns a string that contains all the elements in the Map





//-------------------------------------------
// ____valueOf()____	        
// Returns the Map itself

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// // console.log(myMap);

// console.log(myMap.valueOf()); // return the map itself
// console.log(myMap);




//-------------------------------------------
// ____toJSON()____	        
// Returns a JSON representation of the Map




//^^^^Property^^^^^^^^
// ____size____  
// Returns the number of elements in a Map

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];

// const myMap = new Map(fruits);
// console.log(myMap);

// console.log(myMap.size); // return length of map





//-------------------------------------------
//^^** Being able to use objects as keys is an important Map feature.

// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};


// const fruit = new Map();

// // console.log(fruit);

// // add objects as keys
// fruit.set(apples, 500); 
// fruit.set(bananas, 1000);

// //add onject property value as keys
// fruit.set(oranges.name, 1000);

// console.log(fruit);


// console.log(fruit.keys()); // returns keys

// console.log(fruit.get(apples)); // returns value
// console.log(fruit.get('apples')); // returns undefined





//** Differences between JavaScript Objects and Maps:--->>

//        ^^Object^^	                        ^^Map^^
// Not directly iterable	               Directly iterable
// Do not have a size property	           Have a size property
// Keys must be Strings (or Symbols)	   Keys can be any datatype
// Keys are not well ordered	           Keys are ordered by insertion
// Have default keys	                   Do not have default keys











//=============JavaScript typeof operator==================================================================
// You can use the typeof operator to find the data type of a JavaScript variable.



// In JavaScript there are 5 different data types that can contain values:
// string
// number
// boolean
// object
// function


// There are 6 types of objects:
// Object
// Date
// Array
// String
// Number
// Boolean


// And 2 data types that cannot contain values:
// null
// undefined


//------------
// typeof "John"                 // Returns "string"

// typeof 3.14                   // Returns "number"

// typeof NaN                    // Returns "number"

// typeof false                  // Returns "boolean"

// typeof [1,2,3,4]              // Returns "object"

// typeof {name:'John', age:34}  // Returns "object"

// typeof new Date()             // Returns "object"

// typeof function () {}         // Returns "function"

// typeof myCar                  // Returns "undefined" *

// typeof null                   // Returns "object"



// The typeof operator returns "object" for arrays because in JavaScript arrays are objects.

// The typeof operator always returns a string (containing the type of the operand).



// "John".constructor                // Returns function String()  {[native code]}

// (3.14).constructor                // Returns function Number()  {[native code]}

// false.constructor                 // Returns function Boolean() {[native code]}

// [1,2,3,4].constructor             // Returns function Array()   {[native code]}

// {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}

// new Date().constructor            // Returns function Date()    {[native code]}

// function () {}.constructor        // Returns function Function(){[native code]}



// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

// Empty values কখনো undefined হয় না (let car = "";    // The value is "", the typeof is "string")



// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

// Null মানে হচ্ছে কোন জিনিস এখানে exist করে না

// You can empty an object by setting it to null

// You can also empty an object by setting it to undefined


//**undefined and null are equal in value but different in type

// typeof undefined           // undefined
// typeof null                // object

// null === undefined         // false
// null == undefined          // true










//========JavaScript Type Conversion============================================

//**** Converting Strings to Numbers using Number() and unary + operator

// console.log("3.14");
// console.log(Number("3.14"));
// console.log(+"3.14");



//___________________
//**** Converting Numbers to Strings using String() and toString()

// console.log(String(123));
// console.log((123).toString());
// console.log(String(100 + 23) );
// console.log((100 + 23).toString());




//___________________
//**** Converting Dates to Numbers using Number() and unary + operator

// let date = new Date();
// console.log(date);

// console.log(Number(date));
// console.log(+(date));



//___________________
//**** Converting Dates to Strings using String() and toString()

// console.log(Date());
// console.log(String(Date()));
// console.log((Date().toString()));



//___________________
//**** Converting Numbers to Dates using new Date()

// console.log(new Date(11, 0, 1));
// console.log(new Date(11, 1, 1));



//___________________
//**** Converting Booleans to Numbers using Number() and unary + operator

// console.log(Number(false));    // returns 0
// console.log(+false);           // returns 0
// console.log(Number(true));     // returns 1
// console.log(+true);            // returns 1





//___________________
//**** Converting Booleans to Strings using String() and toString()

// console.log(String(false));    // returns "false"
// console.log(String(true));      // returns "true"

// console.log(false.toString());
// console.log(true.toString());




//___________________
//**** Converting Numbers to Booleans using Boolean()

// console.log(Boolean(0));    // returns false
// console.log(Boolean(1));    // returns true


// console.log(Boolean(3.4));    // returns true
// console.log(Boolean(1.5));    // returns true
// console.log(Boolean(0.5));    // returns true






//^^^^^Automatic Type Conversions
// 5 + null    // returns 5         because null is converted to 0
// "5" + null  // returns "5null"   because null is converted to "null"
// "5" + 2     // returns "52"      because 2 is converted to "2"
// "5" - 2     // returns 3         because "5" is converted to 5
// "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2







//==========JavaScript Bitwise Operations==================???????========
// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


// // Example:
// 5 & 1	1	0101 & 0001	 0001
// 5 | 1	5	0101 | 0001	 0101
// ~ 5	10	 ~0101	 1010
// 5 << 1	10	0101 << 1	 1010
// 5 ^ 1	4	0101 ^ 0001	 0100
// 5 >> 1	2	0101 >> 1	 0010
// 5 >>> 1	2	0101 >>> 1	 0010








//=============JavaScript Regular Expressions================================================================
// A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations. A regular expression can be a single character, or a more complicated pattern. Regular expressions can be used to perform all types of text search and text replace operations.

//^^Syntax:---> /pattern/modifiers;

// In JavaScript, regular expressions are often used with the two string methods: search() and replace().


//**The search() method uses an expression to search for a match, and returns the position of the match.

// The search() method searches a string for a specified value and returns the position of the match

// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.search("ain")); // returns the index position of first match

// console.log(text.search(/ain/)); // returns the index position of first match

// console.log(text.search(/Ain/i)); // returns the index position of first match 

// console.log(text.search(/Ain/ig)); // returns the index position of first match



//------------------
//**The replace() method returns a modified string where the pattern is replaced.

// The replace() method replaces a specified value with another value in a string

// It has two arguments: 1. search value and 2. replace a new value

// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.replace("ain", "on")); // first match is replaced

// console.log(text.replace(/Ain/i, "on")); // first match is replaced

// console.log(text.replace(/Ain/ig, "on")); // all matches are replaced





//***Regular Expression Modifiers___

// Modifiers can be used to perform case-insensitive more global searches:

// i-->	Perform case-insensitive matching	
// g-->	Perform a global match (find all)	
// m-->	Perform multiline matching	???????????
// d-->	Perform start(start index) and end(end index) matching


// let text = 'Modifiers can be used to perform case-insensitive more global searches.'
// ;

// console.log('Modifiers can be used to perform case-insensitive more global searches.'.match(/insensitive/));

// console.log('Modifiers can be used to perform case-insensitive more global searches.'.match(/insensitive/m)); // ?????????????

// console.log('Modifiers can be used to perform case-insensitive more global searches.'.match(/insensitive/d));






//***Regular Expression Patterns____
// Brackets are used to find a range of characters

//-----
// [abc]-->	Find any of the characters between the brackets	


// let text = '1. Modifiers can be used to perform case-insensitive more global searches.'
// ;

// console.log(text.match(/[aeiou]/ig));
// console.log(text.match(/[1-9]/ig));



//---------------------------
// [0-9]-->	Find any of the digits between the brackets	


// const arr = [1, 26, 34, 87];
// console.log(arr.toString().match(/[1234567]/ig));
// console.log(arr.toString().match(/[1-7]/ig));

// let num = '142352346346'
// console.log(num.match(/[1234567]/ig));
// console.log(('142352346346').match(/[1-7]/ig));




//-------------------
// (x|y)-->	Find any of the alternatives separated with |


// let text = "re, green, red, green, gren, grcn, gr, blue, yellow, black" ;


// console.log(text.match(/Black|red/ig));


// console.log(text.match(/gr[aec]n/g));

// console.log(text.match(/gr[a-z]n/g));






//====test() method===========================
// The test() method is a RegExp expression method.

// It searches a string for a pattern, and returns true or false, depending on the result.

// const pattern = /a/;
// console.log(pattern.test("The test() method is a RegExp expression method"));

// const pattern = /A/i;
// console.log(pattern.test("The test() method is a RegExp expression method"));

// const pattern = /[a-z]/;
// console.log(pattern.test("The test() method is a RegExp expression method"));

// const pattern = /1/;
// console.log(pattern.test("The test() method is a RegExp expression method"));

// const pattern = /[0-9]/;
// console.log(pattern.test(" 1. The test() method is a RegExp expression method"));






//=======exec() method=====================================
// The exec() method is a RegExp expression method.
// It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.

// console.log(/e/.exec("The best things in life are free!"));

// console.log(/1/.exec("The best things in life are free!"));

// console.log(/B/i.exec("The best things in life are free!"));

// console.log(/B/id.exec("The best things in life are free!"));







//========JavaScript Operator Precedence============================

// Link ---> https://www.w3schools.com/js/js_precedence.asp








//========JavaScript Errors================================================

// The ' try ' statement defines a code block to run (to try).

// The ' catch ' statement defines a code block to handle any error.

// The ' finally ' statement defines a code block to run regardless of the result.

// The ' throw ' statement defines a custom error.




//*** JavaScript try and catch_____

// The 'try' statement allows you to define a block of code to be tested for errors while it is being executed.

// The 'catch' statement allows you to define a block of code to be executed, if an error occurs in the try block.

// syntax:-->
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }


// Example:-->
// try {
//   adddlert("Welcome guest!");
// }
// catch(err) {
// console.log(err);
// }


// try {
//   eval("alert('Hello)");   // Missing ' will produce an error
// }
// catch(err) {
// console.log(err);}




//-------------------------------------------------
//*** The 'finally' Statement_____
// The 'finally' statement lets you execute code, after try and catch, regardless of the result:

// syntax:-->
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }


//Example:-->
// try {
//   alert("Welcome guest!");
// }
// catch(err) {
// console.log(err);
// }
// finally {
//  console.log("Finally block is always executed");
// }





//-------------------------------------------
//*** The ' throw ' Statement_____

// When an error occurs, JavaScript will normally stop and generate an error message.

// The technical term for this is: JavaScript will throw an exception (throw an error).

// JavaScript will actually create an Error object with two properties: name and message.

// The ' throw ' statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript 'String', a 'Number', a 'Boolean' or an 'Object':

// If you use throw together with try and catch, you can control program flow and generate custom error messages.



// Syntax:-->

// throw "Too big";    // throw a text
// throw 500;          // throw a number


// Example:-->

// let x = '';
// let x = '4g';
// let x = '4';
// let x = '12';
// let x = '5';
// try {
//     if(x.trim() == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
//   }
//   catch(err) {
//     console.log(err);
//   }
//   finally {
//       console.log("Finally block is always executed");
//   }

// Custom Error Messages**
// let x = '5h';
// try {
//     if(x.trim() == "") throw "empty";
//     if(isNaN(x)) throw {message: "Only number values are allowed", errorCode: 1234, errorName: "NotANumber", errorType: "TypeError", errorStack: "TypeError: Only number values are allowed"};

//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
//   }
//   catch(err) {
//     console.log(err);
//     console.log(err.message);
//   }
//   finally {
//       console.log("Finally block is always executed");
//   }






// ***___The Error Object____**

// JavaScript has a built in error object that provides error information when an error occurs.

//* The error object provides two useful properties: name and message (a string).







//___Error Name Values_______________________

//^^___Range Error____**
// A RangeError is thrown if you use a number that is outside the range of legal values.


// let num = 1;
// try {
//   num.toPrecision(500);   // A number cannot have 500 significant digits
// }
// catch(err) {
//     console.log(err);
//     console.log(err.name);
// // }

// console.log(num.toPrecision(5));
// console.log(num.toPrecision(500)); // toPrecision() argument must be between 1 and 100




//^^___Reference Error____**
/// A ReferenceError is thrown if you use (reference) a variable that has not been declared:

// let x = 5;
// try {
//   x = y + 1;   // y cannot be used (referenced)
// }
// catch(err) {
    // console.log(err);
// //   console.log(err.name);
// }





//^^___Syntax Error____**   
// A SyntaxError is thrown if you try to evaluate code with a syntax error.

// try {
//   eval("alert('Hello)");   // Missing ' will produce an error
// }
// catch(err) {
// // console.log(err);
// // console.log(err.name);
// }




//^^___Type Error____**
// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function

// let num = 1;
// let num = 'sohel';

// try {
//   num.toUpperCase();   // You cannot convert a number to upper case
// }
// catch(err) {
// // console.log(err);
// // console.log(err.name);
// }






//^^___URI(Uniform Resource Identifier) Error____**
// A URIError is thrown if you use illegal characters in a URI function:

// try {
//   decodeURI("%");   // Illegal characters will produce an error
// }   
// catch(err) {
//     console.log(err);
//     console.log(err.name);
// }









//============JavaScript Scope====================================================

// Scope determines the accessibility (visibility) of variables.

// JavaScript variables have 3 types of scope:
// Block scope (let, const)
// Function scope (local scope)
// Global scope


//***Block Scope__
// Before ES6 (2015), JavaScript variables had only 'Global Scope' and 'Function Scope'.

// ES6 introduced two important new JavaScript keywords: 'let' and 'const'. These two keywords provide 'Block Scope' in JavaScript.

// Variables declared with 'let' and 'const' keywords inside a curly brace { } block, cannot be accessed from outside the block.

// {
//   let x = 2;
// const a = 5;
// }
// x and a cannot be accessed from outside**



// Variables declared with the var keyword can NOT have block scope. **But you can access the variable from outside the block**.
// {
//   var x = 2;
// }
// x can access outside the block






// ***Local  Scope__

// Variables declared within a JavaScript function, are LOCAL to the function

// Local variables have Function Scope

// They can only be accessed from within the function

// Local variables are created when a function starts, and deleted when the function is completed.

// ফাংশনের মধ্যে কোনো ভেরিবল ডিক্লেয়ার করলে সেটা শুধু ফাংশনের মধ্যেই এক্সপ্রেস করা যাবে

// ফাংশনাল scope কে Local Scope বলা হয়







// ***Function Scope__

// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function. They all have Function Scope

// var, let এবং const দিয়ে ফাংশনের মধ্যে কোনো ভেরিবল ডিক্লেয়ার করলে, সেটা শুধু ফাংশনের মধ্যেই এক্সপ্রেস করা যাবে এবং তাদের সবারই ফাংশন স্কোপ আছে

// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }

// function myFunction() {
//   let carName = "Volvo";   // Function Scope
// }

// function myFunction() {
//   const carName = "Volvo";   // Function Scope
// }

//carName can't access out of the function***








// ***Global JavaScript Variables(Global Scope)__

// A global variable has Global Scope. All scripts and functions on a web page can access it.

// Variables declared Globally (outside any function or block scope) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program

// Variables declared with var, let and const are quite similar when declared outside a block. They all have Global Scope

// var a = 2;         // Global scope
// let b = 2;         // Global scope
// const c = 2;       // Global scope

// console.dir(window);


//^^^ JavaScript Variables*****
// In JavaScript, objects and functions are also variables.
//Scope determines the accessibility of variables, objects, and functions from different parts of the code.




//^^^ Automatically Global*****

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.


// function myFunction() {
//   carName = "Volvo";
// }
// myFunction();

// console.log(carName); // returns "Volvo"
// carName will be a global variable. it can access from anywhere in the program.***




//^^^Strict Mode:--> Strict mode is a new feature that helps you to catch common coding mistakes. In "Strict Mode", undeclared variables are not automatically global.**




// ** With JavaScript, the global scope is the JavaScript environment.**

// ** In HTML, the global scope is the 'window' object.**

// Global variables defined with the 'var' keyword belong to the window object.

// Global variables defined with the 'let' and 'const' keywords are not belong to the 'window' object.




//******Warning___
//Do NOT create global variables unless you intend to.

// Your global variables (or functions) can overwrite window variables (or functions). Any function, including the window object, can overwrite your global variables and functions.






//___The Lifetime of JavaScript Variables____

// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

// Global variables are also deleted when you refresh the page.

// Global variables are also deleted when you clear your browser cache.




//***Function Arguments:--> Function arguments (parameters) work as local variables inside functions.










//========JavaScript Hoisting===================================

// Hoisting is JavaScript's default behavior of moving declarations (var a; , let b; , const c; etc) to the top of the current scope. But, 'class' declarations are not hoisted.

// Hoisting allows us to use variables before they are declared.



//****JavaScript Declarations are Hoisted______

// JavaScript শুধুমাত্র Declarations পার্টটুকুকে Hoisting(উপরে তোলা) করা হয় | But, 'class' declarations are not hoisted.

// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).


// Variables defined with 'let' and 'const' are hoisted to the top of the block, but not initialized.

// Variables defined with var are hoisted to the top of the block and initialized to undefined.

// 'let' এবং 'const' এর ক্ষেত্রে JavaScript যে লাইনে এগুলোকে ডিক্লেয়ার করা হয়, সেই লাইনে এগুলোর মান undefined assign করে কিন্তু 'var' এর ক্ষেত্রে JavaScript এটাকে Hoisting করে উপরে নিয়ে যে লাইনে রাখে সেই লাইনে এর মান undefined assign করে





//****JavaScript Initializations are Not Hoisted____
// JavaScript only hoists declarations, not initializations.



//***Declare Your Variables At the Top !__
// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).

// To avoid bugs, always declare all variables at the beginning of every scope.

// Since this is how JavaScript interprets the code, it is always a good rule.

// JavaScript in 'strict mode' does not allow variables to be used if they are not declared. Study "use strict" in the next chapter.










//======JS Strict Mode==========================================================


// "use strict" মোড সম্পূর্ণ file অথবা globally scope এর মধ্যে use করার জন্য সবার উপরে "use strict" লিখতে হবে,  এছাড়া নির্দিষ্ট কিছু functions বা scopes মধ্যে যদি চাই তাহলে "use strict" মোড Use করা যাবে (এখানে উপরে লিখতে হবে)









//====JavaScript ' this ' keyword========================================

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     //  console.log(this.firstName + " " + this.lastName);
//     return this.firstName + " " + this.lastName;
// }
// };
// person.fullName();


// In JavaScript, the this keyword refers to an object.

// The this keyword refers to the object it belongs to.

// The value of the this keyword can be changed.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the 'object'.
// Alone, this refers to the 'global object'.
// In a function, this refers to the 'global object'.
// In a function, in strict mode, this is 'undefined'.
// In an event, this refers to the element that received the event.
//** Methods like call(), apply(), and bind() can refer this to any object.

// Note**'this' is not a variable. It is a keyword. You cannot change the value of 'this'.



//** 'this' in a Method________________
// When used in an object method, 'this' refers to the 'object'.

// Example:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName : function() {
//     console.log(this);
//     return this.firstName + " " + this.lastName;
//   }
// };
// // console.log(person.fullName());




//-------------------------------------------
// ***this Alone_____________
// When used alone, this refers to the global object. Because this is running in the global scope.

// In a browser window the global object is [object Window]:

// console.dir(this);
// console.log(this);

// console.log(window);
// console.dir(window);

//  In 'strict mode', when used alone, 'this' also refers to the global object:






//----------------------------------
// ***'this' in a Function (Default)__________

// In a function, the global object is the default binding for 'this'.

// In a browser window the global object is [object Window]:


// function myFunction() {
//     // console.log(this);
//   return this;
// }
// myFunction();




//----------------------------------------
// **'this' in a Function (Strict mode)_______
//JavaScript strict mode does not allow default binding. So, when used in a function, in strict mode, this is undefined.

// function myFunction() {
//     // "use strict";
//     // console.log(this);
// }
// myFunction();






//-------------------------------------
// ***'this' in Event Handlers_______________

// In HTML event handlers, this refers to the HTML element that received the event







//----------------------
// Object Method Binding**
// Example:
// const person = {
//   firstName  : "John",
//   lastName   : "Doe",
//   id         : 5566,
//   myFunction : function() {
//     // console.log(this);
//     return this;
//   }
// };

// person.myFunction();



// const obj1 = {
//     name : "John",
//     getName : function() {
//         return this.name;
//     }
// }

// console.log(obj1.getName());







//------------------------------------------
// Explicit Function Binding**

// The call() and apply() methods are predefined JavaScript methods. They can both be used to call an object method with another object as argument.

// Example:
// const obj1 = {
//     name : "obj1",
//     getName : function() {
//         return this.name;
//     }
// }

// const obj2 = {
//     name : "obj2"
// }
// console.log(obj1.getName.call({name : "obj2"}));
// console.log(obj1.getName.call(obj2));







/////////^^JavaScript Function bind()^^////////////////////////

// With the bind() method, an object can borrow a method from another object.

// bind() পদ্ধতির সাহায্যে, একটি বস্তু অন্য বস্তু থেকে একটি পদ্ধতি ধার করতে পারে।

// bind() পদ্ধতির সাহায্যে, একটা ফাংশনের সাথে অন্য একটি মেথড বা অবজেক্টকে বাঁধাই করা বা জোড়া লাগানো যায়

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(this);
//     // console.log(this.firstName + " " + this.lastName);
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// // let fullName = person.fullName.bind(member)();
// // console.log(fullName);

// // OR

// let fullName = person.fullName.bind(member);
// console.log(fullName());



// **Preserving 'this': Sometimes the bind() method has to be used to prevent losing this. {কখনও কখনও bind() পদ্ধতিটি এটি হারানো রোধ করতে ব্যবহার করতে হয়।}

// Sometimes the bind() method has to be used to prevent losing this.


//*****When a function is used as a callback, this is lost.
// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   display: function () {
//     let x = document.getElementById("demo");
//     x.innerHTML = this.firstName + " " + this.lastName;
//   }
// }

// setTimeout(person.display, 3000);




// ****The bind() method solves this problem.

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   display: function () {
//     let x = document.getElementById("demo");
//     x.innerHTML = this.firstName + " " + this.lastName;
//   }
// }

// let display = person.display.bind(person);
// // setTimeout(display, 3000);





//*****This Precedence???????????









//=========JavaScript Arrow Function==============================================================

// Normal Function Example:

// const nam = function() {
//     console.log('sohel');
//     return 'sohel';
// }
// nam();

// Arrow Function Example:


// const nam2 = () => {
//     console.log('Khan');
//     return 'Khan';
// }
// nam2();



//**If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword from the function.** This works only if the function has only one statement.

// const nam2 = () => console.log('Khan');
// nam2();

// const nam2 = () => 'Khan';
// console.log(nam2());



//**If you have parameters, you pass them inside the parentheses.**

// const nam2 = (fName) => fName + ' ' + 'Khan';
// const nam2 = (fName) => fName.concat(' ' , 'Khan');
// console.log(nam2('sohel'));



//**If you have only one parameter, you can skip the parentheses as well

// const nam2 = fName => fName + ' ' + 'Khan';
// const nam2 = fName => fName.concat(' ' , 'Khan');
// console.log(nam2('sohel'));





//____________________________________________________________
//****In Arrow Function ,What About 'this' Keyword?***

// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.

//***In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

////***With arrow functions the this keyword always represents the object that defined the arrow function.


//-----Bangla------
// regular functions এর তুলনায় arrow functions এর পরিচালনাও আলাদা।

// সংক্ষেপে, arrow functionsগুলির সাথে 'this' এর কোনও binding  নেই।

//****Regular functions এ 'this' keyword সেই বস্তুটিকে উপস্থাপন করে যে function কে call করে, যা window, document, একটি button  বা অন্য যেকোন কিছু  হতে পারে।

//****Arrow functions এ 'this' keyword সর্বদা সেই বস্তুর প্রতিনিধিত্ব করে যে arrow function কে সংজ্ঞায়িত করে।

// Arrow function টি যদি কোন কিছুর মধ্যে ডিক্লেয়ার করা হয়, তাহলে Arrow function টি উপরের দিকে সর্বোচ্চ লেভেলে চলে যায় এবং তাকে সংজ্ঞায়িত বস্তুটিকে খুঁজে বের করে 


//____________________________________________________________________

// Example: Regular Function--->

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName:  function() {
//     console.log(this);
//     // console.log(this.firstName + " " + this.lastName);
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member)();
// console.log(fullName);




// Example: Arrow Function--->

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName:  () => {
//     console.log(this);
//     // console.log(this.firstName + " " + this.lastName);
//     return this.firstName + " " + this.lastName;
//   }
// }
// // console.log(person.fullName());

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member)();
// console.log(fullName);









//===========JavaScript Classes==============================================

// JavaScript 'Classes' are templates for JavaScript 'Objects'.

// A JavaScript 'class' is not an 'object'. It is a template for JavaScript 'objects'.

// The constructor method is called automatically when a new object is created.

// এর সুবিধা হল বিভিন্ন তথ্য দিয়ে বিভিন্ন রকমের অবজেক্ট তৈরি করা যাবে


// JavaScript Class Syntax:-->
// Use the keyword class to create a class.
// Always add a method named constructor():

// Syntax:
// class ClassName {
//   constructor() { ... }
// }




// Example:--->

// class Person {
//   constructor(name, age, job, gender) {
//     this.Name = name;
//     this.Age = age;
//     this.JobTitle = job;
//     this.Gender = gender;
//     // console.log(this);
   
//   }
// }

// const sohel = new Person('Sohel', 23, 'Web Developer', 'Male');

// const sathi = new Person('Sathi', 23, 'Web Developer', 'Female');

// const rufaida = new Person('Rufaida', 23, 'Web Developer', 'Female');

// console.log(sohel);
// console.log(sathi);
// console.log(rufaida);




// **The Constructor Method________**
// The constructor method is a special method:-->

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties


//** If you do not define a constructor method, JavaScript will add an empty constructor method.

// class Person { }

// const rufaida = new Person('Rufaida', 23, 'Web Developer', 'Female');
// // console.log(rufaida);






//**Class Methods__________**

// Class methods are created with the same syntax as object methods.

// Use the keyword 'class' to create a class.

// Always add a constructor() method.

// Then add any number of methods.



// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//     //  console.log(this);
//   }
//   age(presentYear) {
//     // console.log(presentYear);
//     // console.log(this.year);
//     return presentYear - this.year;
    
//   }
// }

// const date = new Date();
// let yearNow = date.getFullYear();


// const myCar = new Car("Ford", 2014);

// const carAge = myCar.age(yearNow);

// // console.log(carAge);


//---

// class Man{
//   constructor(name, age, job, gender){
//     this.Name = name;
//     this.Age = age;
//     this.JobTitle = job;
//     this.Gender = gender;
//   }
//   jobPosition(position){
//       if(this.JobTitle === position){
//         return `${this.Name} job Position is an ${this.JobTitle}`;
//     }
//   }
// }
// const sohel = new Man('Sohel', 23, 'Web Developer','Male');

// console.log(sohel);
// console.log(sohel.jobPosition("Web Developer"));









//////// JavaScript Class Inheritance ===========================

// To create a class inheritance, use the 'extends' keyword.

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// Inheritance allows you to define a class that inherits all the methods and properties from another class.

// Inheritance allows you to reuse code.

// Inheritance facilitates code reusability.



// Example:--->
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");

// console.log(myCar);
// console.log(myCar.show());



///***The 'super()' method refers to the parent class.

// By calling the 'super()' method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.





///// Classes also allows you to use getters and setters____

// To add getters and setters in the class, use the 'get' and 'set' keywords.

// Example:--->
// class Car {
//   constructor(brand) {
//     this._carname = brand;
//   }
//   get carname() {
//     return this._carname;
//   }
//   set carname(x) {
//     this._carname = x;
//   }
// }

// const myCar = new Car("Ford");
// // const myCar = new Car("");

// console.log(myCar.carname); // if you do not assign any value, it will indicate 'get' method

// console.log(myCar.carname = "Mustang"); // if you assign any value, it will indicate 'set' method



// Hoisting :: class declarations are not hoisted. That means that you must declare a class before you can use it






////////JavaScript Class Static Method=========================

// 'Static' class methods are defined on the class itself.

// 'Static' methods belong to the class, not to any particular object.

// 'Static' methods can be called without creating any particular object.

// ক্লাসের একটি উদাহরণ তৈরি না করেই স্ট্যাটিক পদ্ধতি called kora যেতে পারে।

// You cannot call a 'static' method on an object, only on an object class.


// Example:--->//Without 'static' method 
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//    hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// console.log(myCar.hello()); 



// Example:---> //Use 'static' method 
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// console.log(Car.hello()); // You can call 'hello()' on the Car Class because 'hello' is a static method.


//**** If you want to use the class object inside the static method , you can send class object as a parameter

//Example:---> // Use 'static' method 
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     // console.log(this);
//     return "Inside Hello Method : " + x.name;
//   }
// }
// const myCar = new Car("Ford");

// console.log(Car.hello(myCar)) // class object as a parameter




/////Four Examples of 'static' method-------

// Example:--->//Without 'static' method _________
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//    hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// console.log(myCar.hello()); 




// Example:---> //Use 'static' method ________
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// const myCar = new Car("Ford");

// console.log(Car.hello()); // You can call 'hello()' on the Car Class because 'hello' is a static method.




//Example:---> // Use 'static' method & send static method parameter_______
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     // console.log(this);
//     return "Inside Hello Method : " + x.name;
//   }
// }
// const myCar = new Car("Ford");

// console.log(Car.hello(myCar)) // class object as a parameter





// 'Static' methods can be called without creating any particular object._____
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     // console.log(this);
//     return "Inside Hello Method";
//   }
// }

// console.log(Car.hello()) 












//============JavaScript JSON(JavaScript Object Notation)===================================================
// JSON is a format for storing and transporting data.

// It is a text format that is used to send data between computers.

// JSON is often used when data is sent from a server to a web page.

// It is lightweight and easy to understand.

// It is used to send data from a server to a web page.

// It is used to send data from a web page to a server.

// It is easy to embed in HTML.

// It is easy to send from one computer to another.

// It is easy to read and write.

// It is easy to parse and generate.

// It is easy to validate and reject invalid data.



// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.


// The JSON format is syntactically identical to the code for creating JavaScript objects. Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.



///**JSON Syntax Rules___

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays


//** JSON names require double quotes. JavaScript names do not.

// JSON objects are written inside curly braces.
// JSON arrays are written inside square brackets.

// A common use of JSON is to read data from a web server, and display the data in a web page.

//** JavaScript built-in function JSON.parse() মাধ্যমে JSON data(text) গুলোকে JavaScript object এ রূপান্তর করা হয়

//** JSON.stringify() এর মাধ্যমেJavaScript এর object গুলোকে JSON data(text) রূপান্তর করা হয়




///JSON Data to Js Object__Using JSON.parse()

// const jsonData ='{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// console.log(JSON.parse(jsonData));



/// Js Object to JSON data__Using JSON.stringify()

// const obj = {
//     name : 'sohel',
//     age : 23,
// }

// console.log(JSON.stringify(obj));








//=========JavaScript Debugging==================================================

// The 'debugger' keyword stops the execution of JavaScript, and calls (if available) the debugging function.

// Debugging is the process of testing, finding, and reducing bugs (errors) in computer programs.
// The first known computer bug was a real bug (an insect) stuck in the electronics.


// let y = 150 / x;
// // debugger;
// var x = 15 * 5;
// console.log(y);



 


  




//==============JavaScript Objects================================================================

//*********JavaScript Object Definitions------------------------
// In JavaScript, almost "everything" is an object:

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects


// All JavaScript values, except primitives, are objects.






//**JavaScript Primitives_____
// A primitive value is a value that has no properties or methods.

// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types: string, number, boolean, null, undefined, symbol, bigint

// Primitive values are immutable (they are hardcoded and cannot be changed).





//***Objects are Variables____

// JavaScript variables can contain single values and also contain many values.

// Objects are variables too. But objects can contain many values.

// Object values are written as name : value pairs (name and value separated by a colon)

// A JavaScript object is a collection of named values

// It is a common practice to declare objects with the const keyword.





//***Object Methods____
// Methods are actions that can be performed on objects.

// Object properties can be both primitive values, other objects, Other methods, and functions

// JavaScript objects are containers for named values, called properties and methods.



// Using an Object Literal is the easiest way to create a JavaScript Object.

// An object literal is a list of name:value pairs (like age:50) inside curly braces {}.






// Objects are mutable (they can be changed): They are addressed by reference, not by value.

// EXAMPLE:
// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:50, eyeColor:"blue"
// }

// const x = person; // The object x is not a copy of person. It is person. Both x and person are the same object.
// x.age = 10;  // change both x and person objects

// console.log(person);
// console.log(x);

// person.lastName = 'Gho' // change both x and person objects

// console.log(person);
// console.log(x);









//========JavaScript Object Properties=========================================

// Properties are the most important part of any JavaScript object.

// Properties are the name/value pairs that make up an object.

// Properties are written inside curly braces {} in an object literal.

// Properties can be accessed using dot notation or bracket notation.(objectName.property  or objectName['property'])

// Properties can be changed using dot notation or bracket notation.(objectName.property = value  or objectName['property'] = value)

// Properties can be deleted using the delete keyword.(delete objectName.property or delete objectName['property'])

// Properties can be added using the assignment operator (objectName.property = value or objectName['property'] = value)

// Properties can be checked for existence using the ' in ' keyword. it returns true if the property exists in the object, Otherwise it returns false.

// const obj = {
//     name : 'sohel',
//     age : 23,
//     address : 'dhanmondi',  
// }

// console.log('age' in obj); // returns true


// A JavaScript object is a collection of unordered properties.

// Properties can usually be changed, added, and deleted, but some are read only.

// The JavaScript ' for...in ' statement loops through the properties of an object.

// syntax:--> 
// for (let variableName in objectName) {
//   // code to be executed
// }

// Example:
// const person = {
//   fname:" John",
//   lname:" Doe",
//   age: 25
// };

// for (let x in person) {
// //   console.log(x);
// //   console.log(person[x]);
// }



//**Deleting Properties:::
//The ' delete ' keyword deletes a property from an object.

// The delete keyword deletes both the value of the property and the property itself.

// The delete operator is designed to be used on object properties. It has no effect on variables or functions.

// The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

// Example:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// delete person["age"];
// // console.log(person);



//***Property Attributes:::
// All properties have a name. In addition they also have a value.

// The ' name ' and ' value ' are called property names and property values, respectively.

// The value is one of the property's attributes. Other attributes are: enumerable, configurable, and writable.

// The ' enumerable ' attribute specifies whether the property is visible to ' for...in ' loops.

// The ' configurable ' attribute specifies whether the property can be deleted from an object.

// The ' writable ' attribute specifies whether the value of the property can be changed.









//===============JavaScript Object Methods========================

// Methods are actions that can be performed on objects.

 
// What is 'this'???
// In JavaScript, the 'this' keyword refers to an object.

// Which object depends on how 'this' is being invoked (used or called).

// The 'this' keyword refers to different objects depending on how it is used:

// In an object method, 'this' refers to the object.
// Alone, 'this' refers to the global object.
// In a function, 'this' refers to the global object.
// In a function, in strict mode, 'this' is undefined.
// In an event, 'this' refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer 'this' to any object.


////this is not a variable. It is a keyword. You cannot change the value of this.

// Methods are functions stored as object properties.








//===========JavaScript Display Objects==================

// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name:

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// document.getElementById("demo").innerHTML =
// person.name + "," + person.age + "," + person.city;




// Displaying the Object Properties ' for..in ' a Loop:

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// let txt = "";
// for (let x in person) {
// txt += person[x] + " ";
// };

// document.getElementById("demo").innerHTML = txt;



// Displaying the Object using ' Object.values() ':

// Any JavaScript object can be converted to an array using Object.values():



// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const myArray = Object.values(person); // collects the values

// document.getElementById("demo").innerHTML = myArray;



// Displaying the Object using ' JSON.stringify() '

// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;



//***'JSON.stringify()' converts dates into strings**:

// const person = {
//   name: "John",
//   today: new Date()
// };

// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;



// ***'JSON.stringify()' will not stringify functions:**:

// const person = {
//   name: "John",
//   age: function () {return 30;}
// };
// person.age = person.age.toString();

// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;



//****stringify JavaScript arrays:******

// const arr = ["John", "Peter", "Sally", "Jane"];

// let myString = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = myString;










//===========JavaScript Object Accessors======================

// Getters and setters allow you to define Object Accessors (Computed Properties).

// Getters and setters are useful when you want to provide controlled access to an object's properties.

// Getters return the value of an object's property, while setters assign a new value to an object's property.

// Getters and setters are created with the get and set keywords.


//**JavaScript Getter (The get Keyword)__
// Getters(get) return the value of an object's property.

// Example:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   }
// };

// // Display data from the object using a getter:

// console.log(person.lang);
// document.getElementById("demo").innerHTML = person.lang;





// ****JavaScript Setter (The set Keyword)___
// Setters(set) assign a new value to an object's property.

// Example:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(lang) {
//     this.language = lang;
//   }
// };

// // Set an object property using a setter:
// person.lang = "en";

// console.log(person.language);

// // Display data from the object:
// document.getElementById("demo").innerHTML = person.language;




//**JavaScript can secure better data quality when using getters and setters.**


// Why Using Getters and Setters???

// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes




//**The 'Object.defineProperty()' method can also be used to add Getters and Setters to an existing object.**

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// //   get fullName() {
// //     return this.firstName + " " + this.lastName;
// //   }
// };

// Object.defineProperty(person, "fullName", {
//   get : function () {
//     return this.firstName + " " + this.lastName;
// }
// });

// console.log(person.fullName);











//========JavaScript Object Constructors=============================

// It is considered good practice to name constructor functions with an upper-case first letter.

// it is like "blueprint" for creating many objects of the same "type".

// Example: // Function name should be capitalized. 

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }


// In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.


// Main Example:

// function Person(firstName, lastName, age, eye) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.eyeColor = eye;
// }


// Create an object using the Person constructor:

// const sohel = new Person("Sohel", "Khan", 26, "black");
// const sathi = new Person("Sathi", "Fahir ", 22, "brown");
// const rufaida = new Person("Rufaida", "Sohel", 2.2, "black");

// // console.log(sohel, sathi, rufaida);

// rufaida.middleName = "Binte";

// sathi.fullName = function() {
//     return this.firstName + " " + this.lastName;
// };
// sohel.fullName = function() {
//     return this.firstName + " " + this.lastName;
// };

// rufaida.fullName = function() {
//     return this.firstName + " " + this.middleName + " " + this.lastName;
// };

// // console.log(sohel, sathi, rufaida);
// // console.log(sohel.fullName());
// // console.log(sathi.fullName());
// // console.log(rufaida.fullName());




//***Built-in JavaScript Constructors***
// JavaScript has built-in constructors for native objects:___

// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object


//**The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.











//======JavaScript Object Prototypes============================

// All JavaScript objects inherit properties and methods from a prototype.

// The prototype is an object that is used as a blueprint for creating objects.

// The prototype is not created in the same way that the constructor is created. The prototype is an object that is shared among all objects that inherit from it.

// The prototype is not a property of the object. It is a property of the constructor function.

//***Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

// function Person(name, age) {
//     this.Name = name;
//     this.age = age;
// }

// const masum = new Person('Masun Billah', 23)

// console.log(masum);

// Person.prototype.FirstName = 'Masum';
// console.dir(Person.prototype);

// console.log(masum.FirstName);









//=========JavaScript Iterables====?????=========================

// Iterable objects are objects that can be iterated over with ' for..of '.

// The ' for..of ' loop iterates over the values of an iterable object.

// Technically, iterables must implement the Symbol.iterator method.

// যদি কোন object এর prototype এর মধ্যে ' Symbol.iterator ' method থাকে তাহলে ওই object টি iterable করা সম্ভব অন্যথায় ওই object এর মধ্যে ' Symbol.iterator ' method add করে তারপর object টি iterable করতে হবে,  ' for..of ' loop সাহায্যে 

//**Iterating Over a String__

// let nam = 'sohel';

// for (x of nam) {
//     console.log(x);
// }

//**Iterating Over an Array__

// const nams = ['sohel', 'masum', 'rufaida'];

// for (x of nams) {
//     console.log(x);
// }


// A JavaScript iterable is an object that has a 'Symbol.iterator'.

// The 'Symbol.iterator' is a function that returns a ''next()'' function.

//**Iterating Over a Object__
// object এর মধ্যে ' Symbol.iterator ' method add করে তারপর object টি iterable করতে হবে,  ' for..of ' loop সাহায্যে 

// let myNumbers = {};

// myNumbers[Symbol.iterator] = function() {
//   let n = 0;
//   let done = false;
//   return {
//     next() {
//       n += 1;
//       if (n == 100) {done = true}
//     //   console.log(n, done);
//       return {value:n, done:done};
//     }
//   };
// }


// for (num of myNumbers) {
//   console.log(num);
// }

// console.log(myNumbers);














//=========^^^^^ JavaScript Function ^^^^^=============================================



//=======JavaScript Function Definitions=======================

// JavaScript functions are defined with the 'function' keyword.

// You can use a function 'declaration' or a function 'expression'.



//----Function Declarations_____

// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

//Syntax:

// function functionName(parameters) {
//   // code to be executed
// }

// এক বা একাধিক parameters থাকতে পারে 

// Semicolons are used to separate executable JavaScript statements. Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

//Example:
// function myFunction(a, b) {
//   return a * b;
// }

// এই function টা যেকোনো সময় called বা invoked by it name






//-----Function Expressions____(anonymous function)
// A JavaScript function can also be defined using an expression.

//Syntax:
// const x = function (a, b) {return a * b};


// A function expression has been stored in a variable, the variable can be used as a function

// A function without a name is actually an anonymous function

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.







//---The Function() Constructor_____

// Functions can also be defined with a built-in JavaScript function constructor called 'Function().'

// It is exactly the same as the regular function declaration.('function' keyword.)

// const myFunction = new Function("a", "b", "return a * b");
// let x = myFunction(4, 3);






//----Function Hoisting____
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

// Hoisting applies to variable declarations and to function declarations. Because of this, JavaScript functions can be called before they are declared:

//Like that__--:
// myFunction(5);

// function myFunction(y) {
//   return y * y;
// }


//***Functions defined using an expression are not hoisted.

// myFunction(3, 4); // Not Working

// const myFunction = function(x, y) {return x * y; };

// myFunction(3, 4); // It is Working







//---Self-Invoking Functions___
// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.

// it is also called as 'immediately invoked function expression'.(IIFE)

// It is also called anonymous self-invoking function(function without name).


// Syntax:
// (function () {
//   let x = "Self-Invoking!!";  // I will invoke myself
// //   console.log(x);
// })();






//**Functions are Objects
// JavaScript functions can best be described as objects. 

// JavaScript functions have both properties and methods.

// The arguments.length property returns the number of arguments received when the function was invoked



//*******
// A function defined as the property of an object, is called a method to the object.

// A function designed to create new objects, is called an object constructor.
//*******





//***Arrow Functions____

// Arrow functions do not have their own 'this'. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement.

// The handling of 'this' is also different in arrow functions compared to regular functions. With arrow functions there are no binding of 'this'.

// In regular functions the 'this' keyword represented the object that called the function, which could be the window, the document, a button or whatever.

// In arrow functions the 'this' keyword always represents the object that defined the arrow function.











//=======JavaScript Function Parameters===================

// A JavaScript function does not perform any checking on parameter values (arguments).

// function functionName(parameter1, parameter2, parameter3) {
//   // code to be executed
// }


// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.



/////^^Parameter Rules^^////////

// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the passed arguments.


// JavaScript functions do not check the number of arguments received.

// JavaScript functions do not hava default values for parameters.

// If a function is called with missing arguments (less than declared), the missing values are set to undefined.

// function myFunction(x, y) {
//     console.log(x); // return undefined
// }

// myFunction()






////^^Default Parameter Values^^/////////////////////

// function parameters to have default values.

// function myFunction(x, y = 10) {
//   console.log(x, y);
// }
// myFunction(5);

// function myFunction(x, y = 10) {
//   console.log(x, y);
// }
// myFunction(5, 20);






/////^^Function Rest Parameter^^^////////////////

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// function sum(...args) {
//   console.log(args);
// }

// sum(4, 9, 16, 25, 29, 100, 66, 77);



// function myFunction(a, b, c, ...d) {
//   console.log(a, b, c);
//   console.log(d);
//   console.log(arguments);
  
// }

// myFunction(4, 9, 16, 25, 29, 100, 66, 77);





//////^^functions Arguments Object^^/////////////////////////

// JavaScript functions have a built-in object called the arguments object.

// The arguments object is an array-like object containing the function's arguments.

// The argument object contains an array of the arguments used when the function was called (invoked).

// The arguments object has a length property that returns the number of arguments passed to the function.


// function myFunction() {
//   console.log(arguments);
//   console.log(arguments.length);
// }

// myFunction(4, 9, 16, 25, 29, 100, 66, 77);


// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

// function myFunction(a, b, c) {
//   console.log(a, b, c);
//   console.log(arguments);
  
// }

// myFunction(4, 9, 16, 25, 29, 100, 66, 77);






//////^^Arguments are Passed by Value^^///////////////////

// The parameters, in a function call, are the function's arguments.

// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

// If a function changes an argument's value, it does not change the parameter's original value.

//**Changes to arguments are not visible (reflected) outside the function.

// let x = 2;
// let y = 3;


// function myFunction(a, c) {
//     a = 5; // it is not change the parameter's original value
//   console.log(a, c);
  
// }

// myFunction(x, y)
// console.log(x, y);






////////^^^Objects are Passed by Reference^^^///////////////////////////

// In JavaScript, object references are values. Because of this, objects will behave like they are passed by reference:

// If a function changes an object property, it changes the original value.

//**Changes to object properties are visible (reflected) outside the function.


// let x = {name: 'sohel', age: 23};

// function myFunction(a) {
//     // a.name = 5; // it is change the parameter's original value
//   console.log(a);
// }

// myFunction(x)
// console.log(x);










//========JavaScript Function Invocation======================================

// The code inside a JavaScript function will execute when "something" invokes it.


/////^^Invoking a JavaScript Function^^////////////////////////

// The code inside a function is not executed when the function is defined.

// The code inside a function is executed when the function is invoked.

// It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function".


///**JavaScript function can be invoked without being called.**





//// Invoking a Function as a Function____


// function myFunction(x, y) {
//     console.dir(this); // console.dir(window); //-> Both return the window object
//   return x / y;
// }


// myFunction() and window.myFunction() is the same function:
// myFunction(45, 3);  
// console.log(window.myFunction(45, 3));


//**JavaScript there is always a default global object. In a browser the page object is the browser window. The function above automatically becomes a window function.


// This is a common way to invoke a JavaScript function, but not a very good practice. Global variables, methods, or functions can easily create name conflicts and bugs in the global object.







////The Global Object______
// In JavaScript, the 'this' keyword refers to an object. Which object depends on how 'this' is being invoked (used or called .The 'this' keyword refers to different objects depending on how it is used:

// When a function is called without an owner object, the value of 'this' becomes the global object. But, When a function is called with an owner object, the value of 'this' becomes the owner object.

// In a web browser the global object is the browser window.

// function myFunction() {
//   return this; // This "this" refer to the window
// }

// let x = myFunction(); // x will be the window object
// console.log(x);
// console.dir(x);


// If Invoking a function as a global function, the value of 'this' to be the global object.






/////Invoking a Function as a Method____

// In JavaScript you can define functions as object methods.

// const myIntro = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(this); // it return the myIntro object
//     return this.firstName + " " + this.lastName;
//   }
// }
// console.log(myIntro.fullName());

// In this example, the value of 'this' refers to the myIntro object. Because the myIntro object is the owner of the fullName method.

// Invoking a function as an object method, causes the value of 'this' to be the object itself.






////Invoking a Function with a Function Constructor____

// If a function invocation is preceded with the 'new' keyword, it is a constructor invocation.


// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
//   console.log(this); // it return the myFunction object
// }

// // This creates a new object
// const myObj = new myFunction("John", "Doe");

// console.log(myObj); // it return the myFunction object


// console.log(myObj.firstName);
// console.log(myObj.lastName);

// Both are return same result
// console.log(this.myFunction);
// console.log(window.myFunction);




//**যদি 'new' keyword দিয়ে কোন ফাংশন কে invoked করা হয় তখন সেই ফাংশনের মধ্যে 'this' বলতে ওই ফাংশনটিকে বুঝায়, এছাড়া 'this' বলতে গ্লোবাল অবজেক্টকে (উইন্ডো অবজেক্ট) বুঝায়

// The 'this' keyword in the constructor does not have a value.
// The value of 'this' will be the new object created when the function is invoked.













/////^^JavaScript Function 'call()'^^////////////////////////

// With the 'call()' method, you can write a method that can be used on different objects.


// In JavaScript all functions are object methods.

// If a function is not a method of a JavaScript object, it is a function of the global object :::

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(this); // 'this' refers to the person object
//   }
// }
// person.fullName(); 

//----------

//  function fullName() {
//     console.log(this); // 'this' refers to the window object
// }
// fullName()




// With the 'call()' method, you can write a method that can be used on different objects.

//  function fullName() {
//     console.log(this); // 'this' refers to the call() method argument(object)
// }
// fullName.call({name: 'sohel', age: 23});






//**The JavaScript call() Method______

// The 'call()' method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With 'call()', an object can use a method belonging to another object.

// 'call()' method is accept only first object and then accept others arguments as perameters

// The call() method takes arguments separately.



// Example: Accept Object 
// const person = {
//   fullName: function() {
//     console.log(this); // // 'this' refers to the call() method argument(object)
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// console.log(person.fullName.call(person1, person2)); // it is accept only first onject and then accept arguments as perameters
// console.log(person.fullName.call(person2));




// Example: Accept Object  and then others arguments
// const person = {
//   fullName: function(secondArg, thirdArg) {
//     console.log(this); // // 'this' refers to the call() method argument(object)

//     console.log(secondArg); // accept second argument by perameter

//     console.log(thirdArg); // accept third argument by perameter

//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// console.log(person.fullName.call(person1, person2)); // it is accept only first object and then accept arguments as perameters

// console.log(person.fullName.call(person2, 'hello', 'world'));









////////^^JavaScript Function apply()^^///////////////////////////////////////////

// With the apply() method, you can write a method that can be used on different objects.

// The apply() method is similar to the call() method .

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With 'apply()', an object can use a method belonging to another object.

// 'apply()' method is accept only first object and then accept other Array arguments as perameters

// The 'apply()' method takes arguments as an array.

// The apply() method is very handy if you want to use an array instead of an argument list.



//Example: Accept object
// const person = {
//   fullName: function() {
//     console.log(this); // // 'this' refers to the apply() method argument(object)
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// console.log(person.fullName.apply(person1)); // it is accept only first object and then accept Array arguments as perameters.
// console.log(person.fullName.apply(person2));




// Example: Accept Object  and then Array arguments 
// const person = {
//   fullName: function(secondArg, thirdArg) {
//     // console.log(this); // 'this' refers to the apply() method argument(object)

//     // console.log(secondArg); // accept second argument by perameter

//     // console.log(thirdArg); // accept third argument by perameter

//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// console.log(person.fullName.apply(person1, person2)); // it is accept only first object and then accept arguments Array as perameters

// console.log(person.fullName.apply(person2, ['hello', 'world']));


///****In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.


// const person = {
//   fullName: function() {
//     console.log(this); // // 'this' refers to the window object
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// console.log(person.fullName.apply(person1, person2)); // it is accept only first object and then accept arguments Array as perameters

// console.log(person.fullName.apply(null, ['hello', 'world']));
// console.log(person.fullName.apply("sohel", ['hello', 'world']));
// console.log(person.fullName.apply(0, ['hello', 'world']));





// // Find max & min value in an array/////
// console.log(Math.max.apply(null, [1,2,3]));
// console.log(Math.min.apply(null, [1,2,3]));
// console.log(Math.max.apply('', [1,2,3]));
// console.log(Math.min.apply('', [1,2,3]));






////////////////^^^ lexical scope ^^^///////////////
// parent ফাংশনের উপাদান, child ফাংশনে এক্সেস করার যায়, আর এটি করা যায় lexical scope এর সাহায্যে

// function outer() {
//     let x = "hello";
//     const obj = {age: 25};
//     const arr = [1, 2, 3];
//     function inner() {
//         console.log(x, obj, arr);
//     }
//     inner();
// }

// outer()
// এখানে x, obj, arr এই উপাদানগুলো lexical scope এর সাহায্যে outer ফাংশন থেকে inner ফাংশনে ঢুকেছে



////////^^JavaScript function Closures^^//////////////////////////////////////////

// A closure is a function having access to the parent scope, even after the parent function has closed.

// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.

// যদি কোন scope end হয়ে যায় এবং end কৃত scope মান যদি অন্য scope এ ব্যবহার করা হয়, তখন সেই scope(যেখানে end কৃত scope এর মান ব্যবহার করা হয়েছে বা inner Scope) এ ক্লোজার ওপেন হয়ে যায় এবং end কৃত scope(outer Scope) এর মান গুলো ক্লোজার এর মধ্যে জমা হয়ে থাকে

// function outer () {
//     let x = "hello";
//     const obj = {age: 25};
//     const arr = [1, 2, 3];
//     function inner () {
//         var a = 5;
//         console.log(x, obj, arr);
//     }
//     // console.dir(inner);
//     return inner;
// }

// const inner = outer(); // ending outer function scope

// console.dir(inner);

// inner()

// এখানে outer ফাংশন called বা invoked করার সাথে সাথেই inner ফাংশনে একটি ক্লোজার স্কোপ ওপেন হয়েছে

/// In a web page, global variables belong to the page. Global variables can be used (and changed) by all other scripts in the page.

// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code. Global and local variables with the same name are different variables. Modifying one, does not modify the other.

///**Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.


// Global variables live(Lifetime) until the page is discarded(closed), like when you navigate to another page or close the window.


// But Local variables have short lives(Lifetime). They are created when the function is invoked(called), and deleted when the function is finished.






///JavaScript Nested Functions____

// All functions have access to the global scope.  

// In fact, in JavaScript, all functions have access to the scope "above" them. JavaScript supports nested functions. Nested functions have access to the scope "above" them.













//=============== Asynchronous JavaScript ====================================


//////JavaScript Callbacks_("I will call back later!")_______

// A callback is a function passed as an argument to another function. This technique allows a function to call another function

// A callback function can run after another function has finished


// Function Sequence---
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.


// function myFirst() {
// console.log('myFirstF');
// }

// function mySecond() {
//   console.log('mySecondF');
// }

// myFirst();
// mySecond();

// mySecond();
// myFirst();


//***Sometimes you would like to have better control over when to execute a function.

// Example:-1
// function myDisplayer(some) {
//   console.log(some);;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);



// Example:-2 other way

// function myDisplayer(some) {
//   console.log(some);;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);




//****For better control over when to execute a function, use a callback function.

// A callback is a function passed as an argument to another function.

// Example:-
// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer); // 'myDisplayer' is a called a callback function. It is passed to myCalculator() as an argument.

// argument মন চাইলে ব্যবহার করতে পারবো, আর মন না চাইলে ব্যবহার করবো না | এটাই হল callback function এর সুবিধা

// When you pass a function as an argument, remember not to use parenthesis.


//When to Use a Callback?-->>: Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).








/////// JS Asynchronous Behaviors_("I will finish later!"________

// JS default behaviour is synchronous, which means that the code runs line by line. But JS default behaviour can be changed to Asynchronous behaviour, In asynchronous way, it will run in parallel.


// Functions running in parallel with other functions are called asynchronous functions. {A good example is JavaScript setTimeout()}

// Asynchronous functions can run in parallel with other asynchronous functions.

// In the real world, callbacks are most often used with asynchronous functions.

//***When you pass a function as an argument, remember not to use parenthesis.


// Example:-1
// function myDisplayer(something) {
//   console.log(something);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   console.log(sum);
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);





// Example:-2________

// function myFunction() { console.log('Into setTimeout'); }

// console.log('Before setTimeout');

// setTimeout(myFunction, 3000); // myFunction is used as a callback.

// console.log('After setTimeout');

//***When you pass a function as an argument, remember not to use parenthesis.


//----
// function myFunction(value) { console.log(value);}

// setTimeout(function() { myFunction("SoHeL"); }, 3000);


// setTimeout(function() {console.log('Into setTimeout');}, 3000);




// Example:-3________

// setInterval(function() {console.log('Into setTimeout');}, 3000);



// function myFunction(value) { console.log(value);}

// setInterval(function() { myFunction("SoHeL"); }, 3000);



// function myFunction() { console.log('Into setTimeout'); }

// console.log('Before setTimeout');

// setInterval(myFunction, 3000); // myFunction is used as a callback.

// console.log('After setTimeout');








/////// JS Asynchronous Behaviors[JS Promises]_"I Promise a Result!"________

// "Producing code" is code that can take some time and "Consuming code" is code that must wait for the result. A Promise is an Object that links "Producing code and Consuming code"

// let x = 0;

// function myDisplayer(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function(myResolve, myReject) {
 
//   if (x === "0") {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);}
// );




////**Promise Object Properties**////////
// Pending, Fulfilled, Rejected

// The Promise object supports two properties: state and result.__

// The "state" is a string that can be one of the following values: pending, fulfilled, or rejected.

// The 'result' is the value that was fulfilled or rejected.


// While a Promise object is "pending" (working), the result is 'undefined'.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.



// Promise.then() takes two arguments, a callback for success and another for failure.

// Both are optional, so you can add a callback for success or failure only.



// let myPromise = new Promise(function(Resolve, Reject) {
//   setTimeout(function() {Resolve("Coding Lover!!"); }, 3000);
// });

// myPromise.then(function(value) {
// console.log(value);});









/////// JS Asynchronous Behaviors('async' and 'await')________

//**  'async' and 'await' make promises easier to write

// 'async' makes a function return a Promise

// 'await' makes a function wait for a Promise



// The keyword 'async' before a function makes the function return a promise

//Like: 
// async function myFunction() {return "Hello"}

// Or

//  function myFunction() {return Promise.resolve("Hello")}




// The 'await' keyword can only be used inside an 'async' function.

// The 'await' keyword makes the function pause the execution and wait for a resolved promise before it continues


// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("Coding Lover!!");
//   });
//    return await myPromise;
// }
// myDisplay().then(function(result){
//     console.log(result);
// }); 




// The two arguments (resolve and reject) are pre-defined by JavaScript. We will not create them, but call one of them when the executor function is ready. Very often we will not need a reject function.












//======= JS HTML DOM ====================================

//**With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// When a web page is loaded, the browser creates a Document Object Model of the page.


//** With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page


// HTML DOM methods are actions you can perform (on HTML Elements).

// HTML DOM properties are values (of HTML Elements) that you can set or change.

// In the DOM, all HTML elements are defined as objects.

// The HTML DOM document object is the owner of all other objects in your web page.

// The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.


// Never use " document.write() " after the document is loaded. It will overwrite the document.


// HTML form validation can be done by JavaScript.


const inputValue = document.querySelector('#new-task');

const form = document.querySelector('form');

const inComTaskItems = document.querySelector('#items');

const comtaskItems = document.querySelector('.complete-list ul');


let createTask = (newTask) => {
    let listItem = document.createElement('li');
    let checkBoxInput = document.createElement('input');
    checkBoxInput.type = 'checkbox';
    let label = document.createElement('label');
    label.innerText = newTask;

    // listItem.appendChild(checkBoxInput);
    // listItem.appendChild(label);

    listItem.append(checkBoxInput, label);

    return listItem;   

}

let addTask = (e) => {
    e.preventDefault();
    let listItem = createTask(inputValue.value);
    inComTaskItems.appendChild(listItem);

    form.reset();

    comCheckMark(listItem, addToComSection);
}



function addToComSection() {
    let listItem = this.parentNode;
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');
    listItem.appendChild(delBtn);

    comtaskItems.appendChild(listItem);

    clickDelBtn(listItem, deleteTask);

    
}

let deleteTask = function() {
    let parent = this.parentNode;
    let grandParent = parent.parentNode;
    grandParent.removeChild(parent);
    
}


let clickDelBtn = (taskItem, deleteBtnClick) => {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteBtnClick;
}


const comCheckMark = (listItem, taskComMark) => {
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = taskComMark;

}



form.addEventListener('submit', addTask);



































