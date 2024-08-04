/**
 * unknown type is a type that we can't know what it is
 * - unknown 타입은 무엇인지 알 수 없는 타입이다.
 * - any와 비슷하지만, any보다는 타입 안전성이 높다.
 * - any와 마찬가지로 모든 타입을 할당할 수 있다.
 * - any와 달리 다른 타입에 할당할 때는 명시적으로 타입을 변환해야 한다.
 * - 타입을 확정할 때까지는 가능한 사용하지 않는 것이 좋다.
 * - 타입을 확정할 때는 타입 가드와 타입 단언을 함께 사용한다.
 */
let anyValue: any;

anyValue = 123;
anyValue = "hello";
anyValue = true;
anyValue = {};
anyValue = [];
anyValue = Math.random;
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 123;
unknownValue = "hello";
unknownValue = true;
unknownValue = {};
unknownValue = [];
unknownValue = Math.random;
unknownValue = null;
unknownValue = undefined;

/**
 * anytype의 값은 모든 타입에 할당할 수 있다.
 */
let anyType: any = anyValue;
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] = anyValue;
let objectType: object = anyValue;
let numberType: number = anyValue;
let undefinedType: undefined = anyValue;
let nullType: null = anyValue;

/**
 * unknown type의 값은 모든 타입에 할당할 수는 없다.
 * - any와 unknown은 할당할 수 있지만, 나머지 타입에는 할당할 수 없다.
 * - 다른 타입에 할당할 때는 명시적으로 타입을 변환해야 한다.
 */
anyType = unknownValue;
unknownType = unknownValue;
// booleanType = unknownValue; // error
// arrayType = unknownValue; // error
// objectType = unknownValue; // error
// numberType = unknownValue; // error
// undefinedType = unknownValue; // error
// nullType = unknownValue; // error

/**
 * any type에서는 자체 내장함수를 사용할 수 있지만, unknown type에서는 사용할 수 없다.
 */
anyValue.toFixed(2);
anyValue.toUpperCase();
new anyValue();

// unknownValue.toFixed(2); // Error
// unknownValue.toUpperCase(); // Error
// new unknownValue(); // Error

function isString(value: unknown): value is string {
  return typeof value === "string";
}

let testValue: unknown;

if (isString(testValue)) {
  testValue;
}

/**
 * union type에서의 unknown type
 * - union type에서 unknown type과의 조합은 any type을 제외하고 unknown type이 된다.
 * - unknown type은 유일하게 any type과의 조합일 때는 any type이 된다.
 */
let unionType: string | unknown; // unknown
let unionType2: number | unknown; // unknown
let unionType3: unknown | any; // unknown

/**
 * intersection type에서의 unknown type
 */
type IntersectionType = string & unknown; // string
type IntersectionType2 = number & unknown; // number
type IntersectionType3 = unknown & any; // any

/**
 * operator type
 */
let number1: unknown = 10;
let number2: unknown = 20;
// number1 + number2; // error
// number1 - number2; // error

// unknown type에서 가능한 연산들
number1 === number2;
number1 == number2;
number1 != number2;
number1 !== number2;
