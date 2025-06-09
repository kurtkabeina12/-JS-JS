const wallet = {
    balance: 0,
    operations: [],
    increase(sum, reason) {
        this.balance += sum;
        this.operations.push(reason);
        return true
    },
    decrease(sum, reason) {
        if (this.balance - sum > 0) {
            this.balance -= sum;
            this.operations.push(reason);
            return true
        } else {
            return false
        }
    },
    getOperationLength() {
        return this.operations.length
    }
}

console.log(wallet.increase(100, 'Бонус'))
console.log(wallet.decrease(50, 'Налог'))
console.log(wallet.getOperationLength())