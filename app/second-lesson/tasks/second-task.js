// 2. Encapsulation and Access Control:
// Design a BankAccount class with private properties like balance and methods like deposit() and withdraw(). Implement accessors and mutators (getters and setters) to control access to the private properties. Ensure that the withdraw() method checks for sufficient balance before performing the transaction. Create instances of the BankAccount class and demonstrate proper encapsulation and controlled access to its properties.

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get deposit() {
        return `Deposit is ${this._balance}`
    }
}

const user1 = new BankAccount()
console.log(user1.deposit= 1)