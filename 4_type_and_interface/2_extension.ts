/**
 * Extension
 */
interface IName {
  name: string;
}

// 인터페이스를 확장하여 새로운 인터페이스를 만들 수 있다.
interface IIdol extends IName {
  age: number;
}

// 속성을 모두 포함해야 한다. 하나라도 지우면 에러 발생.
const idol: IIdol = {
  name: "수지",
  age: 30,
};

/**
 * type은 멀티확장이 가능하다.
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

type TIdol = TName & TAge;

const idol2: TIdol = {
  name: "지연",
  age: 30,
};
