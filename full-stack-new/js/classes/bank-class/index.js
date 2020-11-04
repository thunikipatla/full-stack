class customer {
    fullname;
    adharcardnumber;
    mobilenumber;
    address;

    applyaccount(fullname, adharcardnumber, mobilenumber, address) {
        this.fullname = fullname;
        this.adharcardnumber = adharcardnumber;
        this.mobilenumber = mobilenumber;
        this.address = address;

    }

    withdraw(amount) {

        if (amount < this.accountbalance) {
            this.accountbalance = this.accountbalance - amount;
            console.log('you have withdrawn', amount);
            console.log('your current account balance is', this.accountbalance);
        } else {
            console.log('insufficent funds');
        }
    }

    checkbalance() {
        console.log("Your current balance is", this.accountbalance);
    }

    transfer(benficier, amount) {
        if (amount < this.accountbalance) {
            this.accountbalance = this.accountbalance - amount;
            console.log('You have transfered', amount, 'to', benficier);
            console.log("your current balance is", this.accountbalance);

        } else {
            console.log("insufficent funds")
        }

    }

    deposit(amount) {
        this.accountbalance = this.accountbalance + amount;
        console.log('You have deposited', amount);
        console.log('your update balance is', this.accountbalance);
    }
}

class branchmanager {
    accountnumbercounter = 100;
    accountvalidator(accountdetails) {
        if (accountdetails.adharcardnumber != "" && accountdetails.fullname != "") {
            accountdetails.accountnumber = this.generateuniqueaccountnumber();
            accountdetails.accountbalance = 0;
            console.log("Your account got approved")
        } else {
            console.log('your account got rejected')
        }
    }
    generateuniqueaccountnumber() {
        this.accountnumbercounter++;
        return this.accountnumbercounter;
    }
}

var customer1 = new customer();

console.log(customer1);

customer1.applyaccount('srini', 4622375543225102, 9533797976, 'hyd');

console.log(customer1);

var branchManager = new branchmanager();

branchManager.accountvalidator(customer1);

console.log(customer1);

customer1.accountbalance = 1000;

console.log(customer1);

customer1.withdraw(200);
console.log(customer1);

// customer1.withdraw(1000);

customer1.checkbalance();
// customer1.transfer('santhosh', 300);
customer1.deposit(500);