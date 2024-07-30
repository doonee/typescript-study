/**
 * Union Basics
 *
 * 유니온은 TS에서 두 개 이상의 타입을 병합하는 수많은 방법 중 하나입니다.
 */
type StringOrNumber = string | number;

let item: StringOrNumber = "blue";
item = 5;
// item = true; // [Erro] Type 'true' is not assignable to type 'StringOrNumber'

type StringBoolNullType = string | boolean | null;

let item2: StringBoolNullType = "blue";
item2 = true;
item2 = null;

type StateTypes = "done" | "error" | "loading" | "initial";

let state: StateTypes = "done";
state = "error";
// state = "success"; // [Error] Type '"success"' is not assignable to type 'StateTypes'

/**
 * 리스트의 유니언
 */
type StringListOrBooleanList = string[] | boolean[];

let list: StringListOrBooleanList = ["blue", "red"];
list = [true, false];
// list = ["blue", true]; // [Error] Type 'string' is not assignable to type 'boolean[]'

type StringOrNumberList = (string | number)[];

let list2: StringOrNumberList = ["blue", "red"];
list2 = [1, 2, 3];
list2 = ["blue", 2]; // [가능]

/**
 * 인터페이스로 사용하는 유니언
 */
interface Animal {
  name: string;
  age: number;
}
interface Person {
  name: string;
  age: number;
  address: string;
}

type AnimalOrPerson = Animal | Person;

let animalOrPerson: AnimalOrPerson = {
  name: "Yu Jin",
  age: 22,
  address: "Seoul",
};

console.log(animalOrPerson);
