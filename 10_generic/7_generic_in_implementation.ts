/**
 * Generic in implementation
 * - 제너릭을 구현부에서 사용할 수 있다.
 * - 제너릭을 사용할 때는, 타입을 명시 및 추론할 수 있다.
 * - 제너릭을 사용하여, 구현부의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 구현부의 메서드의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 구현부의 속성의 타입을 지정할 수 있다.
 * - 제너릭을 사용하여, 구현부의 인스턴스를 생성할 수 있다.
 * - 제너릭을 사용하여, 구현부의 인스턴스를 생성할 때, 타입을 명시/추론/제한/조합/확장할 수 있다.
 */
interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

class Idol implements Singer<string, number> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sing(year: number): void {
    console.log(`${year}년에 ${this.name}이 노래합니다.`);
  }
}

const yujin = new Idol("Yujin");
yujin.sing(2024); // 2024년에 Yujin이 노래합니다.

class Idol2<T, V> implements Singer<T, V> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  sing(year: V): void {
    console.log(`${year}년에 ${this.name}이 노래합니다.`);
  }
}

const yujin2 = new Idol2<string, number>("Yujin");
yujin2.sing(2024); // 2024년에 Yujin이 노래합니다.