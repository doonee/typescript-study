/**
 * Type inference: 타입 추론
 * - 타입스크립트는 타입을 명시하지 않아도 타입을 추론한다.
 * - 타입 추론은 변수를 선언하고 초기화할 때 타입을 추론한다.
 * - 타입 추론은 변수를 선언할 때만 적용된다.
 * - 변수를 선언할 때 타입을 명시하면 타입 추론이 적용되지 않는다.
 */
let stringType = "string"; // string으로 타입추론
let numberType = 5; // number로 타입추론
let booleanType = true; // boolean으로 타입추론
// booleanType = 'abc'; // [Error] Type '"abc"' is not assignable to type 'boolean'
let arrayType = [1, 2, 3]; // number[]으로 타입추론

/**
 * 
 */
const yuJin3  = {
  name: "Yu Jin" as const, // as const를 사용하면 타입추론이 된다.
  year: 1999 as const, // as const를 사용하면 타입추론이 된다.
};
