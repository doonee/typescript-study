/**
 * Never
 * - never 타입은 절대 발생하지 않는 값의 타입을 나타낸다.
 * - 예를 들어, never는 항상 예외를 throw하는 함수 표현식이나
 *     화살표 함수 표현식 또는 절대 반환하지 않는 함수의 반환 타입이다.
 * - 또한, 절대 true가 될 수 없는 모든 타입 가드에 의해 좁혀진 변수도 never 타입을 획득한다.
 */

// 1. 함수에서 에러를 던지는 경우
function error(message: string): never {
  throw new Error(message);
}

// 2. 무한루프를 도는 경우
function infiniteLoop(): never {
  while (true) {}
}

// 3. 존재할 수 없는 인터섹션 타입
let neverValue: never;
let neverValue2: string & never;
let neverValue3: string & number & never;


