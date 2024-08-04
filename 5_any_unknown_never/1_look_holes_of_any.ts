/**
 * Any is a type that can be anything. It is a dynamic type.
 * - 어떤 타입이든 될 수 있는 타입이다. 동적 타입이다.
 */
let number: number;
number = 5;

// number.toUpperCase(); // Error

// (number as any).toUpperCase(); // No Error, 런타임에서 에러 발생

const multiplyTwo = (a: any, b: any): any => {
  return a * b;
}

let arg1: any = 'abc';
let arg2: any = true;

/**
 * any 타입으로 선언했기 때문에 에러가 발생하지 않는다.
 * [참고] any로 타입을 선언하면 자동완성도 지원하지 않는다.
 */
console.log(multiplyTwo(arg1, arg2)); // NaN (Not a Number)