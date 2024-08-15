/**
 * Interface(인터페이스)
 * - 클래스나 객체가 가지고 있는 속성과 메서드를 정의하는 일종의 규칙
 * - 클래스나 객체가 인터페이스를 구현(implements)하면 인터페이스에서 정의한 속성과 메서드를 구현해야 함
 * - 인터페이스는 객체의 구조를 정의하는 형태로 사용
 * - 인터페이스는 객체의 속성과 메서드를 정의하는 것이지, 구현하는 것은 아님
 * - 인터페이스는 클래스나 객체가 가지고 있는 속성과 메서드를 정의하는 일종의 규칙
 */
interface Animal {
  name: string;
  age: number;
  jump(): void;
}

/**
 * 클래스가 인터페이스를 implements하면, 인터페이스에서 정의한 속성과 메서드를 구현해야 함
 * - implements: 구현하다
 */
class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이(가) 점프합니다.`;
  }

  // 메서드를 추가해도 된다.
  eat() {
    return `${this.name}이(가) 먹습니다.`;
  }
}

let ori: any = new Dog("오리", 3);

function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}

if (instanceOfAnimal(ori)) {
  console.log(ori.jump());
}

/**
 * 다중 인터페이스 구현
 * - 클래스가 여러 인터페이스를 구현할 수 있습니다.
 * - 여러 인터페이스를 구현할 때는 쉼표(,)로 구분합니다.
 * - 여러 인터페이스를 구현할 때는 인터페이스에서 정의한 속성과 메서드를 모두 구현해야 합니다.
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  name: string;
  age: number;
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name}이(가) 점프합니다.`;
  }

  bark(): void {
    console.log(`${this.name}이(가) 짖습니다.`);
  }
}

/**
 * 여러개의 인터페이스를 하나의 타입으로 구성할 수 있습니다.
 */
type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  name: string;
  age: number;
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name}이(가) 점프합니다.`;
  }

  bark(): void {
    console.log(`${this.name}이(가) 짖습니다.`);
  }
}

/**
 * 인터페이스 다중 상속 규칙
 * - 중복되는 속성이나 메서드가 있으면 안됩니다.
 */

/**
 * 인터페이스로 constructor 정의하기
 * - 인터페이스로 constructor를 정의할 수 있습니다.
 * - constructor를 정의할 때는 new로 시작합니다.
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor {
  new (name: string, age: number): Idol;
}

// [중요!] 제너릭에서 자주 사용됩니다.
function createIdol(ctor: IdolConstructor, name: string, age: number) {
  // return new Idol(name, age);
  return new ctor(name, age);
}

console.log(createIdol(Idol, "아이유", 29));
