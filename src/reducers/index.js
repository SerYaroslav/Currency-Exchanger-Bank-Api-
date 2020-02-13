const initialState = {
  currencyCode: 'USD',
  dateRate: 'today',
  amount: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CURRENCY_CHANGED":
      return {
        ...state,
        currencyCode: action.payload,
      };

    case "ON_AMOUNT_CHANGED":
      return{
        ...state,
        amount: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;