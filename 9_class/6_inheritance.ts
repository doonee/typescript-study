/**
 * Inheritance(상속)
 * - 부모 클래스의 프로퍼티와 메소드를 자식 클래스에서 사용할 수 있게 하는 것
 * - extends 키워드를 사용하여 상속을 받을 수 있다.
 * - 부모 클래스의 생성자를 호출할 때는 super() 메소드를 사용한다.
 * - 부모 클래스의 메소드를 자식 클래스에서 오버라이딩할 수 있다.
 * - 부모 클래스의 메소드를 자식 클래스에서 호출할 때는 super.메소드명()을 사용한다.
 * - 부모 클래스의 프로퍼티를 자식 클래스에서 호출할 때는 super.프로퍼티명으로 사용한다.
 * - 부모 클래스의 static 메소드를 자식 클래스에서 호출할 때는 super.메소드명()을 사용한다.
 * - 부모 클래스의 static 프로퍼티를 자식 클래스에서 호출할 때는 super.프로퍼티명으로 사용한다.
 * - 부모 클래스의 private 프로퍼티와 메소드는 상속되지 않는다.
 * - 부모 클래스의 protected 프로퍼티와 메소드는 상속되며, 자식 클래스에서 사용할 수 있다.
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    return `${this.name}이(가) 춤을 춥니다.`;
  }
}

class Child extends Parent {
  age: number; // 자식 클래스에서 추가된 프로퍼티

  constructor(name: string, age: number) {
    super(name); // 부모 클래스의 생성자 호출(필수), this 대신 super를 사용
    this.age = age; // 자식 클래스에서 추가된 프로퍼티 초기화
  }

  dance() {
    // 부모 클래스의 메소드 오버라이딩
    return `${this.name}은(는) 춤추고, 나이는 ${this.age}세 입니다.`;
  }

  sing() {
    return `${this.name}이(가) 노래합니다.`;
  }
}

/**
 * Parent 클래스와 Child 클래스의 인스턴스 각각 생성
 */
const parent = new Parent("부모");
const child = new Child("자식", 10);
console.log(parent.dance()); // 부모 is dancing.
console.log(child.dance()); // 자식 is dancing with 10 years old.
console.log(child.sing()); // 자식 is singing.

/**
 * optional 프로퍼티를 유의하자!
 */
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let child1: Child = child;
// child1 = parent; // Child와 Parent 클래스 구조가 다르기 때문에 에러가 발생한다.

/**
 * optional 프로퍼티를 가진 자식 클래스
 * - age 프로퍼티는 optional이므로, 생성자에서 초기화하지 않아도 된다.
 * - 생성자에서 초기화하지 않으면, undefined로 초기화된다.
 */
class Child2 extends Parent2 {
  age?: number; // optional 프로퍼티

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

/**
 * Parent2 클래스와 Child2 클래스의 인스턴스 각각 생성
 * - Child2는 Parent2의 프로퍼티를 상속받는다.
 * - Child2와 Parent2는 상식적으로 같을 수 없지만,
 *    optional 프로퍼티를 사용하면, 비교연산이 가능해서 에러가 발생하지 않는다.
 */
const parent2 = new Parent2("부모");
const child2 = new Child2("자식");
console.log("-----------------");
console.log(parent2); // Parent2 { name: '부모' }
console.log(child2); // Child2 { name: '자식', age: undefined }

let child3: Child2 = child2;
child3 = parent2; // Child2와 Parent2의 구조가 같기 때문에 에러가 발생하지 않는다.
// 이와 같은 현상은 타입스크립트만 가지는 특징이다.
