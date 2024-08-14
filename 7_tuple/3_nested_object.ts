/**
 * Nested Object(중첩 객체)란?
 * - 객체 안에 객체가 있는 것
 * - 객체의 속성이 객체인 경우
 */

// [1] 객체를 한번에 선언한 예시
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const doonee: NestedPerson = {
  identity: {
    name: "두니",
    age: 21,
  },
  nationality: "Korean",
};

// [2] 객체속성을 따로 분리한 예시
type TPersonIdentity = {
  name: string;
  age: number;
};

type TNestedPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

const doonee2: TNestedPerson = {
  identity: {
    name: "두니",
    age: 21,
  },
  nationality: "Korean",
};

/**
 * [1], [2] 모두 동일한 결과를 반환한다.
 * [2]의 경우, 객체의 속성을 따로 분리하여 관리할 수 있다.
 * [2]의 경우, 객체의 속성을 재사용할 수 있다.
 * [2]의 경우, 객체의 속성을 재사용할 때, 객체의 속성을 한눈에 파악할 수 있다.
 * [2]의 경우, 객체의 속성을 재사용할 때, 객체의 속성을 수정할 때 한번에 수정할 수 있다.
 * [2]의 경우, 객체의 속성을 재사용할 때, 객체의 속성을 수정할 때 실수를 줄일 수 있다.
 * interface로도 유사하게 사용할 수 있다.
 */
