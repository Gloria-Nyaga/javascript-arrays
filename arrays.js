//Question 1
//Find the last element of the following arrays. arr1 =[3, 7, 34, 90, 12]arr2 =[true, "green", "where",12, 56]
 let arr1 =[3, 7, 34, 90, 12]
 console.log ('last element', arr1.slice(-1));

 let arr2 =[true, "green", "where",12, 56]
 console.log ('last item',arr2.slice(-1));


//Question 2
// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets = ["Cow", "Bird", "Snake", "Dog"];
let newPetType = myPets.toString();
console.log({newPetType })

//Question 3
//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let newArr3 = arr3.sort();
console.log({newArr3})

//Question 4
//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",      "school", "girl", "woman"];

let arr = ["boy", "man", "girl",      "school", "girl", "woman"];
let beginningWords = [];
let duplicates = [];
arr. forEach(word =>{
    if(!beginningWords.includes(word)){
        beginningWords.push(word);
    }
    else(duplicates.push(word));
})
console.log({beginningWords});
console.log({duplicates});


//Question 5
//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
const text = "way";
const wordIndex = arr5.indexOf(text);
if (word==arr5[1]){console.log({text})}

else {console.log("the search was not found")}

//Question 6
//Write a JS script to sort the following string:let word = "renniw"

let word = "renniw";
let newWord=word.split("");
   word.sort();
     word.join("");
;
console.log(newWord);

//Question 7
//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let fruits =["mangoes", "apples","oranges","bananas","grapes","kiwi","appricots","pawpaws","strawberries","pineapples"];
fruits.splice([5], "Tomato");
console.log((fruits));