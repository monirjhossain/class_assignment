class BankAccount {
  constructor(accountNumber, ownerName, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
  }

  getBalance() {
    console.log(`Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdraw ${amount} New balance: ${this.balance} tk.`);
    } else {
      console.log('Sorry! Insufficient funds.');
    }
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} New balance: ${this.balance} tk.`);
  }
}

const account = new BankAccount(1001, 'John Doe');
account.displayAccountInfo();
account.getBalance();
account.deposit(5000);
account.withdraw(1500);
