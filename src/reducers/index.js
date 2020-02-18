const initialState = {
  currencyCode: "USD",
  dates: [],
  amount: "",
  exchangeItems: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_RATE_DATA_REQUESTED":
      return{
        ...state,
        loading:true,
        error:null,
      }

    case "FETCH_RATE_DATA_SUCCESS":
      return {
        ...state,
        exchangeItems: action.payload,
        loading: false,
        error: null
      };

    case "FETCH_RATE_DATA_FAILURE":
      return {
        exchangeItems:[],
        loading:false,
        error: action.payload,
      };

    case "ON_CURRENCY_CHANGED":
      return {
        ...state,
        currencyCode: action.payload
      };

    case "ON_AMOUNT_CHANGED":
      return {
        ...state,
        amount: action.payload
      };

    case "ON_DATE_SWITCHED":
      const switchedDate = action.payload;
      const currentDates = state.dates;
      const idx = currentDates.findIndex((item) => item === switchedDate);

      if (idx >= 0) {
        return {
          ...state,
          dates: [...currentDates.slice(0, idx), ...currentDates.slice(idx + 1)]
        };
      } else {
        return {
          ...state,
          dates: [...currentDates, switchedDate]
        };
      }

    default:
      return state;
  }
};

export default reducer;