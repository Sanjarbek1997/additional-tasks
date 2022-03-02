let numbers2 = [1, 3, 5, 9];
let numberSum = function (a) {
  let summ = 0;
  for (i of a) {
    if (isNaN(i) || i.length == 0) continue;
    else summ += i;
  }
  return summ;
};
console.log(numberSum(numbers2));

let numbers = [3.02, -3.65, 5, -9];
let arr = [-7, "a", -4, 3.03, -6, 7];
function normalizeNumbers(a) {
  let yengi = [];
  for (let i of a) {
    if (isNaN(i) || i.length == 0) {
      continue;
    } else if (i < 0) {
      yengi.push(0 - Math.floor(i));
    } else {
      yengi.push(Math.floor(i));
    }
  }
  return yengi;
}
console.log(normalizeNumbers(arr));
