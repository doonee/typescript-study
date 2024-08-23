/**
 * Generic in Interface
 * - 인터페이스에 제너릭을 사용할 수 있다.
 * - 인터페이스를 구현할 때 제너릭 타입을 명시 혹은 추론할 수 있다.
 */
interface Cache<T> {
  data: T[];
  lastUpdated: Date;
}

const chche1: Cache<string> = {
  // data: ["test", 123], // 제네릭으로 string을 사용했기 때문에, number 타입은 에러가 발생한다.
  data: ["test"],
  lastUpdated: new Date(),
};

// const chche2: Cache = { // 제네릭을 명시하지 않으면, 에러로 표시된다.
//   data: [123],
//   lastUpdated: new Date(),
// };

interface defaultGeneric<T = number> {
  // 기본을 number로 설정
  data: T[];
}

const defaultGeneric1: defaultGeneric = {
  // 제네릭을 명시하지 않으면, number로 설정된다.
  data: [123],
};
