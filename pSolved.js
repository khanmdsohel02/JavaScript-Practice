// 1.<<<<<Return random number between 1 to 6>>>>>>>>>>

// console.log(Math.floor(Math.random() * 6) + 1);

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// let random = getRndInteger(1, 6);
// // console.log(random);



// 2.<<<<কিভাবে আপনি আপনার ক্লাসে শিক্ষার্থীদের নাম বর্ণানুক্রমিকভাবে (Alphabetically) অর্ডার করতে পারেন?>>>>

// const studentNames = ["Abdul", "Rahman", "Sami", "Rizwan", "Noman", "Sami", "Rizwan", "Noman"];

// console.log(studentNames.toSorted()); // primery array ke poriborton kore na
// console.log(studentNames.sort()); // primery array ke poriborton kore
// console.log(studentNames);



// 3.<<<<<<<কিভাবে আপনি আপনার ক্লাসে শিক্ষার্থীদের রোল নম্বর ক্রমাগতভাবে অর্ডার করতে পারেন?>>>>>>

// const studentRoll = [23, 53, 3, 46, 4, 1, 45];

//ছোট থেকে বড়
// console.log(studentRoll.sort(function(a, b){return a - b}));
// console.log(studentRoll.toSorted(function(a, b){return a - b}));

// function sortNum(a, b) {
//     // console.log(a, b);
//     return a - b;
    
// }

// console.log(studentRoll.sort(sortNum));;
// console.log(studentRoll.toSorted(sortNum));;

//বড় থেকে ছোট
// console.log(studentRoll.sort(function(a, b){return b - a}));
// console.log(studentRoll.toSorted(function(a, b){return b - a}));

// function sortNum(a, b) {
//     // console.log(a, b);
//     return b - a;
    
// }

// console.log(studentRoll.sort(sortNum));;
// console.log(studentRoll.toSorted(sortNum));;






// 4. <<<<একটি ফাংশন লিখুন যা আমাদের বলতে পারে একটি বছর একটি অধিবর্ষ কিনা>>>>>>>

// let date = new Date();
// let year = date.getFullYear();

// // let year = date.getFullYear(date.setFullYear(2017));

// // console.log(year);

// // console.log(date.getFullYear(date.setFullYear(2021)));

// function isLeapYear(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         console.log(`${year} is leap year`);
//     } else {
//         console.log(`${year} is not leap year`);
//     }
// }

// isLeapYear(year);

// // console.log(2024 % 100);


// >>>>>>>Another way to solve this problem

// function daysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }
 
// function MON_YER() {
//     let date = new Date();
//     let month = 2;
//     // let year = 2018;
//     // let year = date.getFullYear() - 12;
//     let year = date.getFullYear();
//     console.log("Number of days in " + month
//         + "and month of the year " + year
//         + " is " + daysInMonth(month, year));
//         let day = daysInMonth(month, year);
//         const dayYear = {
//             day : day,
//             year : year,
//         }
//         return dayYear;
        
// }
// let febYear = MON_YER()

// console.log(febYear);

// function isLeapYear({day, year}) {
//     if ( day == 29 ) {
//         console.log(`${year} is leap year`);
//     } else {
//         console.log(`${year} is not leap year`);
//     }
// }

// isLeapYear(febYear);





// 5.<<< কোন সেনটেন্সে কতগুলো ভাওয়েল আছে তা নির্ণয় করা যায় কিভাবে (How would you determine the number of vowels in a sentence?)

// let sentence = "I am learning JavaScript";

// let vowels = sentence.match(/[aeiou]/gi);
// console.log(vowels);
// console.log(vowels.length);

// let toLowerCaseSentence = sentence.toLowerCase();
// const vowelArray = ["a", "e", "i", "o", "u"];

// function countVowels(sentence) {
//     let vowelCount = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if (vowelArray.includes(sentence[i])) {
//             vowelCount++;
//             // console.log(sentence[i]);
//         }
//     }
//     return vowelCount;
// }
// // console.log(countVowels(toLowerCaseSentence));  




// 6. <<< How would you extract the duplicate numbers in an array?

// const arr = [1, 2, 6, 4, 5, 6, 4, 3, 7, 5, 6, 7 ];

// let getDuplicate = arr.filter(function (item, index, array) {

//  let duplicate = array.indexOf(item) !== index 
//     // console.log(item);
//     // console.log(array);
//     // console.log(duplicate);
//     return duplicate;

// })

// console.log(getDuplicate);





// 7. << How would you extract the unique numbers in an array?

// const arr = [1, 2, 6, 4, 5, 6, 4, 3, 7, 5, 6, 7 ];

// let getDuplicate = arr.filter(function (item, index, array) {

//  let duplicate = array.indexOf(item) === index 
//     // console.log(item);
//     // console.log(array);
//     // console.log(duplicate);
//     return duplicate;

// })

// // console.log(getDuplicate);
