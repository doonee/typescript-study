/**
 * Type vs Interface
 */
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function을 선언할 때
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * type에서는 할 수 있지만 interface에서는 할 수 없는 것들
 */

// 1. premitive type 선언하기
type name = string;

// 2. union type 선언하기
type Direction = "left" | "right" | "up" | "down";

// 3. primitive list 또는 tuple type 선언하기
type TupleType = [string, boolean];

/**
 * interface에서는 할 수 있지만 type에서는 할 수 없는 것들
 */

/**
 * 1. interface merge
 * - 같은 이름의 interface를 선언하면 자동으로 합쳐진다.
 * - type은 중복되는 이름을 선언할 수 없다.
 */
interface IUser {
  name: string;
}

interface IUser {
  age: number;
}

const user: IUser = {
  name: "capt",
  age: 100,
};
