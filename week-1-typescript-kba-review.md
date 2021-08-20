# Typescript KBA Review 

# Typescript language features / core concepts 

- How to check what type a variable is? **This is not on the KBA but will help you with other problems on it**.
    - Use the `typeof` keyword: 
- How to use functions in Typescript:
  - How to specify (annotate) function parameters/arguments.
  - How to annotate function return types.
- Be able to explain what a union type is. Examples: 
```

type NumberOrString = number | string; // Union type 
const myArray: Array<number | string> = [1, "two", "bird", 19, -5]; // Array with elements of type number or string. Another example of a union type. 
```

- How to create a simple type alias: 
```
type XCoordinate = number;
type YCoordinate = number;
type Color = string;

// Also a union type
type NumberOrString = number | string;
```

- How to use a type alias
    - To define the elements in an array: `const myArray: Array<NumberOrString> = [1, "two", "bird", 19, -5];`
    - To define the shape of an object. This one also uses another type alias and has an example of an optional property for the type.
    ```
    type Inches = number;

    type Person = {
      name: string;
      age: number;
      height: Inches;
      nickName?: string; // question mark makes it optional
    };
    ```

- **Pay attention to this one.** How to use a type to specify a function signature:

// Type alias for a function which has to accept a Person type as an argument and returns a number
type getPersonAge = (info: Person) => number;

- From Javascript: How to write and understand arrow functions:
```
const sayHi = name => `Hello, ${name}`

// same as above
const sayHiAgain = (name) => {
    return `Hello, ${name};
}
```

## Good to know but not critical

- How to define an interface. Example:
```
// Interfaces and types share similar roles. This can use the same thing as the Person type above.
interface Person { 
    name: string;
      age: number;
      height: Inches;
      nickName?: string; // question mark makes it optional
}

- How to write a simple class in Typescript: constructor, using the `this` context in methods, and defining methods. Don't worry about private methods or extending other classes and stuff like that.

- How to implement an interface with class.





























