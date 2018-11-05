function rot13(str) {
  // LBH QVQ VG!
  let wordArr = [];
  str.split('').forEach(char => {
    char.match(/^[a-z]+$/i) !== null
      ? wordArr.push(char.toUpperCase())
      : wordArr.push(char);
  });
  console.log(wordArr);
  let decrypt = [];
  wordArr.forEach(char => {
    if (char.match(/^[a-z]+$/i) !== null) {
      let index = char.charCodeAt(0);
      console.log(char.charCodeAt(0));
      let decryptIndex =
        index + 13 <= 90 ? index + 13 : ((index + 13) % 90) + 64;
      decrypt.push(String.fromCharCode(decryptIndex));
    } else {
      decrypt.push(char);
    }
  });
  let result = decrypt.join('');
  return result;
}

// Change the inputs below to test SERR PBQR PNZ
rot13('SERR PBQR PNZC');
