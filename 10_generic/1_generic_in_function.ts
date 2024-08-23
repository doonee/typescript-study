/**
 * Generic in function
 * - 제너릭이란 타입을 파라미터로 받아서 사용하는 것
 * - 함수를 정의할 때 타입을 파라미터로 받아서 사용할 수 있다.
 * - 함수를 호출할 때 파라미터의 타입을 명시적으로 지정할 수 있다.
 * - 함수를 호출할 때 파라미터의 타입을 추론할 수 있다.
 */
function whatValue(value: any) {
  return value;
}

const value = whatValue("test"); // value: any

function genericWhatValue<T>(value: T): T {
  return value;
}

/**
 * genericWhatValue 함수를 호출할 때 파라미터의 타입을 명시적으로 지정할 수 있다.
 * 바로 아래는 string 타입을 명시적으로 지정하였기 때문에, genericValue는 string 타입이 된다.
 * 파라미터에 string 외의 타입을 넣으면 에러가 발생한다.
 */
const genericValue = genericWhatValue<string>("123"); // genericValue: string
// const genericValue2 = genericWhatValue<string>(123); // Error: Argument of type '123' is not assignable to parameter of type 'string'.

// genericWhatValue 함수를 호출할 때 파라미터의 타입을 추론할 수 있다.
const genericValue3 = genericWhatValue(123); // genericValue3: number
const genericValue4 = genericWhatValue("123"); // genericValue4: string

/**
 * 여러개의 제너릭을 사용할 수 있다.
 */
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return { x, y, z };
}

// 파라미터 순서가 바뀌면 에러가 발생한다.
const multipleGenericsValue = multipleGenerics<string, number, boolean>(
  "test",
  123,
  true
);
// 타입에 대한 자동유추도 가능하다.
// const multipleGenericsValue = multipleGenerics("test", 123, true);

/**
 * 튜플을 반환하는 함수에 제너릭을 사용할 수 있다.
 */
function getTuple<X, Y>(x: X, y: Y) {
  return [x, y] as const; // const: readonly tuple
}

const tuple = getTuple(true, 100); // tuple: readonly [boolean, number]

/**
 * 함수에 활용
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

/**
 * 생성자에서 파라미터를 자유롭게 받을 수 있는 타입을 만들어보자.
 */
function instiontiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

console.log(instiontiator(Idol, "아이돌", 10)); // Idol { name: '아이돌', age: 10 }
console.log(instiontiator(Car, "BMW", "M3")); // Car { brand: 'BMW', codeName: 'M3' }
