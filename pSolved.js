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














//=====JavaScript Problem Solving - 2==================
// 1. sentence  এ সুমিত কইবার আছে  এবং প্রথম সুমিত কত তম ইনডেক্স এ আছে 

// const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";


// console.log(sentence.match(/sumit/ig));

// console.log(sentence.match(/sumit/ig).length);

// let sumit = sentence.match(/sumit/i) // returns the first match
// console.log(sumit.index);

// //OR____

// console.log(sentence.search(/sumit/i)); // returns the index position of first match






//2. কোন অ্যারে থেকে কিভাবে সব থেকে বড় স্ট্রিং খুঁজে বের করবেন এবং তার ইনডেক্স নাম্বার দেখাবেন

// const array = ['sohel', 'sathi', 'rufaida']

// function boroString(names) {
//     let boroWord = '';
//     const arrLength = names.length;
//     for (let i = 0; i < arrLength; i++) {
//         //  console.log(i);
//         if (names[i].length > boroWord.length) {
//             boroWord = names[i];
//         }
//     }
//     return [boroWord, names.indexOf(boroWord)];

// }

// let result = boroString(array);

// const array = ['sohel', 'sathi', 'rufaida']

//OR___


// const array = ['Osman Goni', 'Shahera', 'rufaida', 'Syraiya', 'Mubassir Islam']

// function boroString(names) {
//     let boroWord = '';

//     for(nam of names) {
//         //  console.log(nam);
//         if(nam.length > boroWord.length) {
//             boroWord = nam;
//             //  console.log(nam);
//         }
//     }
//     return [boroWord, names.indexOf(boroWord)];

// }

// let result = boroString(array);
// console.log(result);






//3. ১ থেকে ১০০(যে কোন সংখ্যা হতে পারে) পর্যন্ত ৩ অথবা ৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের কর এবং কোন সংখ্যাগুলো বিভাজ্য নয় সেগুলো বের

// const divisibleByThreeAndFive = [];
// const divisibleByThree = [];
// const divisibleByFive = [];
// const notDivisible = [];


// function huntDivisible(number) {
//     for(let i = 1; i <= number; i++) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             divisibleByThreeAndFive.push(i);
//             // console.log(`${i} is Divisible by 3 and 5`);
//         }else if(i % 3 === 0) {
//             divisibleByThree.push(i);
//             // console.log(`${i} is Divisible by 3`);
//         }else if(i % 5 === 0) {
//             divisibleByFive.push(i);
//             // console.log(`${i} is Divisible by 5`);
//         }else {
//             notDivisible.push(i);
//             // console.log(`${i} is not divisible by 3 or 5 and Both`);
//             // console.log(i);
//         }
//     }
// }

// huntDivisible(500);

// console.log(`Divisible by 3 and 5 :->  ${divisibleByThreeAndFive}`);

// console.log(`Divisible by 3 :->  ${divisibleByThree}`);

// console.log(`Divisible by 5 :->  ${divisibleByFive}`);

// console.log(`Not Divisible :->  ${notDivisible}`);






// 4. কোন array থেকে falsy values অথবা truty values খুঁজে বের করা

// const array = [0, '','sohel', null, 'masum',undefined, NaN, 7, '25', false];


// const falsyValues = array.filter(function(item) {
//     if(!item) {
//         // return false; // it is not working
//         return !item;
//     }
// });
// console.log(falsyValues);


// const trutyValues = array.filter(function(item) {
//     if(item) {
//         return true;
//         // return item;
//     }
// });
// console.log(trutyValues);


// const trutyValues = array.filter(Boolean);
// console.log(trutyValues);





//--- কোন array থেকে falsy উপাদান বাদ দেওয়া

// const array = [0, '','sohel', null, 'masum',undefined, NaN, 7, '25', false];
// console.log(array);

// for(let i = 0; i < array.length; i++) {
//     if(!array[i]) {
//         array.splice(i, 1);
//         i--; // decrement to revisit the same index. Removing the element means index i could be, replaced with another empty element. 
//     }
// }

// console.log(array);



//---- কোন array থেকে truty উপাদান বাদ দেওয়া

// const array = [0, '','sohel', null, 'masum',undefined, NaN, 7, '25', false];
// console.log(array);

// for(let i = 0; i < array.length; i++) {
//     if(array[i]) {
//         array.splice(i, 1);
//         i--; // decrement to revisit the same index. Removing the element means index i could be, replaced with another empty element. 
//     }
// }

// console.log(array);



// --- কোন Object থেকে falsy উপাদান বাদ দেওয়া এবং truty উপাদান রিটার্ন করা

// const obj = {a: 0,b: '',c: 'sohel',d: null,e: 'masum', f: undefined,g: NaN,h: 7,i: '25',j: false};

//__delete Kora___
// for(el in obj) {
//     // console.log(obj[el]);
//     if(!obj[el]) {
//         // console.log(obj[el]);
//         delete obj[el];

//     }

// }

// console.log(obj);

//__OR___

// const trutyValues = function(obj) {
//     for(el in obj) {
//     // console.log(obj[el]);
//         if(!obj[el]) {
//            // console.log(obj[el]);
//            delete obj[el];
//         }
//     }
//     return obj;
// }
// const result = trutyValues(obj);
// console.log(result);







////////TO-DO APP////////////


// const inputValue = document.querySelector('#new-task');

// const form = document.querySelector('form');

// const inComTaskItems = document.querySelector('#items');

// const comtaskItems = document.querySelector('.complete-list ul');


// let createTask = (newTask) => {
//     let listItem = document.createElement('li');
//     let checkBoxInput = document.createElement('input');
//     checkBoxInput.type = 'checkbox';
//     let label = document.createElement('label');
//     label.innerText = newTask;

//     // listItem.appendChild(checkBoxInput);
//     // listItem.appendChild(label);

//     listItem.append(checkBoxInput, label);

//     return listItem;   

// }

// let addTask = (e) => {
//     e.preventDefault();
//     let listItem = createTask(inputValue.value);
//     inComTaskItems.appendChild(listItem);

//     form.reset();

//     comCheckMark(listItem, addToComSection);
// }



// function addToComSection() {
//     let listItem = this.parentNode;
//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();

//     let delBtn = document.createElement('button');
//     delBtn.innerText = 'Delete';
//     delBtn.classList.add('delete');
//     listItem.appendChild(delBtn);

//     comtaskItems.appendChild(listItem);

//     clickDelBtn(listItem, deleteTask);

    
// }

// let deleteTask = function() {
//     let parent = this.parentNode;
//     let grandParent = parent.parentNode;
//     grandParent.removeChild(parent);
    
// }


// let clickDelBtn = (taskItem, deleteBtnClick) => {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteBtnClick;
// }


// const comCheckMark = (listItem, taskComMark) => {
//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = taskComMark;

// }



// form.addEventListener('submit', addTask);






/////Tic Tac Toe///////////


// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let mainDiv = document.querySelector("main");

// let turnO = true; //playerX, playerO
// let count = 0; //To Track Draw

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
//   mainDiv.classList.remove("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     count++;
    
//  let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = `Game was a Draw.`;
//   msgContainer.classList.remove("hide");
//   mainDiv.classList.add("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   mainDiv.classList.add("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;


//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val);
//         return true;
//       }
//     }
//   }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);






















