/**
 * Statement and Expression
 */

// Statement(문장)
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

// Expression(표현식)
const addTwoNumbersExpression = function (a: number, b: number): number {
  return a + b;
};

/**
 * statement는 +, -, *, / 등의 연산함수를 별도로 생성해야 하지만,
 * expression은 타입을 변수에 할당하여 사용할 수 있다.
 */
function addTwoNumbersStatement(a: number, b: number): number {
  return a + b;
}
function subTwoNumbersStatement(a: number, b: number): number {
  return a - b;
}
function mulTwoNumbersStatement(a: number, b: number): number {
  return a * b;
}
function divTwoNumbersStatement(a: number, b: number): number {
  return a / b;
}

// 타입선언
type CalculateType = (a: number, b: number) => number;

// expression은 타입을 변수에 할당하여 사용
const add: CalculateType = (a, b) => a + b;
const sub: CalculateType = (a, b) => a - b;
const mul: CalculateType = (a, b) => a * b;
const div: CalculateType = (a, b) => a / b;
