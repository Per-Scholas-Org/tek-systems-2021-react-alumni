// function getForecastMessage (dailyForecast: {temperature: number, chanceOfRain: number}) {
//     const temp = dailyForecast.temperature;
//     const chanceOfRain = dailyForecast.chanceOfRain;
//     return `Today it is ${temp} degrees out. The chance of rain is ${chanceOfRain}`;
// }
var MyPeople = /** @class */ (function () {
    function MyPeople(people) {
        this.people = people;
    }
    MyPeople.prototype.sayHi = function (person) {
        return "Hi, " + person.nickName + "! You are " + person.age + " years old.";
    };
    MyPeople.prototype.getPerson = function (index) {
        return people[index];
    };
    MyPeople.prototype.sayHiToMyPerson = function (index) {
        var person = this.getPerson(index);
        // const message = this.sayHi(person);
        // return message;
        return this.sayHi(person);
        // return `Hi, ${people[index].nickName}! You are ${people[index].age} years old.`;
    };
    MyPeople.prototype.getPeopleOfAge = function (age) {
        // filter thru array of people
        // look at age of each person in array and compare to desired age
        // only return the people with the desired age
        // this.people.filter(person => {
        //     if(person.age === age){
        //         return true;
        //     };
        //     return false;
        // }); 
        return this.people.filter(function (person) {
            return person.age === age;
        });
    };
    return MyPeople;
}());
var people = [
    { age: 22, nickName: 'Tommy' },
    { age: 28, nickName: 'Jane the elder' }
];
var MyPeopleInstance = new MyPeople(people);
function sayHi(person) {
    return "Hi, " + person.nickName + "! You are " + person.age + " years old.";
}
// console.log(sayHi({age: 22, nickName: 'Tommy'}));
// people.forEach(person => console.log(sayHi(person)));
// people.forEach((person, index) => {
//     console.log('Person at index ' + index);
//     console.log(sayHi(person));
// })
for (var index = 0; index < people.length; index++) {
    console.log('Index ' + index + ', message: ' + sayHi(people[index]));
}
