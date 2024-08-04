/**
 * Spread Operator란?
 * - 배열이나 객체를 펼쳐서 사용할 수 있게 해주는 문법
 * - ...을 사용하여 표현
 * - 배열의 경우, 배열의 요소를 펼쳐서 사용할 수 있음
 * - 객체의 경우, 객체의 속성을 펼쳐서 사용할 수 있음
 * - Spread Operator를 사용하면 기존 배열이나 객체를 변경하지 않고 새로운 배열이나 객체를 생성
 */
const arrOnlyString = ["a", "b", "c"];
const arrOnlyNumber = [1, 2, 3];

const arrNew1 = [...arrOnlyString]; // string[]

const arrNew2 = [...arrOnlyNumber]; // number[]

// 배열을 합치는 방법
const arrNew3 = [...arrOnlyString, ...arrOnlyNumber]; // (string | number)[]
