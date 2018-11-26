function convertToRoman(num) {
  const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let result = '';
  let big_factor = 0;
  if (decimal.includes(num)) {
    return roman[decimal.indexOf(num)];
  }

  for (let i = 0; i < decimal.length; i++) {
    if (num < decimal[i]) {
      big_factor = decimal[i];
      break;
    }
  }

  if (num > 1000) {
    big_factor = 1000;
  }
  console.log(big_factor);

  let index = big_factor == 1000 ? decimal.indexOf(big_factor) : decimal.indexOf(big_factor) - 1;
  let value = 0;
  let pre_value = 0;
  let pre_roman = '';
  for (let i = index; i >= 0; i--) {
    let value_passed = 0;
    let count = 0;
    let roman_passed = '';
    if (i % 2 == 0) {
      for (let j = value; j < num && j + decimal[i] <= num; j += decimal[i]) {
        count++;
        value_passed += decimal[i];
      }
      if (count < 4) {
        roman_passed += roman[i].repeat(count);
      } else if (count == 4) {
        roman_passed += roman[i + 1];
      }
      value += value_passed;
      result += roman_passed;
      if (decimal.includes(value_passed + pre_value)) {
        console.log(result.includes(pre_roman + roman_passed));
        let find = pre_roman + roman_passed;
        let regex = new RegExp(find, 'g');
        let replace = roman[decimal.indexOf(value_passed + pre_value)];
        console.log(regex.test(result));
        result = result.replace(regex, replace);
      }
      pre_value = value_passed;
      pre_roman = roman_passed;
      value_passed = 0;
      count = 0;
      roman_passed = '';
    }
  }

  console.log(value, result);

  return result;
}

console.log(convertToRoman(299));

function convertRoman(num) {
  const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const Roman = roman.reverse();
  const Decimal = decimal.reverse();
  let result = '';

  for (let i = 0; i < Decimal.length; i++) {
    while (num >= Decimal[i]) {
      result += Roman[i];
      num -= Decimal[i];
    }
  }

  return result;
}

console.log(convertRoman(299));
