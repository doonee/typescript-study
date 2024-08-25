/**
 * Readonly<Type>
 * - Readonly를 사용하면, 타입의 모든 속성을 읽기 전용으로 만든다.
 * - 읽기 전용으로 만들면, 값을 변경할 수 없다.
 * - Readonly를 사용하면, 타입을 복사하여 새로운 타입을 만든다.
 * - Readonly를 사용하면, 타입을 변경할 수 없다.
 * - Object.freeze를 사용하여, 객체를 변경할 수 없도록 만들 수도 있다.
 */
interface ICat {
  name: string;
  age: number;
}

const yaong: Readonly<ICat> = {
  name: "Yaong",
  age: 2,
};

// yaong.name = "Yaong Yaong"; // Error: Cannot assign to 'name' because it is a read-only property

Object.freeze(yaong); // 객체를 변경할 수 없도록 만든다.