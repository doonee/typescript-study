"use strict";
/**
 * type과 interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 타입스크립트는 전체 파일들을 하나로 합쳐서 컴파일하기 때문에
 * 같은 이름의 타입을 선언하면 에러가 발생한다.
 * "moduleDetection": "force", 설정이 필요하다(tsconfig.json)
 * -> 파일을 모듈로 분리하여 해결
 */
const stringVar = "blue";
const yuJin = {
    name: "Yu Jin",
    year: 1999,
};
const yuJin2 = {
    name: "Yu Jin",
    year: 1999,
};
const yuJin3 = {
    name: "Yu Jin",
    year: 1999,
};
const yuJin4 = {
    name: "Yu Jin",
};
