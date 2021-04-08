function palindrome1(str) {
  let word0 = str.split('');
  let word1 = [];
  word0.forEach(char => {
    let isAlphaNum = char.match(/^[a-z0-9]+$/i) !== null;
    console.log(char, isAlphaNum);
    if (isAlphaNum) {
      word1.push(char);
    }
  });
  let word2 = word1
    .reverse()
    .join('')
    .toLowerCase();
  console.log(word0, word1, word2);
  return true;
}

function palindrome(str) {
  let wordArr = [];
  str.split('').forEach(char => {
    char.match(/^[a-z0-9]+$/i) !== null ? wordArr.push(char) : false;
  });
  let word0 = wordArr.join('').toLowerCase();
  let word1 = wordArr
    .reverse()
    .join('')
    .toLowerCase();

  return word0 === word1;
}

console.log(palindrome('race23car'));
