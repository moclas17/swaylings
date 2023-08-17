export const FUEL_GREEN = '#00f58c';

export const DEFAULT_CONTRACT = `contract;

abi TestContract {
    #[storage(read, write)]
    fn increment_counter(amount: u64) -> u64;

    #[storage(read)]
    fn get_counter() -> u64;
}

storage {
    counter: u64 = 0,
}

impl TestContract for Contract {
    #[storage(read, write)]
    fn increment_counter(amount: u64) -> u64 {
        let incremented = storage.counter + amount;
        storage.counter = incremented;
        incremented
    }

    #[storage(read)]
    fn get_counter() -> u64 {
        storage.counter
    }
}`;

export const Basic1 = `script;
//La asignacion de las variables utiliza la palabra reservada let, puedes corregir el siguiente codigo ?
fn main (){
 foo = 5
}
`;

export const Basic2 = `script;
//La esttructura de control if es para condiciones simples,  puedes corregir el siguiente codigo ?
fn main() {
    let number = 6;

    if number % 3 = 0 {
        // hacer algo
    } else {
        // hacer otra cosa
    }
}
`;

export const Basic3 = `script;
//Las funciones te ayudan a reutilizar odigo, puedes agregar la funcion equals que multiplique 2 valores ?
fn main() {
    equals(5, 5); // evaluates to true
    equals(5, 6); // evaluates to false
}
`;
