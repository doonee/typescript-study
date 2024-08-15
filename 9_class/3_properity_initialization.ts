/**
 * Class Property Initialization
 */
class Person {
  // 일반적인 필수값 선언법
  name: string;

  // 초기값제공 선언법
  age: number = 12;

  // optional값 선언법
  address?: string;

  // type of undefined 선언법
  phone: string | undefined;

  // constructor에서 초기화
  constructor(name: string, address?: string) {
    this.name = name;
    this.address = address;
  }
}

class RouteStack {
  /**
   * 무조건 초기화 하는 속성을 알려주기 위해 !를 붙입니다.
   * - !를 붙이면, 초기화하지 않아도 에러가 나지 않습니다.
   */
  stack!: string[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}
