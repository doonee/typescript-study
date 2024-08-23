/**
 * Generic in method
 * - 제너릭을 메서드에서 사용할 수 있다.
 * - 제너릭을 사용할 때는, 타입을 명시 및 추론할 수 있다.
 * - 제너릭을 사용하여, 메서드의 타입과 속성의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 메서드의 인스턴스를 생성할 수 있다.
 * - 제너릭을 사용하여, 메서드의 인스턴스를 생성할 때, 타입을 명시/추론/확장할 수 있다.
 * - 제너릭을 사용하여, 메서드의 인스턴스를 생성할 때, 타입을 제한/조합할 수 있다.
 */
class Idol<T> {
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello<Time>(logTime: Time) {
    return `[${logTime}] 안녕하세요. 제 이름은 ${this.name}이고, 아이디는 ${this.id}입니다.`;
  }
}

const yujin = new Idol("a999", "Yujin");

console.log(yujin.sayHello("2023"));
console.log(yujin.sayHello(2023));

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
  }
}

const message = new Message<string>();
message.sayHello("2023", "Hello, World!");
message.sayHello<number>(2023, "Hello, World!");

/**
 * 클래스와 메서드의 제너릭 이름이 중복되는 경우
 * - 혼란스러울 수 있으므로, 중복되지 않도록 주의해야 한다.
 */
class DuplicatedGenericName<T> {
  sayHello<T>(logTime: T) {
    console.log(`message: ${typeof logTime}`);
  }
}

const duplicatedGenericName = new DuplicatedGenericName<string>();
duplicatedGenericName.sayHello("2023");
