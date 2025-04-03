export function caesarCipher(value, shift) {
  const shiftedValue = value.split("");
  for (let index = 0; index < shiftedValue.length; index++) {
    const isLetter = /[A-Za-z]/.test(shiftedValue[index]);
    if (isLetter) {
      const charIndex = shiftedValue[index].charCodeAt();
      let newChar = charIndex + shift;
      if ((newChar > 90 && newChar < 97) || newChar > 122) newChar -= 26;
      shiftedValue[index] = String.fromCharCode(newChar);
    }
  }
  return shiftedValue.join("");
}
