//Given an array of numbers, return only greater than "limit"

const inputs = [2,3,4,5,8,99,10,26,35];
const limit = 18;

const greaterThan = (inputs,limit) => { 
    let resultG = inputs.filter(input => input >= limit);
return resultG};

console.log(greaterThan(inputs,limit));

//given an array of number, return only even numbers

const mixes = [1,2,3,4,5,6,7,8,9,0];

const onlyEven = (mixes) => {
      let resultE = mixes.filter(mix => mix % 2 == 0);
return resultE}

console.log(onlyEven(mixes));


const strings = ['boca', 'cachorro', 'bambu', 'pipoca'];
wordLength = 5;
const words5 = (strings, wordLength) => {
      let result5 = strings.filter(word => word.length >=5);
return result5}

console.log(words5(strings));

//List all persons that be member of Iluminati club

iLists = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }];

const members = (iLists) => {
        let resultI = iLists.filter(person => person.member === true);
  return resultI}

console.log(members(iLists));  
