/**
 * Abstract class
 * - 자바스크립트에는 없는 기능
 * - 클래스를 만들 때, 특정 메서드가 무조건 구현되어야 한다면 abstract 키워드를 사용
 * - abstract 키워드가 붙은 메서드는 자식 클래스에서 구현해야 한다.
 * - abstract 키워드가 붙은 클래스는 인스턴스를 만들 수 없다.
 * - abstract 키워드가 붙은 메서드는 구현하지 않고, 자식 클래스에서 구현해야 한다.
 * - abstract 키워드가 붙은 메서드는 자식 클래스에서 구현하지 않으면 에러가 발생한다.
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// 추상클래스는 인스턴스를 만들 수 없다.
// const model = new ModelWithId(1); // Error

class Product extends ModelWithId {}

const product = new Product(1);
console.log(product); // Product { id: 1 }
console.log(product.id); // 1

abstract class ModeWithAbsoractMethod {
  abstract show(name: string): string;
}

class Person extends ModeWithAbsoractMethod {
  show(name: string): string {
    return `안녕하세요, ${name}입니다.`;
  }
}

const person = new Person();
console.log(person.show("영희")); // 안녕하세요, 영희입니다.
