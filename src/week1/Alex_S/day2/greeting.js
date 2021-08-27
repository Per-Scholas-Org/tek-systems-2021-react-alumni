/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/
const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];
const name1 =  'Alex';

console.log( greetingWords[1] + ', ' + prefixes[0] + ' name is ' + name1  );

/*
 @param {string} name
    //    name of person
 @parm  {string} gender
      //  Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
        //   greeting sentence
*/

function greeting(name, gender, isSelf) {
     
   let pronoun;
   let greet;
   if(isSelf == true)
   {
      pronoun = prefixes[0];
       greet = greetingWords[0];
   }
   else
   {
      if (gender == 'male')
      {
         pronoun = prefixes[1];
         greet = greetingWords[1];
      }
      else if(gender == 'female')
      {
         pronoun =  prefixes[2];
         greet = greetingWords[1];
      }
      else
      {
         pronoun = prefixes[3];
         greet = greetingWords[2];
      }
   }
    return  `${greet} ${pronoun} name is ${name}` ; // use template literal for string to return
  }
  
  let message;
  
  message = greeting("Adam", "male", true);
  console.log(message); // Hi, my name is Adam

   message = greeting("Elizabeth", "female", false);
  console.log(message); // Hey, their name is Elizabeth

   message = greeting("Agomi", "nonbinary", false);
  console.log(message); // Hey, their name is Elizabeth