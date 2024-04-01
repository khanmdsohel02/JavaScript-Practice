

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
var n = 'Muhammad sajid';
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

const arrNumbers = [45, 4, 16, 9, 16, 25, 16, 50];

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
// max(x, y, z, ..., n)	      Returns the number with the highest value
// min(x, y, z, ..., n)	      Returns the number with the lowest value
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

// const mySet = new Set(num);
// const mySet = new Set(['red', 'green', 'blue', 'yellow']);
// console.log(mySet);





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
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.


//^^^^^Create a Map^^^^^^^^
// Passing an Array to new Map()
// Create a Map and use Map.set()



// **Map Methods**

// new Map(iterable)	    
// Creates a new Map object
// new Map()	           
// Creates a new Map object

// const fruits = [
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ];
// console.log(fruits);

// const myMap = new Map(fruits);
// console.log(myMap);






//---------------------------------------------
// set()	                
// Adds one or more key-value pairs to the Map

// myMap.set("kiwi", 100);
// myMap.set(50, 100);
// myMap.set(true, 100);





//-------------------------------------------
// get()	                
// Returns the value of the specified key in a Map

// console.log(myMap.get(50));
// console.log(myMap.get('apples'));






//-------------------------------------------
// has()	                
// Returns true if a key exists in a Map

// console.log(myMap.has('kiwi')); // return true
// console.log(myMap.has(50)); // return true
// console.log(myMap.has('50')); // return false






//-------------------------------------------
// delete()	            
// Removes a Map element specified by a key

// console.log(myMap.delete(50)); // return true
// console.log(myMap.delete('50')); // return false




//-------------------------------------------
// clear()	            
// Removes all elements from a Map

// console.log(myMap.clear()); // return undefined
// console.log(myMap); // return empty map






//-------------------------------------------
// forEach()	        
// Executes a provided function once for each Map element







//-------------------------------------------
// entries()	        
// Returns a new Iterator object containing the [key, value] for each element in the Map

// console.log(myMap.entries()); 




//-------------------------------------------
// keys()	            
// Returns a new Iterator object containing the keys for each element in the Map

// console.log(myMap.keys()); 






//-------------------------------------------
// values()	        
// Returns a new Iterator object containing the values for each element in the Map

// console.log(myMap.values()); 






//-------------------------------------------
// toString()	        
// Returns a string that contains all the elements in the Map







//-------------------------------------------
// [Symbol.iterator]()	
// Returns a new Iterator object that contains the values for each element in the Map







//-------------------------------------------
// [Symbol.toStringTag]	
// Returns a string that contains all the elements in the Map





//-------------------------------------------
// valueOf()	        
// Returns the Map itself

// console.log(myMap.valueOf()); // return the map itself
// console.log(myMap);




//-------------------------------------------
// toJSON()	        
// Returns a JSON representation of the Map




//^^^^Property^^^^^^^^
// size  
// Returns the number of elements in a Map

// console.log(myMap.size); // return length of map










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




