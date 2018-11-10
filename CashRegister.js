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
    for (let j = changescope.length - 1; j >= 0; j--) {
      if (total < change_value) {
        for (let i = changescope[j].count; i > 0; i--) {
          if (total + changescope[j].value <= change_value) {
            total += changescope[j].value;
            change[count] = [changescope[j].currency, changescope[j].value * i];
          } else {
            break;
          }
        }
        count++;
      } else {
        break;
      }
    }
    let status =
      parseFloat(total.toFixed(2)) == change_value
        ? 'OPEN'
        : 'INSUFFICIENT FUNDS';
    return { total, change, status };
  }

  console.log(createChange(), changescope);

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

checkCashRegister(19.5, 20, [
  ['NICKEL', 0.05],
  ['DIME', 0.2],
  ['QUARTER', 0.25]
]);
