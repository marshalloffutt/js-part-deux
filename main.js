const imaString = 'hi'; // This is a string.    

const age = 99;

if(age < 21) {
    console.log('Go home');
} else {
    console.log('Party time!!');
}


if(age >= 21) {
    console.log('call an uber');
} else {
    console.log('bring your fake id next time');
}


if(age < 21) {
    console.log('Go home');
} else if(age > 75) {
    console.log('Nap time');
 } else {
    console.log('Party time!!');
}



const a = 1;
const b = '1';


a === b // false
a == b // true

a !== b // false
a != b //true

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if (favoriteAnimal === 'bear' && favoriteColor === 'blue'){
    console.log('welcome to the club');
} else if(favoriteAnimal === 'cat' || favoriteColor === 'red') {
    console.log('$500 to join the club');
} else {
    console.log('go away');
}


const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';

console.log('pie length: ', pie.length); // 5
console.log('#3', pie.charAt(2)); //a
console.log('indexof cat', pie.indexOf('cat')); // -1
console.log('index pea', pie.indexOf('pea')); // 0


const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "ain't");

console.log('newQuote', newQuote);


