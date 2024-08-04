/**
 * Tuple란?
 * - 배열과 비슷하지만, 타입과 길이가 고정된 배열을 표현할 때 사용
 * - 배열과 마찬가지로 인덱스로 값을 접근 가능
 * - 배열과 달리 타입이 다른 요소를 가질 수 있음
 * - 배열과 달리 push, pop 등의 메서드를 사용할 수 없음
 * - 배열보다 메모리를 적게 사용
 * - 사용 용도: 고정 길이 배열을 사용해야 할 때
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

let numberAndStringTuple: readonly [number, string] = [1, "안유진"];
// numberAndStringTuple.push(2); // Error

/**
 * Tuple의 타입 추론
 */
let actreses = ["김고은", "김태리", "송혜교"]; // string[]
let numberAndStringTuple2 = ["김고은", "김태리", "송혜교"] as const; // readonly ["김고은", "김태리", "송혜교"]

/**
 * named tuple
 * - 요소의 이름을 지정할 수 있음
 * - 요소의 이름을 통해 접근 가능
 * - 요소의 이름을 통해 타입을 명시할 수 있음
 * - 요소의 이름을 통해 가독성이 높아짐
 */
const namedTuple: [first: number, second: string] = [1, "one"];

/**
 * Tuple의 할당
 * - Tuple은 같은 타입끼리만 할당 가능.
 */
// let newTuple: [number, number] = namedTuple; // error
let newTuple: [number, string] = namedTuple;

// 구체적 -> 구체적이지 않은 타입으로 할당 가능
let newTuple2: [number, string] = namedTuple;

// 구체적이지 않은 -> 구체적인 타입으로 할당 불가능
// let namedTuple2: [first: number, second: string] = newTuple2; // error

/**
 * multi demensional tuple
 */
const tuple2D: [string, number][] = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];
