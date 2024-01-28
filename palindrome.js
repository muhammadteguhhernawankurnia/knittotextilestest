const deteksipalindrome = (input) => {
  let result = '';
  if (input.length <= 2) {
    return 'Teks Harus Lebih Dari 2 Huruf';
  } else {
    if (input.length > 2) {
      let strArray = input.toLowerCase().split('').join('');
      //   console.log(strArray);
      let reverseArr = [...strArray].reverse().join('');
      //   console.log(reverseArr);

      if (strArray === reverseArr) {
        result = 'Palindrome';
      } else {
        result = 'Bukan Palindrome';
      }
      return result;
    }
  }
};

console.log(deteksipalindrome('kasurrusak'));
