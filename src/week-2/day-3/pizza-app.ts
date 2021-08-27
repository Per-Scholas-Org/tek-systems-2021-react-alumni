type pizzaType = {type: string, size: string, topping: string, quantity: number }

type address = {street: string, city: string, zip: number}

enum Size {
    Small = 'SMALL',
    Medium = 'MEDIUM',
    Large = 'LARGE',
    Super = 'SUPER',
  }

interface createPizza {
    pizza: pizzaType;
}