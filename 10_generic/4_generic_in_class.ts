/**
 * Generic in class
 * - 제너릭을 클래스에서 사용할 수 있다.
 * - 제너릭을 사용할 때는, 타입을 명시 및 추론할 수 있다.
 * - 제너릭을 사용하여, 클래스의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 클래스의 메서드의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 클래스의 속성의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 클래스의 인스턴스를 생성할 수 있다.
 * - 제너릭을 사용하여, 클래스의 인스턴스를 생성할 때, 타입을 명시할 수 있다.
 * - 제너릭을 사용하여, 클래스의 인스턴스를 생성할 때, 타입을 추론할 수 있다.
 */
class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastPatchedAt?: Date;
}

const pagination = new Pagination<number, string>();
pagination.data; // number[]
pagination.message; // string | undefined
pagination.lastPatchedAt; // Date | undefined

class Pagination2<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastPatchedAt?: Date;

  constructor(data: Data[], message?: Message, lastPatchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastPatchedAt = lastPatchedAt;
  }
}

const pagination2 = new Pagination2<number, string>([1, 2, 3]);
pagination2.data; // number[]
pagination2.message; // string | undefined
pagination2.lastPatchedAt; // Date | undefined

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // boolean[]
