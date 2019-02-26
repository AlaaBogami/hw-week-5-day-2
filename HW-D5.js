// Activity Assignment
let a = 1;
let b = 'bongos';
let c = true;
a = b;
b = c;
c = a;

// solution
a
"bongos"
b
true
c
"bongos"


// Activity Concatenation
const firstWord = "Please";
const secondWord = "squeeze";
const thirdWord = "the";
const fourthWord = "cheese";

// solution
const fullWord = firstWord + " " + secondWord + " " + thirdWord + " " + fourthWord ;
console.log(fullWord);

function FullWord(full) {
 console.log(`${full}`);
}
FullWord(`Please squeeze the cheese`);

// Activity Concatenation
const num1 = 5;
const num2 = 10;

// solution
const num3 = num1 + num2 ;
console.log(num3);
num3 == num1 + num2;
console.log(" the sum of "+ num1 +" and "+ num2 +" is " + num3);


//Activity Comparisons
a) 999 > 999
b) 999 === 999
c) 999 !== 999
d) -5 >= -4
e) 100 <= -100
f) 20 + 5 < 5
g) 81 / 9 === 9
h) 9 !== 8 + 1

// solution
a)false
b)true
c)false
d)false
e)false
f)false
g)true
h)false


//Activity Conditionals
const number;
for (number =0; number <= 100; number++) {

    if (number % 3 ===0 & number % 5 ===0) {
        console.log('fizzbuzz');
          }
      else if (number % 3 === 0) {
        console.log('fizz');
         }
     else if (number % 5 === 0) {
        console.log('buzz')
        }
     else {
        console.log(number);
    }
}


//------------------------------------------
var number;
for (number =0; number <= 100; number++) {

    if (number % 3 ===0 && number % 5 ===0) {
        console.log('fizzbuzz');
          }
      else if (number % 3 === 0) {
        console.log('fizz');
         }
     else if (number % 5 === 0) {
        console.log('buzz')
        }
     else {
        console.log(number);
    }
}
//----------------------------------------

function printFizz(number) {
  for (number =0; number <= 100; number++) {

    if (number % 3 ===0 && number % 5 ===0) {
        console.log('fizzbuzz');
          }
      else if (number % 3 === 0) {
        console.log('fizz');
         }
     else if (number % 5 === 0) {
        console.log('buzz')
        }
     else {
        console.log(number);
    }
}
}

//-----------------------------------

var number = 0;
while (number < 100) {
  number = number + 1;

  if ( number % 3 === 0 && number % 5 === 0 ){
    console.log(number + ' Fizbuzz');
    continue;
  }

  if( number % 3 === 0 ){
    console.log(number + ' Fizz');
    continue;
  }

  if( number % 5 === 0 ) {
    console.log(number + ' Buzz');
    continue;
  }

  console.log(number.toString());

}
