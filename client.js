console.log( 'Hello! We\'ve got objects! ');
// objects are things that are made up of many other things
// Object literal 
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log('baseballHat', baseballHat);
console.log(`The baseballHat is ${baseballHat.color} in size ${baseballHat.size}`);

// Const w/objects
console.log('Before setting size:', sunHat);
// Can I do this??? Yes
sunHat.size = 'XL';
console.log('After setting size:', sunHat);

// Can't set to another object

// sunHat = {
//     type: 'sun',
//     color: 'yellow',
//     size: 'L'
// }
// console.log('Set to a new hat?', sunHat);

let penguins = [
  {
    name: 'Emperor',
    colors: ['Black', 'White', 'Yellow'],
    size: 1.0,
    isCute: true
  },
  {
    name: 'Little',
    colors: ['Slate-blue', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Rockhopper',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.75,
    isCute: true
  },
  {
    name: 'African',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Gentoo',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Sea Gull',
    colors: ['Gray'],
    size: 0.25,
    isCute: false
  },
  {
    name: 'Chinstrap',
    colors: ['Black', 'White'],
    size: 0.25,
    isCute: true
  },
  {
    name: 'Macaroni',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.5,
    isCute: true
  },
];

// function arePenguins(cute){
//      let outputArray = [];
//          for (let i=0; i < penguins.length -1; i++){
//        if (penguins[i].isCute === true){
//            return true;
//        }
//    } return i;
// }
// console.log(arePenguins('cute'));


function findCuteOnes(inputArray) {
    let outputArray = [];
    for( let thing of inputArray ) {
            console.log('a thing, thing');
            if ( thing.isCute === true );{
                outputArray.push(thing);
            }
    }
    return outputArray;
}

console.log('We have cute ones!', findCuteOnes(penguins));

// Object constructor functions 
function Hat(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
}

const fancyHat = new Hat('fancy', 'gold', 'M');
console.log(fancyHat);

