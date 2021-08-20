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





























