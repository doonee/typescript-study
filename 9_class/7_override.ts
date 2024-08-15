/**
 * Override란?: 부모 클래스의 메소드를 자식 클래스에서 재정의 하는 것
 *
 * - [참고] Overload란?: 같은 이름의 메소드를 여러개 정의하는 것
 */
class Parent {
  shout(name: string): string {
    return `${name}이(가) 소리칩니다.`;
  }
}

class Child extends Parent {
  /**
   * 상속 받은 메소드는 오버라이딩하여 재정의할 수 있습니다.
   * 파라미터(me)를 optional(?)로 추가할 수 있습니다.
   */
  shout(name: string, me?: string): string {
    if (me) {
      return `${name}와 ${me}가 함께 소리칩니다.`;
    }
    return `${name}이(가) 소리칩니다.`;
  }
}

/**
 * Child 클래스의 인스턴스 생성
 */
const child = new Child();
console.log(child.shout("영희")); // 영희이(가) 소리칩니다.
console.log(child.shout("영희", "철수")); // 영희이(가) 소리치고, 철수도 소리칩니다.

/**
 * 속성 Override(재정의)
 */
class PropertyParent {
  name: string | number;

  constructor(name: string | number) {
    this.name = name;
  }
} 

/**
 * name은 string | number 타입으로 선언되어 있지만,
 * number 타입으로 재정의하여 사용할 수 있습니다.
 * - 이때, constructor에서 super() 메소드를 사용하여 부모 클래스의 생성자를 호출해야 합니다.
 */
class PropertyChild extends PropertyParent {
  name: number;

  constructor(name: number) {
    super(name);
    this.name = name;
  }
}