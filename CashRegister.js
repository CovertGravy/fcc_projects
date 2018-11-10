function checkCashRegister(price, cash, cid) {
  let currencies = {
    PENNY: { value: 0.01, count: 0 },
    NICKEL: { value: 0.05, count: 0 },
    DIME: { value: 0.1, count: 0 },
    QUARTER: { value: 0.25, count: 0 },
    ONE: { value: 1, count: 0 },
    FIVE: { value: 5, count: 0 },
    TEN: { value: 10, count: 0 },
    TWENTY: { value: 20, count: 0 },
    'ONE HUNDRED': { value: 100, count: 0 }
  };

  cid.forEach(cash => {
    currencies[cash[0]].count = Math.round(cash[1] / currencies[cash[0]].value);
  });

  const change_value = cash - price;
  let changescope = [];
  for (const currency in currencies) {
    if (currencies.hasOwnProperty(currency)) {
      if (
        currencies[currency].count > 0 &&
        change_value >= currencies[currency].value
      ) {
        // console.log(currency, currencies[currency]);
        changescope.push({ currency: currency, ...currencies[currency] });
      }
    }
  }
  console.log(changescope);

  function createChange() {
    let total = 0;
    let change = [];
    let count = 0;
    let copy = JSON.parse(JSON.stringify(changescope));
    for (let j = changescope.length - 1; j >= 0; j--) {
      if (total < change_value) {
        for (let i = 1; i <= changescope[j].count; i++) {
          let check = parseFloat((total + changescope[j].value).toFixed(2));
          if (check <= change_value) {
            total = check;
            change[count] = [changescope[j].currency, changescope[j].value * i];
            copy[j].count--;
          } else {
            i == 1 ? count-- : false;
            break;
          }
        }
        count++;
      } else {
        break;
      }
    }
    let change_left = 0;
    copy.forEach(ch => (ch.count ? (change_left += ch.count) : false));
    let status =
      total == change_value
        ? change_left
          ? 'OPEN'
          : 'CLOSED'
        : 'INSUFFICIENT FUNDS';
    return { status, change: status == 'INSUFFICIENT FUNDS' ? [] : change };
  }

  // console.log(createChange());
  return createChange();
  // Here is your change, ma'am.
  // return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// console.log(checkCashRegister(18.5, 20, [['QUARTER', 0.25], ['ONE', 1]]));

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
);
