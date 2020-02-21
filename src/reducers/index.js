const initialState = {
  currencyCode: "",
  dates: [],
  amount: "",
  exchangeItems: [],
  loading: true,
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
      const initExch = state.exchangeItems;
      const newExch = action.payload;
      return {
        ...state,
        exchangeItems: [...initExch, newExch],
        loading: false,
        error: null
      };

    case "FETCH_RATE_DATA_FAILURE":
      return {
        ...state,
        exchangeItems:[],
        loading:false,
        error: action.payload,
      };

    case "ON_CURRENCY_CHANGED":
      return {
        ...state,
        currencyCode: action.payload,
        dates: [],
        exchangeItems: [],
      };

    case "ON_AMOUNT_CHANGED":
      return {
        ...state,
        amount: action.payload
      };

    case "ON_DATE_SWITCHED":
      const switchedDate = action.payload;
      const currentDates = state.dates;
      const currentExchItem = state.exchangeItems;
      const idx = currentDates.findIndex((item) => item === switchedDate);
      const idxExchItem = currentExchItem.findIndex(
        item => item.settedDate === switchedDate
      );

      if (idx >= 0 && idxExchItem >= 0) {
        return {
          ...state,
          dates: [
            ...currentDates.slice(0, idx),
            ...currentDates.slice(idx + 1)
          ],
          exchangeItems: [...currentExchItem.slice(0, idxExchItem), ...currentExchItem.slice(idx+1)]
        };
      } else {
        return {
          ...state,
          loading: true,
          dates: [...currentDates, switchedDate]
        };
      }

    default:
      return state;
  }
};

export default reducer;