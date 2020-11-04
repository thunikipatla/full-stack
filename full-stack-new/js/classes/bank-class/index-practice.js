class customer {
    FullName;
    AdharcardNumber;
    Address;
    PhoneNumber;

    ApplyForAccount(FullName, AdharcardNumber, Address, PhoneNumber) {
        this.FullName = FullName;
        this.AdharcardNumber = AdharcardNumber;
        this.Address = Address;
        this.PhoneNumber = PhoneNumber;
    }

    Deposit(amount) {
        this.AccountBalance = this.AccountBalance + amount;
        console.log('your acoount credited with', amount, "And current balance is", this.AccountBalance);

    }

    Withdraw(amount) {
        if (this.AccountBalance > amount) {
            this.AccountBalance = this.AccountBalance - amount;
            console.log('You account debited with', amount, "and your cuurent balance is", this.AccountBalance)
        } else {
            console.log('Insufficent Funds')
        }
    }
    Transfer(Benficier, amount) {

        if (this.AccountBalance >= amount) {
            this.AccountBalance = this.AccountBalance - amount;
            console.log("you have transfered", amount, "to", Benficier.FullName);
            console.log("And your current balance is", this.AccountBalance);
            Benficier.AccountBalance = Benficier.AccountBalance + amount;

        } else {
            console.log("Insufficent Funds");
        }
    }
}

class BranchManger {

    AccountNumberCounter = 100;

    ValidateAccount(accountdetails) {
        if (accountdetails.AdharcardNumber != "" && accountdetails.FullName != "") {

            accountdetails.AccountNumber = this.GenerateUniqueAccountNumber();
            accountdetails.AccountBalance = 0;
            console.log('Your Acount Approved')
            console.log("Your account number is", accountdetails.AccountNumber);
        } else {
            console.log("Your account not approved")
        }
    }

    GenerateUniqueAccountNumber() {
        this.AccountNumberCounter++;
        return this.AccountNumberCounter;
    }

}


var customer1 = new customer();
customer1.ApplyForAccount('Srinivas', 4622875346895732, 'hyd', 9533797976);
// console.log(customer1);

var customer2 = new customer();
customer2.ApplyForAccount('Santhosh', 7654567989875, 'hyd', 9010203050);

var BranchManager = new BranchManger();

BranchManager.ValidateAccount(customer1);

BranchManager.ValidateAccount(customer2);



customer1.Deposit(2000);
customer2.Deposit(2000);

// console.log(customer1);
// console.log(customer2);
// console.log(customer2.FullName);

// console.log(customer1);



// customer1.Withdraw(1000);

// console.log(customer1);

customer1.Transfer(customer2, 500);
console.log(customer2.AccountBalance);