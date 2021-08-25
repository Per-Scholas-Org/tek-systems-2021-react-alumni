
type Person =  {age: number, nickName: string }

type People = Array<Person>;

type SayHello = (a: Person) => string;

interface PeopleHandler {
  sayHi: SayHello;
  getPerson: (a: number) => Person;
  // receives array index of person, returns hello message
  sayHiToMyPerson: (a: number) => string;
  getPeopleOfAge: (a: number) => People;
}

// same as the above interface
type AnotherPeopleHandler = {
  sayHi: SayHello;
  getPerson: (a: number) => Person;
  // receives array index of person, returns hello message
  sayHiToMyPerson: (a: number) => string;
  getPeopleOfAge: (a: number) => People;
}

class MyPeople implements PeopleHandler {
  private people;
  constructor(people: People) {
    this.people = people;
  }

  getPeopleOfAge(age: number): People {
    // filter thru array of people
    // look at age of each person in array and compare to desired age
    // only return the people with the desired age
    return this.people.filter(person => {
      return person.age === age;
    })

  }

  sayHiToMyPerson(index: number): string {
     const person = this.getPerson(index);
     return this.sayHi(person);
  }

  sayHi(person: {age: number, nickName: string }) {
    return `Hi, ${person.nickName}!!! You are ${person.age} years old.`
  }

  getPerson(index: number) {
    return this.people[index];
  }

}

const people: Array<Person> = [
  { age: 22, nickName: 'Tommy'}, // index 0 
  { age: 14, nickName: 'Jane the elder'}, // index 1
  { age: 14, nickName: 'Chris'}, // index 1
  { age: 0, nickName: 'Stewie'}, // index 1
];

/** all these sayHi functions do the same thing */
// Example of named function
function sayHi(person: {age: number, nickName: string }) {
  return `Hi, ${person.nickName}!!! You are ${person.age} years old.`;
}
// Example of function expression
const sayHi2: SayHello = function (person: {age: number, nickName: string }) {
  return `Hi, ${person.nickName}!!! You are ${person.age} years old.`;
}

// Example of arrow function
const sayHi3: SayHello = (person: {age: number, nickName: string }) => {
  return `Hi, ${person.nickName}!!! You are ${person.age} years old.`;
}

for(let index = 0; index < people.length; index++) {
  console.log('Index ' + index +  ', message: ' + sayHi(people[index]));
}

people.forEach((person, index) => {
  // console.log('Person at index ' + index);
  // console.log(sayHi(person));
})

const myPeopleToday = new MyPeople(people);

console.log(myPeopleToday.sayHiToMyPerson(0));
console.log(myPeopleToday.getPerson(1));
console.log(myPeopleToday.getPeopleOfAge(14));