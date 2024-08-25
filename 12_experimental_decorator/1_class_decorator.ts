/**
 * Class Decorator 스터디
 * - 클래스 선언에 사용되는 데코레이터
 * - 클래스 생성자를 인수로 받아 클래스 정의를 조작하거나 리플렉션 메타데이터를 제공할 수 있다.
 * - 클래스 데코레이터는 클래스 선언이 완료되는 시점에 실행된다.
 */
@Test
@Frozen
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/**
 * Idol 클래스 상단에 @Test 데코레이터를 사용하면, Test 함수가 실행된다.
 * - Test 함수의 인수로 Idol 클래스 생성자가 전달된다.
 * - Test 함수는 Idol 클래스 생성자를 출력한다.
 */
function Test(constructor: Function) {
  console.log(constructor); // [Function: Idol] 
}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const yujin = new Idol("Yujin", 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yujin))); // true