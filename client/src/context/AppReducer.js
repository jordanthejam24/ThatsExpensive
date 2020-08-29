//how we specify the app state changes in response to actions... CRUD
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'TRANSACTIO_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}