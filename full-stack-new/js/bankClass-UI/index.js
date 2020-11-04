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
            return true;
        } else {
            console.log('your account got rejected');
            return false;
        }
    }
    generateuniqueaccountnumber() {
        if (localStorage.getItem('accountnumbercounter') == null) {
            localStorage.setItem('accountnumbercounter', 1000);
        }
        var accountnumbercounter = parseInt(localStorage.getItem('accountnumbercounter'));

        var accountnumbercounter = accountnumbercounter + 1;

        localStorage.setItem('accountnumbercounter', accountnumbercounter);
        return accountnumbercounter;

    }
}

if (localStorage.getItem('accounts') == null) {
    localStorage.setItem('accounts', JSON.stringify([]));

}

function ApplyAccount() {
    event.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var adharcardnumber = document.getElementById('adharcardnumber').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
    var address = document.getElementById('address').value;

    var customer1 = new customer();

    customer1.applyaccount(fullname, adharcardnumber, mobilenumber, address);

    var branchManager = new branchmanager();

    var status = branchManager.accountvalidator(customer1);;

    if (status) {
        var accounts = JSON.parse(localStorage.getItem('accounts'));
        accounts.push(customer1);
        localStorage.setItem('accounts', JSON.stringify(accounts));

        document.getElementById('msg').innerHTML = "Account Approved";

    } else {
        document.getElementById('msg').innerHTML = "Account Rejected";
    }


}

function login() {
    var adharcardnumber = document.getElementById('adharcardnumber').value;
    var accounts = JSON.parse(localStorage.getItem('accounts'));

    var registeruser = false

    for (i = 0; i < accounts.length; i++) {
        var account = accounts[i];

        if (accounts[i].adharcardnumber == adharcardnumber) {
            var registeruser = true
            localStorage.setItem('currentUser', JSON.stringify(account));
            window.location.href = "dashboard.html"

        }
    }
    if (registeruser == false) {
        alert('Invalid Adhar')
    }
}

function GetCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));

}


// var customer1 = new customer();

// console.log(customer1);

// customer1.applyaccount('srini', 4622375543225102, 9533797976, 'hyd');

// console.log(customer1);

// var branchManager = new branchmanager();

// branchManager.accountvalidator(customer1);

// console.log(customer1);

// customer1.accountbalance = 1000;

// console.log(customer1);

// customer1.withdraw(200);
// console.log(customer1);

// // customer1.withdraw(1000);

// customer1.checkbalance();
// // customer1.transfer('santhosh', 300);
// customer1.deposit(500);