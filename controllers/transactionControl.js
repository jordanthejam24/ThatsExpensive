
//desc get all transactions
//route it will connect to get /api/v1/transactions
//access @public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

//add transaction
//route it will connect to post /api/v1/transactions
//access @public
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

//desc get all transactions
//route it will connect to delete /api/v1/transactions/:id
//access @public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}