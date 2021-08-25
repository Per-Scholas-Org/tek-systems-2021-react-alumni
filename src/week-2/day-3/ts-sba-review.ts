
// function getForecastMessage (dailyForecast: {temperature: number, chanceOfRain: number}) {
//     const temp = dailyForecast.temperature;
//     const chanceOfRain = dailyForecast.chanceOfRain;
//     return `Today it is ${temp} degrees out. The chance of rain is ${chanceOfRain}`;
// }

type Person = {age: number, nickName: string};

type sayHello = (a: Person) => string;

type People = Array<Person>; 

interface PeopleHandler {
    // sayHi function 
    sayHi: sayHello;
    getPerson: (a: number) => Person; 

    // say
    sayHiToMyPerson: (a: number) => string;

    getPeopleOfAge: (a: number) => People;
}

class MyPeople implements PeopleHandler{
    private people;
    constructor(people: People){
        this.people = people;
    }

    sayHi(person: {age: number, nickName: string}) {
        return `Hi, ${person.nickName}! You are ${person.age} years old.`;
    }

    getPerson(index: number){
        return people[index];
    }

    sayHiToMyPerson(index: number): string{
        const person = this.getPerson(index);
        // const message = this.sayHi(person);
        // return message;

        return this.sayHi(person);

        // return `Hi, ${people[index].nickName}! You are ${people[index].age} years old.`;
    }

    getPeopleOfAge(age: number): People{
        // filter thru array of people
        // look at age of each person in array and compare to desired age
        // only return the people with the desired age

        // this.people.filter(person => {
        //     if(person.age === age){
        //         return true;
        //     };
        //     return false;
        // }); 

        return this.people.filter(person => {
            return person.age === age
        });
    }
}

const people: Array<Person> = [
    {age: 22, nickName: 'Tommy'},
    {age: 28, nickName: 'Jane the elder'}
];

const MyPeopleInstance = new MyPeople(people);

function sayHi(person: {age: number, nickName: string}) {
    return `Hi, ${person.nickName}! You are ${person.age} years old.`;
}

// console.log(sayHi({age: 22, nickName: 'Tommy'}));

// people.forEach(person => console.log(sayHi(person)));

// people.forEach((person, index) => {
//     console.log('Person at index ' + index);
//     console.log(sayHi(person));
// })

for(let index = 0; index < people.length; index++){
    console.log('Index ' + index + ', message: ' + sayHi(people[index]));
}