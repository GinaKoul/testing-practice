export const analyzeArray = function (array) {
  const average = () =>
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    array.length;
  const min = () =>
    array.reduce(
      (accumulator, currentValue) =>
        accumulator < currentValue ? accumulator : currentValue,
      array[0]
    );

  const max = () =>
    array.reduce(
      (accumulator, currentValue) =>
        accumulator > currentValue ? accumulator : currentValue,
      array[0]
    );

  const length = array.length;

  return {
    average: average(),
    min: min(),
    max: max(),
    length,
  };
};
