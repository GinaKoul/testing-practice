export function reverse(value) {
  let copyValue = value.split("");
  for (let start = 0, end = copyValue.length - 1; start < end; start++, end--) {
    let currentLetter = copyValue[start];
    copyValue[start] = copyValue[end];
    copyValue[end] = currentLetter;
  }

  return copyValue.join("");
}
