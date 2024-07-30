"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Types
 */
let helloText = "Hello";
// lelloText = 5; // Error: Type '5' is not assignable to type 'string'
/**
 * 7가지 자바스크립트와 타입스크립트 공존 타입
 */
const stringVar = "blue"; // string
const numberVar = 6; // number
const bigIntVar = BigInt(999999); // bigint, "target": "es2020" 설정 필요(tsconfig.json)
const booleanVar = false; // boolean
const symbolVar = Symbol("blue"); // symbol,
const nullVar = null; // null
const undefinedVar = undefined; // undefined
/**
 * 타입스크립트에만 존재하는 타입
 */
let anyVar; // any, 아무 타입이나 가능
anyVar = "blue";
anyVar = 5;
anyVar = true;
// 어떤 타입이든 대입 가능
let testNumber = anyVar; // any 타입은 다른 타입에 대입 가능
let testString = anyVar; // any 타입은 다른 타입에 대입 가능
let testBoolean = anyVar; // any 타입은 다른 타입에 대입 가능
let unknownVar; // unknown, any와 비슷하지만 any보다 엄격
unknownVar = "blue";
unknownVar = 5;
unknownVar = true;
// let testNumber2: number = unknownVar; // Error: Type 'unknown' is not assignable to type 'number'
// let testString2: string = unknownVar; // Error: Type 'unknown' is not assignable to type 'string'
// let testBoolean2: boolean = unknownVar; // Error: Type 'unknown' is not assignable to type 'boolean'
let testUnKnown = unknownVar; // 가능
let testAny2 = unknownVar; // 가능
let neverVar; // never, 절대 발생하지 않는 값의 타입
// neverVar = null; // Error: Type 'null' is not assignable to type 'never'
// neverVar = undefined; // Error: Type 'undefined' is not assignable to type 'never'
// neverVar = 5; // Error: Type '5' is not assignable to type 'never'
/**
 * 리스트 타입
 */
let list1 = ["blue", "red", "yellow"]; // string 타입의 리스트
let list2 = [1, 2, 3]; // number 타입의 리스트
