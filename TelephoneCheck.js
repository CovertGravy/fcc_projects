function telephoneCheck(str) {
  const check_raw = checkRaw(str);
  console.log(check_raw);
  if (check_raw) {
    let bracket1 = str.split('').includes('(');
    let bracket2 = str.split('').includes(')');
    console.log(bracket1, bracket2);
    if (bracket1 && bracket2) {
      let regex = /(\([0-9]{3}\))/gm;
      let i;
      let count = 0;
      while ((i = regex.exec(str)) !== null) {
        console.log(i);
        count++;
      }
      if (!count) {
        console.log('i false');
        return false;
      }
    } else if ((bracket1 && !bracket2) || (!bracket1 && bracket2)) {
      return false;
    }
  }
  return check_raw;
}

function checkRaw(s) {
  if (s.length > 16) {
    return false;
  }
  let rawStr = [];
  let rawChar = [];
  let num_count = 0;
  let rawArr = s.split('');
  let chars_allowed = ['(', ')', '-', ' '];
  rawArr.forEach(a => {
    if (Number.isNaN(parseInt(a))) {
      rawChar.push(a);
    }
    rawStr.push(parseInt(a));
  });
  let valid = true;
  rawChar.forEach(c => (chars_allowed.includes(c) ? true : (valid = false)));
  if (!valid) {
    return false;
  }
  rawStr.forEach(n => (Number.isNaN(n) ? true : num_count++));
  console.log(rawArr, rawStr, num_count, rawChar, valid);
  if (num_count == 10 || num_count == 11) {
    if (num_count == 11 && rawStr[0] != 1) {
      return false;
    }
  } else {
    return false;
  }

  return true;
}
telephoneCheck('1 (555) 555-5555');
