/**
 * Object property check(초과 속성 검사)란?
 * - 객체의 속성을 확인하는 방법
 * - 객체의 속성이 존재하는지 확인하는 방법
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

// TName 타입에 age 속성이 없기 때문에 에러 발생
// const iu: TName = {
//   name: '아이유',
//   age: 29,
// }

// TAge 타입에 name 속성이 없기 때문에 에러 발생
// const iu: TAge = {
//   name: '아이유',
//   age: 29,
// }

const iu = {
  name: "아이유",
  age: 29,
};

/**
 * 존재하는 객체를 다른 객체의 타입으로 할당할 때 초과 속성 검사가 일어나지 않는다.
 * 즉, 객체의 속성이 더 많아도 상관없다.
 * 객체의 속성이 더 적으면 에러 발생
 * -> 타입스크립트는 일일이 값을 입력할 때만 초과 속성 검사를 한다.
 */
const testName: TName = iu; // OK
const testAge: TAge = iu; // OK
