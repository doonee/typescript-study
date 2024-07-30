/**
 * Narrowing
 * - Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 되는 과정을 의미한다.
 */
// let numberOrString: number | string = 5;
// numberOrString; // number

// const decimal = 12.3456;
// console.log(decimal.toFixed(2)); // 12.35

/**
 * Narrowing 종류
 */

/**
 * 1. Assignment Narrowing
 * - 변수에 값을 할당하는 과정에서 타입이 좁혀지는 경우
 */
let numberOrString: number | string = 5;
numberOrString.toString(); // number

/**
 * 2. typeof Narrowing
 * - typeof 연산자를 사용하여 타입을 좁혀지는 경우
 */
numberOrString = Math.random() > 0.5 ? 1123 : "hello";

if (typeof numberOrString === "string") {
  numberOrString; // string
} else {
  numberOrString; // number
}

/**
 * 3. Truthiness Narrowing
 * - 조건문에서 true로 판별되는 경우
 */
let numberOrString2: null | string[] =
  Math.random() > 0.5 ? null : ["hello", "world"];

if (numberOrString2) {
  numberOrString2; // string[]
} else {
  numberOrString2; // null
}

/**
 * 4. Equality Narrowing
 * - 비교 연산자를 사용하여 타입을 좁혀지는 경우
 */
let numberOrString3: number | string = Math.random() > 0.5 ? 123 : "hello";
let stringOrBoolean: string | boolean = Math.random() > 0.5 ? "hello" : true;

if (numberOrString3 === stringOrBoolean) {
  numberOrString3; // string
  stringOrBoolean; // string
} else {
  numberOrString3; // number | string
  stringOrBoolean; // string | boolean
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? "hello" : null;

if (typeof numberOrStringOrNull === "string") {
  numberOrStringOrNull; // string
} else {
  numberOrStringOrNull; // number | null
}

/**
 * 5. in operator Narrowing
 */
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}

let human: Human = { name: "Mark", age: 35 };
let dog: Dog = { name: "Toto", type: "Dog" };

let someValue: Human | Dog = Math.random() > 0.5 ? human : dog;

// console.log('name' in human); // true

if ("type" in someValue) {
  someValue; // Dog
} else {
  someValue; // Human
}

/**
 * 6. instanceof Narrowing
 */
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "mun ja";

if (dateOrString instanceof Date) {
  dateOrString; // Date
} else {
  dateOrString; // string
}

/**
 * 7. Discriminated Unions Narrowing
 */
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string; // 강아지 종
}

let animal: Animal =
  Math.random() > 0.5
    ? { type: "dog", breed: "sigor ja v" }
    : { type: "human", height: 180 };

// 타입선택(|)이 있거나, 옵션설정(?) 있거나 유추가 어려울 수 있다.
if (animal.type === "human") {
  animal.height; // number | undefined
} else {
  animal.height; // number | undefined
  animal.breed; // string | undefined
}

// 인터페이스를 분리하여 사용하면 좀 더 명확하게 유추가 가능하다.
// 하나로 선언하는 것보다 여려개로 명확히 나눠서 union을 사용하는 것이 좋다.
interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  breed: string;
}
type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? { type: "dog", breed: "sigor ja v" }
    : { type: "human", height: 180 };

if (humanOrDog2.type === "human") {
  humanOrDog2; // Human2
} else {
  humanOrDog2; // Dog2
}

/**
 * 8. Exhaustiveness Checking
 */
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2; // Human2
    break;
  case "dog":
    humanOrDog2; // Dog2
    break;
  default:
    humanOrDog2; // never
}
