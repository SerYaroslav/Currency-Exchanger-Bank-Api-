export default class BankService {

  _apiBase = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?';

  now = new Date();
  today = 'Today';
  weekAgo = '7 days ago';
  monthAgo = '30 days ago';
  yearAgo = '1 year ago';

  setDate = (date,fromWhen) => {
  let res = new Date()
  switch (fromWhen) {
    case 'today':
      return res = date;
    
    case '7 days ago':
      return (res.setDate(date.getDate()-7));

    case '30 days ago':
      return (res.setDate(date.getDate()-30));

    case '1 year ago':
      return (res.setYear(date.getFullYear()-1));
  
    default:
      return date
  } 
  }
  
  getDateCode = (date,fromWhen) => {
  const neddedDate = this.setDate(date, fromWhen)

  const neddedYear = new Date(neddedDate).getFullYear();

  let neddedMonth = new Date(neddedDate).getMonth();
    neddedMonth++
    if(neddedMonth < 10) neddedMonth = "0" + neddedMonth;

  let neddedDayDate = new Date(neddedDate).getDate();
    if (neddedDayDate < 10) neddedDayDate = "0" + neddedDayDate;

  const finalDate = `${neddedYear}${neddedMonth}${neddedDayDate}`; 

  return finalDate;
  };

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}&json`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, receive ${res.status}` )
    }

    return await res.json();
  };

  getRate = async (valcode, fromWhen, date = this.now) => {
    const dateCode = this.getDateCode(date, fromWhen);
    const data = await this.getResourse(`valcode=${valcode}&date=${dateCode}`);
    const res = this._transformRate(data, fromWhen);
    return (res);
  };

  _transformRate = (rate, fromWhen) => {
    return {
      name: rate[0].txt,
      rate: rate[0].rate,
      currencyCode: rate[0].cc,
      exchangeDate: rate[0].exchangedate,
      settedDate: fromWhen,
    };
  }

};
