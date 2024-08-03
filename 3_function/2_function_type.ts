/**
 * Function Type
 */

type Mapper = (x: string) => string;

/** 아이돌 멤버를 .map() 함수로 받아오는 변수 */
const runner = (callback: Mapper) => {
  // 아이돌 멤버이름 배열
  const members = ["수지", "지연", "혜리", "소진", "유리"];
  // 아이돌 멤버 이름을 반환
  return callback;
};

console.log(runner((x) => `아이돌 멤버: ${x}`));

type MultiplyTwoMembers = (a: number, b: number) => number;

/** 타임인자가 정해진 함수타입을 정의해주면
 * a와 b가 자동으로 정해진 types인 number를 취한다.
 */
const multiplyTwoMembers: MultiplyTwoMembers = (a, b) => a * b;

/**
 * 인터페이스로 함수 타입 정의
 */
interface IMultiply {
  (a: number, b: number): number;
}

const multiply: IMultiply = (a, b) => a * b;
