/**
 * type과 interface
 */

/**
 * Type
 * - type은 typescript의 type에 이름을 붙이는 것이다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFeMale = "male" | "female";

/**
 * 타입스크립트는 전체 파일들을 하나로 합쳐서 컴파일하기 때문에
 * 같은 이름의 타입을 선언하면 에러가 발생한다.
 * "moduleDetection": "force", 설정이 필요하다(tsconfig.json)
 * -> 파일을 모듈로 분리하여 해결
 */
const stringVar: NewStringType = "blue";

type IdolType = {
  name: string;
  year: number;
};

const yuJin: IdolType = {
  name: "Yu Jin",
  year: 1999,
};

/**
 * Interface
 * - interface 형태는 객체의 타입을 정의하는 것이다.
 */
interface IdolTypeInterface {
  name: string;
  year: number;
}

const yuJin2: IdolTypeInterface = {
  name: "Yu Jin",
  year: 1999,
};

// 직접 선언한 타입을 interface 속성으로 사용 가능.
interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "Yu Jin",
  year: 1999,
};

/**
 * interface 속성에 optional 속성을 사용할 수 있다.
 * - 직접 선언하는 type 속성에도 interface처럼 optional 사용이 가능하다.
 */
interface IdolIT2 {
  name: NewStringType;
  year?: NewNumberType;
}

const yuJin4: IdolIT2 = {
  name: "Yu Jin",
};
