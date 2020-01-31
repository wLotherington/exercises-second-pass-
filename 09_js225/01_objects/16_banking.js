function makeBank() {
  var accounts = [];
  var nextAccountNumber = 101;

  function makeAccount(number) {
    var balance = 0;
    var transactions = [];

    return {
      deposit: function(amount) {
        balance += amount;
        this.addTransaction('deposit', amount);
        return amount;
      },

      withdraw: function(amount) {
        amount = amount < balance ? amount : balance;
        balance -= amount;
        this.addTransaction('withdraw', amount);
        return amount;
      },

      addTransaction: function(type, amount) {
        transactions.push({
          type: type,
          amount: amount,
        });
      },

      balance: function() {
        return balance;
      },

      number: function() {
        return number;
      },

      transactions: function() {
        return transactions;
      },
    };
  }

  return {
    openAccount: function() {
      var account = makeAccount(nextAccountNumber);
      nextAccountNumber += 1;
      accounts.push(account);
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

var bank = makeBank();
console.log(bank.accounts);