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


export { onCurrencyChanged, onAmountChanged, onDateSwitched };