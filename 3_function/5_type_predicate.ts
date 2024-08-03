/**
 * Type Predicates
 * - 타입 가드는 런타임에 타입을 검사하는 함수이다.
 */

/**
 * 반환타입으로 boolean을 하지 않고 is를 붙여서 타입을 반환하는 이유는
 * 타입 가드를 사용하기 위해서이다.
 * - 타입 가드는 런타임에 타입을 검사하는 함수이다.
 */
function isNumber(input: any): input is number {
  return typeof input === "number";
}
console.log(isNumber(5)); // true
console.log(isNumber("5")); // false
console.log(isNumber("hello")); // false

// 반환타입을 boolean으로 하면 타입 가드를 사용할 수 없다.
function isNumberBoolean(input: any): boolean {
  return typeof input === "number";
}
console.log(isNumberBoolean(5)); // true
console.log(isNumberBoolean("5")); // false
console.log(isNumberBoolean("hello")); // false

// 반환값 000 is number 와 boolean 차이점
let numberExample: any = 5;

if (isNumber(numberExample)) {
  numberExample; // 마우스를 올리면 number로 인식
}

if (isNumberBoolean(5)) {
  numberExample; // 마우스를 올리면 any로 인식
}
