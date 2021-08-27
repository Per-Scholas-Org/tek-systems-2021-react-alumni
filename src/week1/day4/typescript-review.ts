function hello(name: string, isSunny: boolean) {
    if (!isSunny) {
      return "Hi, " + name;
    }
  
    return `Hi, ${name}, it is sunny out today!`;
  }
  
type FullName ={
    firstName : string,
    lastName : string,
    
}

  console.log(hello("Alice", true));