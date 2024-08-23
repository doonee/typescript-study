/**
 * Generic in Inheritance
 * - 제너릭을 상속받은 클래스에서 사용할 수 있다.
 * - 제너릭을 상속받은 클래스에서는, 부모 클래스의 제너릭을 사용/재정의/확장할 수 있다.
 * - 제너릭을 상속받은 클래스에서는, 부모 클래스의 제너릭을 사용할 때, 타입을 명시/추론/확장/제한할 수 있다.
 */
class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> {} // BaseCache의 제너릭을 string으로 사용
const stringCache = new StringCache(); // stringCache: StringCache
stringCache.data; // string[]

class GenericChile<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}

const genericChile = new GenericChile<string, string>("Hello, World!");
genericChile.data; // string[]
genericChile.message; // string | undefined

/**
 * 제너릭의 inheritance(상속)
 */
interface BaseGeneric {
  name: string;
}

/**
 * 특정한 요소를 포함하기 위해 T 타입이 BaseGeneric을 상속받는다.
 */
class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

// name이 없으면 에러 발생.
const yujin = new Idol({ name: "Yujin", age: 23 });

/**
 * keyof 함께 사용하기
 */
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

// key는 무조건 object O 안에 있는 key 중 하나여야 한다.
function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

// a, b, c 중 하나만 가능
console.log(objectParser(testObj, "a")); // 1

/**
 * Ternary
 * 1 === 2 ? true : false
 */
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
  type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();
