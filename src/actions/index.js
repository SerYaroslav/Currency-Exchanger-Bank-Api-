
const rateDataRequested = () => {
  return {
    type: "FETCH_RATE_DATA_REQUESTED"
  };
};

const rateDataLoaded = newRateData => {
  return {
    type: "FETCH_RATE_DATA_SUCCESS",
    payload: newRateData
  };
};

const rateDataError = error => {
  return {
    type: "FETCH_RATE_DATA_FAILURE",
    payload: error
  };
};


const onCurrencyChanged = currencyCode => {
  return {
    type: "ON_CURRENCY_CHANGED",
    payload: currencyCode
  };
};

const onAmountChanged = inpValue => {
  return {
    type: "ON_AMOUNT_CHANGED",
    payload: inpValue,
  }
}

const onDateSwitched = dateName => {
  return {
    type: "ON_DATE_SWITCHED",
    payload: dateName,
  };
}

const fetchRateData = (bankService, dispatch) => (valcode, fromWhen) => {
  dispatch(rateDataRequested())
  bankService
    .getRate(valcode, fromWhen)
    .then(data => dispatch(rateDataLoaded(data)))
    .catch(err => dispatch(rateDataError(err)));
};


export {
  onCurrencyChanged,
  onAmountChanged,
  onDateSwitched,
  fetchRateData,
  rateDataRequested,
  rateDataLoaded
};