/**
 * Multy dimension array란?
 * - 2차원 배열
 * - 배열 안에 배열이 있는 형태
 * - 배열의 요소로 배열을 가지는 배열
 */
const num2Darray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2Darray: string[][] = [
  ["a", "b", "c"],
  ["d", "e", "f"],
];

for (let i = 0; i < num2Darray.length; i++) {
  for (let j = 0; j < num2Darray[i].length; j++) {
    console.log(num2Darray[i][j]);
  }
} // 1 2 3 4 5 6