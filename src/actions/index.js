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


export { onCurrencyChanged, onAmountChanged };